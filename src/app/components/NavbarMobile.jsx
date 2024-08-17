'use client'
import React from 'react';
import Link from "next/link";
import { Menu,Home, X,  Utensils ,IndianRupee, MessageSquareText,Info,ShoppingCart } from 'lucide-react';
import CartIcon from "./CartIcon"


const menuItems = [
    {
        name: 'Home',
        href: '/',
       
        icon: <Home  />,
        
        
    },
    {
        name: 'Resturants',
        href: '/product-listing',
       
        icon: < Utensils />,
        
    },
    {
        name: 'About',
        href: '/about',
       
        icon: <Info />,
        
    },
    {
        name: 'cart',
        href: '/cart',
       
        icon: <CartIcon />,
        
    },
];

 function NavbarMobile() {
    return (
        <div className="sticky md:hidden z-50 bottom-0   bg-red-300 dark:bg-mainDark text-textLight dark:text-textDark w-full ">
            <div className="mx-auto  flex max-w-7xl items-center justify-between my-3 px-4 py-2 sm:px-6 lg:px-8">
                {menuItems.map((item) => (
                    <Link  key={item.name} href={item.href}>
                   <div className="flex-col  dark:focus:bg-accentDark dark:hover:bg-accentDark py-2 px-4 rounded-2xl dark:hover:text-mainDark dark:focus:text-mainDark  text-center justify-center items-center">
                    <span className="items-center ">{item.icon}</span>
                  
                   </div>
                   </Link>
                ))}
                
            </div>
        </div>
    );
}

export default NavbarMobile