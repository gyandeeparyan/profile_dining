"use client"
import React from "react";
import {useState} from "react"
import Image from "next/image";
import Button from "./Button";
import CartIcon from "./CartIcon";
import Link from "next/link";
import ThemeToggler from "@/app/components/themeToggler"
const Navbar = () => {

  return (
    <>
    <div class='sticky hidden lg:block md:px-36  w-full bg-buttonLight'>
      <div class=' flex max-w-7xl items-center justify-between  py-2 sm:px-6 '>
        <div class="inline-flex items-center space-x-2 rounded-xl  px-4 py-2">
     <Image  width={40} alt="brand logo" height={20} src={"https://p1.edge.duggup.com/logo/favicon.svg"}/>
    </div>
        <div class='hidden grow items-start lg:flex'>
          <ul class=' inline-flex space-x-8'>
            <li>
              <Link
                href='/'
                class='text-sm font-semibold text-gray-800 hover:text-gray-900'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/product-listing'
                class='text-sm font-semibold text-gray-800 hover:text-gray-900'>
                Resturants
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                class='text-sm font-semibold text-gray-800 hover:text-gray-900'>
                About
              </Link>
            </li>
           
          </ul>
        </div>
        <div class='hidden  lg:flex lg:items-center '>
        <ThemeToggler />
          <Link href={"/cart"}> 
          <CartIcon className='mr-2 ' />
          </Link>
       
        </div>
      
      </div>
    </div>


    </>
  );
};

export default Navbar;
