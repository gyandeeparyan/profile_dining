'use client'
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Home, Utensils } from 'lucide-react';
import CartIcon from "./CartIcon";
import { useSelector, useDispatch } from 'react-redux';
import ThemeToggler from "@/app/components/themeToggler";

function NavbarMobile() {
    const isDark = useSelector((store) => store.app.isDark);
    const dispatch = useDispatch();
    const pathname = usePathname();  // Get the current path

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
            icon: <ThemeToggler />,
        },
        {
            name: 'Cart',
            href: '/cart',
            icon: <CartIcon className={""} />,
        },
    ];

    return (
        <div className="sticky md:hidden z-50 bottom-0 bg-red-300 text-textLight w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between my-3 px-4 py-2 sm:px-6 lg:px-8">
                {menuItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <div className={`flex-col py-2 px-4 rounded-2xl text-center justify-center items-center
                            ${pathname === item.href ? 'bg-rose-500' : 'hover:bg-rose-600 dark:hover:bg-rose-600'}
                            ${pathname === item.href ? 'dark:text-mainDark' : 'dark:hover:text-mainDark'}`}>
                            <span className="items-center">{item.icon}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NavbarMobile;
