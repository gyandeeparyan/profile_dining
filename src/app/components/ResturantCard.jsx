import React from "react";
import { Star } from "lucide-react";
import Button from "./Button"
import { Plus } from 'lucide-react';
import Image from "next/image"
import { useDispatch,useSelector } from "react-redux";
import { addItem } from "../lib/features/cartSlice";
import { IMG_CDN_URL, IMG_CDN_URL_SM } from "../constants/constants";
const ResturantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  feeDetails,
  areaName,
  sla,
}) => {

  const dispatch=useDispatch()
  const isShaking = useSelector((state) => state.cart.isShaking);
  const handleAdd=()=>{
    const item = { 
      id, 
      name, 
      cuisines, 
      cloudinaryImageId, 
      avgRating, 
      feeDetails, 
      areaName, 
      sla,
      price: feeDetails.totalFee / 10,  
    };
    dispatch(addItem(item))
    if ("vibrate" in navigator) {
      // vibration API supported
      navigator.vibrate(50);
    }
    
    }

  return (
    <div key={id} className='w-[300px] rounded-xl  mb-8 '>
     
      
        <Image
          priority
          src={IMG_CDN_URL_SM + cloudinaryImageId}
          alt='resturant-image'
          width={200}
          height={200}
          className='h-[200px]  w-full rounded-xl md:rounded-2xl object-cover'
        
        />
      
      <div className='py-4 flex text-mainDark dark:text-textDark flex-col'>
        <p className='inline-flex  mb-4 items-center line-clamp-1 text-lg  '>
          {name} &nbsp;{" "}
          
          <span className='mx-1'>{feeDetails.totalFee/10}</span>
        </p>
       <Button onClick={handleAdd} text={`Add`} className="rounded-full bg-rose-500 dark:bg-rose-500 text-white"/>
       
      </div>
    </div>
  );
};

export default ResturantCard;
