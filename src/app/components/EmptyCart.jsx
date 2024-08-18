"use client";
import Image from "next/image";
import { CircleCheck } from 'lucide-react';
import Link from "next/link";
import Button from "../components/Button";
 function EmptyCart() {
  const session = true;

  return (
    <main className='flex-grow h-screen flex flex-col    dark:text-red-200  items-center  justify-center px-4 md:px-36 py-24  bg-backgroundLight dark:bg-backgroundDark '>
     

      <div className=' bg-red-200 dark:bg-red-100 mx-5 mb-10 rounded-3xl'>
        <Image
          src={"https://illustrations.popsy.co/red/cooking-soup.svg"}
          alt='a man messaging'
          width={300}
          height={700}></Image>
      </div>
      <p className=" flex items-center">
        <span className="sr-only">cart is empty</span>
        <span className="dark:text-textDark text-mainDark">homecooked food is best</span>
      </p>
    </main>
  );
}
export default EmptyCart