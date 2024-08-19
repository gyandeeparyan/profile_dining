"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button"
import { AtSign, Github, Linkedin, Phone, Server, Twitter, ArrowUpRight, MessageCircle } from "lucide-react";
const page = () => {

const contactData = [
        {
          id: 1,
          icon: <AtSign className="inline"/>,
          title: "email",
          link: "https://profile.fyi/gyan",
          desc: "profile.fyi/gyan"
        },
       
        {
          id: 2,
          icon: <AtSign className="inline"  />,
          title: "phone",
          link: "https://peerlist.io/gyandeeparyan/",
          desc: "peerlist.io/gyandeeparyan/"
        },
        {
          id: 8,
          icon: <Linkedin/>,
          title: "linkdin",
          link: "https://www.linkedin.com/in/gyandeep-aryan-6a7509176/",
          desc: "gyandeep-aryan-6a7509176"
        },
        {
          id: 3,
          icon: <AtSign className="inline" />,
          title: "twitter",
          link: "gyandeeeparyan.dev@gmail.com",
          desc: "gyandeeeparyan.dev@gmail.com"
        },
        {
          id: 4,
          icon: <Github />,
          title: "github",
          link: "https://github.com/gyandeeparyan",
          desc: "gyandeeparyan"
        },
       
      ];

const creditsData = [
        {
          id: 1,
          icon: <AtSign className="inline"/>,
          title: "email",
          link: "https://profile.fyi/gyan",
          desc: "Popsy Illustraions"
        },
       
        {
          id: 2,
          icon: <AtSign className="inline"  />,
          title: "phone",
          link: "https://peerlist.io/gyandeeparyan/",
          desc: "Swiggy API"
        },
        {
          id: 8,
          icon: <Linkedin/>,
          title: "linkdin",
          link: "https://www.linkedin.com/in/gyandeep-aryan-6a7509176/",
          desc: "gyandeep-aryan-6a7509176"
        },
        {
          id: 3,
          icon: <AtSign className="inline" />,
          title: "twitter",
          link: "gyandeeeparyan.dev@gmail.com",
          desc: "gyandeeeparyan.dev@gmail.com"
        },
        {
          id: 4,
          icon: <Github />,
          title: "github",
          link: "https://github.com/gyandeeparyan",
          desc: "gyandeeparyan"
        },
       
      ];


  return (
    <div className='px-5 md:px-40 pt-24'>
      <div className='bg-rose-200  dark:border-[0.5px] border-rose-300 dark:bg-mainDark rounded-xl flex flex-col md:flex-row gap-5 justify-between md:p-8'>
        {/* text description  */}
        <div className=' flex flex-col justify-center  items-center gap-4 p-2 md:max-w-[90%]'>
          <p className="m-2  text-mainDark dark:text-rose-200">
           Profile.fyi | Dining is a unique offering by Profile.fyi , which encourages everyone
           to eat mindfully , order less , eat home cooked food. Its high time we recognise the 
           power of food and water to not only nourish our body ,but mind and spirit. All the resturants 
           listed in Profile.fyi | Dining serves highly energised food ,which is cooked in meditative state of mind . 

           
           Do you know ? About this initiative by Department of Science & Technology taken by Dr. Kalam
           called <span className="text-rose-500 underline mx-1"> <Link href="https://eco.brahmakumaris.org/what-we-do/yogic-farming/" passHref target="_blank" rel="noopener noreferrer">yogic kheti</Link></span>
          
           . Eat homecooked food as state of mind of person cooking the food also ,impacts the one who consumes it . Whats the way forward ? Like you wash you hands , take a minute to look at you food
          with a feeling of Gratitude , affirm some high vibration thoughts into it and see how calm and stable you become .
          </p>
          {/* accordion */}
          <div className="justify-center  items-center text-left ">
        
          </div>
        </div>
     
        <div className="m-2 p-6 md:max-w-[35%]">
          
        </div>
      </div>
      {/* meet the developer */}
      <div className="">
        <div className='bg-rose-200 dark:border-[0.5px] border-rose-300 dark:bg-mainDark my-4 rounded-xl flex flex-col md:flex-row gap-5 justify-around p-8'>
      
          <div className="flex max-w-2xl flex-col items-center p-2 rounded-md md:flex-row">
          
            <div className="h-150 hidden w-150 rounded-3xl bg-blue-200 dark:bg-purple-400 md:h-[200px] md:w-[200px]">
            
              <Image
                width={400}
                height={400}
                src="https://illustrations.popsy.co/amber/remote-work.svg"
                alt="Laptop"
                className="h-full w-full   rounded-xl object-cover"
              />
            </div>
            <div>
            
              <div className="my-4 md:mx-5">
                <h1 className="inline-flex dark:text-rose-500 items-center dark:text-highlightLight md:text-5xl text-3xl font-semibold ">
                  Gyandeep Aryan <ArrowUpRight className="ml-2 h-4 w-4" />
                </h1>
                
                <p className="mt-3 md:text-lg text-mainDark dark:text-rose-300 text-sm">
                  Crafting beautiful and accessible web, one component at a time
                </p>
                <Link href="https://sameeksha.vercel.app/u/gyan" passHref target="_blank" rel="noopener noreferrer">
              <Button
                type='button'
                text={"Send Anonymous Feedback"}
                className='rounded-lg mt-3 bg-buttonLight bg-rose-500 hover:bg-red-500 dark:hover:bg-accentDark px-7 text-sm font-semibold text-white dark:text-mainDark shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
               
              </Button>
            </Link>
              </div>
            </div>
          </div>

          <div className="m-4 flex flex-col gap-5">
             {/* <p className="ml-1 text-sm md:max-w-[50%]">Lets connect and share ideas! Send me a message and I am here to listen.</p>
             */}
             <div className="mt-4 flex-col flex ">
            {contactData.map((item)=>(
              <div key={item.link}>
              <Link href={item.link} passHref  target="_blank" rel="noopener noreferrer" >
              <span  className="mb-2 -ml-2 dark:text-emerald-400  mr-4 flex items-center gap-4  px-2  rounded-full bg-transparent  py-1   ">
              {item.icon}
              {item.desc}
            </span>
              </Link>
              </div>
            ))}
            
           
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page