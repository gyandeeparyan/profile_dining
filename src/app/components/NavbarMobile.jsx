'use client'
import React from 'react';
import Link from "next/link";
import { Menu,Home, X, Sun,Moon,  Utensils ,IndianRupee, MessageSquareText,Info,ShoppingCart } from 'lucide-react';
import CartIcon from "./CartIcon"
import { useSelector,useDispatch } from 'react-redux';
import { toggleTheme } from '../lib/features/appSlice';
import ThemeToggler from "@/app/components/themeToggler"



 function NavbarMobile() {
    const isDark=useSelector((store)=>store.app.isDark)
    const dispatch=useDispatch()
    const menuItems = [
        {
            name: 'Home',
            href: '/',
            icon: <Home />,
        },
        {
            name: 'Restaurants',
            href: '/product-listing',
            icon: <Utensils />,
        },
        {
            name: 'Theme',
            href: '',
            icon: <ThemeToggler/>, 
        },
        {
            name: 'Cart',
            href: '/cart',
            icon: <CartIcon className={""} />,
        },
    ];




    return (
        <div className="sticky md:hidden z-50 bottom-0   bg-red-300  text-textLight  w-full ">
            <div className="mx-auto  flex max-w-7xl items-center justify-between my-3 px-4 py-2 sm:px-6 lg:px-8">
                {menuItems.map((item) => (
                    <Link  key={item.name} href={item.href}>
                   <div className="flex-col  dark:focus:bg-rose-600 dark:hover:bg-rose-600 py-2 px-4 rounded-2xl dark:hover:text-mainDark dark:focus:text-mainDark  text-center justify-center items-center">
                    <span className="items-center ">{item.icon}</span>
                  
                   </div>
                   </Link>
                ))}
                
            </div>
        </div>
    );
}

export default NavbarMobile