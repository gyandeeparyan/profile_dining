"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Utensils ,Soup  } from "lucide-react";
import CartIcon from "./CartIcon";
import { useSelector, useDispatch } from "react-redux";
import ThemeToggler from "@/app/components/themeToggler";

function NavbarMobile() {
  const isDark = useSelector((store) => store.app.isDark);
  const dispatch = useDispatch();
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    {
      name: "Home",
      href: "/",
      ariaLabel: "home button",
      icon: <Home />,
    },
    {
      name: "Food",
      href: "/product-listing",
      ariaLabel: "view resturants button",
      icon: pathname ==="/product-listing"?<Soup className="animate-utensilsSpin" />:<Utensils className=""/>,
    },
    {
      name: isDark?"Light":"Dark",
      href: "",
      ariaLabel: "theme toggle button",
      icon: <ThemeToggler />,
    },
    {
      name: "Cart",
      href: "/cart",
      ariaLabel: "cart button",
      icon: <CartIcon className={""} />,
    },
  ];

  return (
    <div className='fixed md:hidden z-50 bottom-0 bg-buttonLight text-textLight w-full'>
      <div className='mx-auto flex max-w-7xl items-center justify-between my-2 px-4   lg:px-8'>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.ariaLabel} // Ensures the entire link is described
            className={`flex-col py-2 px-5 rounded-3xl text-center justify-center items-center
             ${
               pathname === item.href
                 ? "bg-rose-200"
                 : "hover:bg-rose-200 dark:hover:bg-rose-200"
             }
             ${
               pathname === item.href
                 ? "dark:text-mainDark"
                 : "dark:hover:text-mainDark"
             }`}>
            <span className='sr-only'>{item.ariaLabel}</span>{" "}
            {/* Provides a screen reader only description */}
            <span className={``}>{item.icon}</span>
          
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavbarMobile;
