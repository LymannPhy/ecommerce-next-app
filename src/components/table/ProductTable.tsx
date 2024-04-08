"use client";
import LoadingComponent from "@/app/loading";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  
} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Image from "next/image";
import { EditProductType, ProductType } from "@/types/product";
import { ACCESS_TOKEN } from "../constants/baseApi";

type DataRow = {
  title: string;
  director: string;
  year: string;
};

const customStyles = {
  rows: {
    style: {
      // minWidth: "1000px",
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const url_based = "https://store.istad.co/api/products/";
const ProductTable = () => {
  const [getProduct, setProduct] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ProductType[]>([]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { isOpen:isEditOpen, onOpen:onEditOpen, onOpenChange:onEditOpenChange, onClose:onEditClose } = useDisclosure();
  
  const [productDetail, setProductDetail] = useState({} as ProductType)
  const [productEdit, setProductEdit] = useState({} as EditProductType)

  function handleDetail(value: ProductType) {
    onOpen();
   
    setProductDetail(value)

  }
  function handleEdit(value: EditProductType) {
    onEditOpen();
    setProductEdit({
      ...value,
      category: {
        name: value.category.name
      },
    })

  }

  const handleDelete = async (id: number) => {
    const deleteUrl = `${url_based}${id}/`;
    console.log("Delete URL:", deleteUrl); 
    const response = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json", 
      },
    });
    if (response.ok) {
      const updatedProduct = getProduct.filter((product) => product.id !== id);
      setProduct(updatedProduct);
      setFilter(updatedProduct);
      alert("Product deleted successfully!");
    } else {
      alert("Failed to delete product.");
    }
  };

  // Function to handle editing of the product
  const handleEditProduct = async () => {
    try {
      const editUrl = `${url_based}${productEdit.id}`;
      const response = await fetch(editUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productEdit),
      });
      if (response.ok) {
        onClose()
        alert("Product edited successfully!");
      } else {
        alert("Failed to edit product.");
      }
    } catch (error) {
      console.error("Error editing product:", error);
      alert("An error occurred while editing the product.");
    }
  };
  
  const columnsData: TableColumn<ProductType>[]= [
    {
      name: "ID",
      selector: (row): any => (
        <div className=" font-bold text-blue-600">{row.id}</div>
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row): any => (
        <Image src={row.image} width={70} height={70} alt="product-img" />
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div>
            <Dropdown>
              <DropdownTrigger>
                <button>
                  <IoEllipsisHorizontal />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="detail"
                  onClick={() => handleDetail(row)}
                >
                  View Detail
                </DropdownItem>
                <DropdownItem key="edit" onClick={() => handleEdit(row)} isDisabled={row.seller !== "Phy Lymann"}>
                  Edit
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  isDisabled={row.seller !== "Phy Lymann"}
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url_based);
      const response = await data.json();
      setProduct(response.results);
      setFilter(response.results);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!search) {
      setFilter(getProduct);
      return;
    }
    const result = getProduct.filter((item: ProductType) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [getProduct, search]);

  const paginationComponentOptions = {
    rowsPerPageText: "ជួរដេកក្នុងមួយទំព័រ",
    rangeSeparatorText: "នៃ",
    selectAllRowsItem: true,
    selectAllRowsItemText: "ទាំងអស់",
  };

  return (
    
    <div className="w-full">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  {productDetail.name}
                </p>
                <p>
                  {productDetail.price}
                </p>
                <Image src={productDetail.image} width={100} height={100} alt="user" />

              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

        {/* Edit Modal */}
        <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalBody>
            <Input 
              label="Product Name"
              value={productEdit.name}
              onChange={(e) =>
                setProductEdit({
                  ...productEdit,
                  name: e.target.value,
                })
              }
            />

            <Input
              label="Price"
              value={productEdit.price}
              onChange={(e) =>
                setProductEdit({
                  ...productEdit,
                  price: e.target.value,
                })
              }
            />
            <Input
              label="Description"
              value={productEdit.desc}
              onChange={(e) =>
                setProductEdit({
                  ...productEdit,
                  desc: e.target.value,
                })
              }
            />
            <Image
              src={productEdit.image}
              width={100}
              height={100}
              alt="Product Image"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={onEditClose}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleEditProduct}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader={true}
        fixedHeaderScrollHeight="500px"
        selectableRows
        pagination
        subHeader
        // customStyles={customStyles}
        subHeaderComponent={
          <input
            className="border-[1px] px-4 py-2 w-full rounded-md border-blue-400"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        }
        paginationComponentOptions={paginationComponentOptions}
        onSelectedRowsChange={() => console.log("row selected")}
        progressComponent={<LoadingComponent />}
        customStyles={customStyles}
        data={filter}
        actions={
          <Button size="sm" color="primary">
            Export PDF
          </Button>
        }
      />
    </div>
  );
};

export default ProductTable;