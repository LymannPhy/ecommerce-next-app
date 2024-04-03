import type { Metadata } from "next";
import { Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { FooterComponent } from "@/components/layouts/FooterComponent";
import HeaderComponent from "@/components/layouts/HeaderComponent";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight:["300", "400", "500", "600"],
  display:"swap",
  style: ['italic', 'normal'],
  variable: "--font-poppins",
})
const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
})

export const metadata: Metadata = {
  title: {
    template: "%s - CSTADShopping",
    default: "Home - CSTADShopping"
  },
  description: "This is a place where you can find and buy any types of product",
  keywords: ["shop", "discount", "promotion", "coupon"],
  openGraph: {
    title: {
      template: "%s - CSTADShopping",
      default: "CSTADShopping"
    },
    description: "This is a place where you can find and buy any types of product",
    images: [
      "https://i.pinimg.com/564x/9b/86/f3/9b86f3e4e8890e37229c2e6463a9a413.jpg"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${kantumruy_pro.variable}`}>
        <NextUILayout>
          <NavbarComponent />
          <HeaderComponent/>
          <Suspense> 
            <ErrorBoundary errorComponent={Error}>
              {children}
            </ErrorBoundary>
          </Suspense>
          <FooterComponent/>
        </NextUILayout>
      </body>
    </html>
  );
}
