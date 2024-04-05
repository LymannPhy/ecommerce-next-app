import type { Metadata } from "next";
import Product from "./product/page";
import HeaderComponent from "@/components/layouts/HeaderComponent";
import BrandComponent from "@/components/layouts/BrandComponent";

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

export default async function Home() {
  return (
    <>
      <HeaderComponent/>
      <BrandComponent/>
      <Product/>
    </>
  );
}
