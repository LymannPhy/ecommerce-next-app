import { Suspense } from "react";
import LoadingComponent from "../loading";


import type { Metadata } from "next";
import { ProductType } from "@/types/product";
import ProductCardComponent from "@/components/cards/ProductComponent";
import Link from "next/link";
import { ProductTypeHomePage } from "@/types/products";
async function fetchProducts() {
    const products = await fetch("https://store.istad.co/api/products", {
        cache: "no-store"
    });
    const res = await products.json();
    return res.results;
}

export const metadata: Metadata = {
    title: "Home",
    description: "This is a place where you can find and buy any types of product",
    keywords: ["shop", "discount", "promotion", "coupon"],
    openGraph: {
        title: "Home",
        description: "This is a place where you can find and buy any types of product",
        images: [
            "https://i.pinimg.com/564x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg"
        ]
    }
};

export default async function Product() {
    const products = await fetchProducts();

    return (
        <>
            <div className="mt-10 flex justify-center flex-wrap gap-5">
                <Suspense fallback={<LoadingComponent />} >
                    {products?.map((product: ProductTypeHomePage) => (
                        <Link href={`/product/${product.id}`} key={product.id}>
                            <ProductCardComponent
                                key={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                desc={product.desc}
                            />
                        </Link>
                    ))}
                </Suspense>
            </div>
        </>
    );
}
