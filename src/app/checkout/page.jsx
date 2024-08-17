"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
export default function Checkout() {
  const session = true;

  return (
    <main className='flex-grow  flex flex-col md:flex-row   dark:text-red-200  items-center  justify-center px-4 md:px-36 py-24  bg-backgroundLight dark:bg-backgroundDark '>
     

      <div className=' bg-red-100 dark:bg-red-100 mx-5 mb-10 rounded-3xl'>
        <Image
          src={"https://illustrations.popsy.co/orange/chef-serving-chicken.svg"}
          alt='a man messaging'
          width={300}
          height={700}></Image>
      </div>
      <p>
        Order Placed
      </p>
    </main>
  );
}
