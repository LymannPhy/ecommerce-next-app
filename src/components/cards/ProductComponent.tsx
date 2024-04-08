"use client";

import { ProductType } from "@/types/product";
import { ProductTypeHomePage } from "@/types/products";
import Image from "next/image";


function ProductCardComponent({ name, image, price, desc }: ProductTypeHomePage) {

    const limitedDesc = desc.slice(0, 88) + (desc.length > 88 ? "..." : "");

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm">
            <div className="relative">
                <Image src={image} alt="product-img" width={100} height={100} className="w-full h-[320px]"/>
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE</div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-4">{limitedDesc}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCardComponent;
