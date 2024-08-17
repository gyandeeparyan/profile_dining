"use client"

import {useState}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import ResturantCard from './ResturantCard';


const ResturantListing = () => {
const resturants=useSelector((store)=>store.resturantListing.resturants)
 
  return (
    <div className='container  md:px-32 py-24 md:py-20  mx-[60px] md:mx-[42px] grid grid-cols-1  dark:bg-mainDark dark:text-brand-beige md:grid-cols-3'>

        {resturants.map((resturant) => {
          return (
            <div key={resturant.info.id}>
            <ResturantCard {...resturant.info} />
            </div>
          );
        })}
      </div>
  )
}

export default ResturantListing