"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
export default function Home() {
  const session = true;

  return (
    <main className='flex-grow h-screen  flex flex-col-reverse text-mainDark dark:text-red-200 md:flex-row items-center md:justify-between justify-center px-4 md:px-36 py-24  bg-backgroundLight dark:bg-backgroundDark '>
      <section className='text-left mb-8 mx-6 '>
        <h1 className='text-3xl md:text-7xl md:w-[650px]   font-semibold'>
          dive into the world of premium dining experience
        </h1>
        <p className='mt-3 md:mt-5 text-base text-rose-700 dark:text-rose-300 md:text-lg md:w-[250px]'>
          you are what you eat
        </p>
        <div className='flex gap-2'>
          <Link href='/product-listing'>
            <Button text={"Explore"} className=' rounded-lg mt-6 bg-rose-400 text-white md:mt-10'></Button>
          </Link>
          
        </div>
      </section>

      <div className='bg-red-100 md:bg-red-200 dark:bg-red-100 mx-5 mb-10 rounded-3xl'>
        <Image
          src={"https://illustrations.popsy.co/red/woman-eating-salad.svg"}
          alt='a man messaging'
          width={500}
          height={700}></Image>
      </div>
    </main>
  );
}
