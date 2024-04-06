import ProductTable from "@/components/table/ProductTable";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to your personalized dashboard. Stay updated on your activities, manage your account, and explore new features.",
  keywords: ["dashboard", "account management", "activity tracking", "personalized experience"],
  openGraph: {
    title: "Dashboard - TinkProduct Online",
    description: "Welcome to your personalized dashboard. Stay updated on your activities, manage your account, and explore new features.",
    images: [
      "https://example.com/dashboard-image.jpg"
    ]
  }
};

const page = () => {
  return (
    <div className="flex flex-col justify-center w-full mx-7">
      <h1 className="font-bold text-[25px]">Product Information</h1>
      <ProductTable />
    </div>
  );
};

export default page;