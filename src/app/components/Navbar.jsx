import React from "react";
import Image from "next/image";
import Button from "./Button";
import CartIcon from "./CartIcon";
import Link from "next/link";
const Navbar = () => {
  return (
    <div class='md:px-36 relative w-full bg-white dark:bg-red-300'>
      <div class=' flex max-w-7xl items-center justify-between  py-2 sm:px-6 '>
        {/* <div class="inline-flex items-center space-x-2 rounded-xl bg-gray-100 px-4 py-2">
     <Image  width={100} height={20} src={"https://p1.edge.duggup.com/logo/profile-transparent-blue.svg"}/>
    </div> */}
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
                href='/about'
                class='text-sm font-semibold text-gray-800 hover:text-gray-900'>
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                class='text-sm font-semibold text-gray-800 hover:text-gray-900'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div class='hidden lg:block lg:flex lg:items-center '>
          <Link href={"/cart"}> 
          <CartIcon className='mr-2 ' />
          </Link>
        
        </div>
        <div class='lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='h-6 w-6 cursor-pointer'>
            <line x1='4' y1='12' x2='20' y2='12'></line>
            <line x1='4' y1='6' x2='20' y2='6'></line>
            <line x1='4' y1='18' x2='20' y2='18'></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
