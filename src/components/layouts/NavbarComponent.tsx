"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <header className="sticky top-0 z-50">
      <section className="w-[100%] mx-auto  shadow-ss1 flex justify-center">
        <Navbar fluid rounded className=" w-[100%]">
          <Navbar.Brand href="page.tsx" className="py-2">
            <Image width={50} height={50}
              src="/assets/tink-logo.jpg"
              alt="Tink Product Logo"
            />
            <span className="self-center whitespace-nowrap text-[22px] font-semibold text-blue-500">
              TINK
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button as={Link} href="/dashboard" className="bg-blue-500 ">Dashboard</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/" className="text-[18px] text-blue-600">
              Home
            </Navbar.Link>
            <Navbar.Link
              href="/about-us"
              className="text-[18px] text-gray-800 hover:text-emerald-600"
            >
              About Us
            </Navbar.Link>
            <Navbar.Link
              href="/policy"
              className="text-[18px] text-gray-800 hover:text-emerald-600"
            >
              Policy
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </header>
  );
}
