import React from "react";
import { Star } from "lucide-react";
import Button from "./Button"
import { Plus } from 'lucide-react';
import { IMG_CDN_URL, IMG_CDN_URL_SM } from "../utils/constants";
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
  return (
    <div key={id} className='w-[300px] rounded-xl  mb-8 '>
      <picture >
      
        <img
          src={IMG_CDN_URL_SM + cloudinaryImageId}
          alt='resturant-image'
          className='h-[200px]  w-full rounded-lg object-cover'
        />
      </picture>
      <div className='py-4 flex flex-col'>
        <p className='inline-flex mb-4 items-center text-lg line-clamp-2 '>
          {name} &nbsp;{" "}
          
          <span className='mx-1'>{feeDetails.totalFee/10}</span>
        </p>
       <Button text={`Add`} className="rounded-full"/>
       
      </div>
    </div>
  );
};

export default ResturantCard;
