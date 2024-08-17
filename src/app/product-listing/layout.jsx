"use client"
import { Inter } from "next/font/google";

import NavbarMobile from "../components/NavbarMobile";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <body className={inter.className}><Navbar/>{children}<NavbarMobile/></body>
    </html>
  );
}
