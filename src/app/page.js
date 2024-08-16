"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
export default function Home() {
  const session = true;

  return (
    <main className='flex-grow  flex flex-col-reverse  dark:text-red-200 md:flex-row items-center md:justify-between justify-center px-4 md:px-36 py-24  bg-backgroundLight dark:bg-backgroundDark '>
      <section className='text-left mb-8 mx-6 '>
        <h1 className='text-3xl md:text-7xl md:w-[650px]   font-semibold'>
          dive into the world of premium dining experience
        </h1>
        <p className='mt-3 md:mt-5 text-base text-red-300 md:text-lg md:w-[250px]'>
          you are what you eat
        </p>
        <div className='flex gap-2'>
          <Link href='/product-listing'>
            <Button text={"Explore"} className=' mt-6 md:mt-10'></Button>
          </Link>
          {session ? (
            <Button
              onClick={() => signOut()}
              className='rounded-lg mt-6 md:mt-10 md:hidden mx-4 bg-buttonLight dark:bg-buttonDark hover:bg-accentLight dark:hover:bg-accentDark  px-7  text-sm font-semibold text-textLight  dark:textDark shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
              Logout
            </Button>
          ) : (
            <Link href='/sign-in'>
              <button className='rounded-lg mt-6 md:mt-10 md:hidden mx-4  bg-buttonLight dark:bg-buttonDark hover:bg-accentLight dark:hover:bg-accentDark  px-7  text-sm font-semibold text-textLight  dark:textDark shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
                Login
              </button>
            </Link>
          )}
        </div>
      </section>

      <div className='bg-indigo-100 dark:bg-red-100 mx-5 mb-10 rounded-3xl'>
        <Image
          src={"https://illustrations.popsy.co/red/woman-eating-salad.svg"}
          alt='a man messaging'
          width={500}
          height={700}></Image>
      </div>
    </main>
  );
}
