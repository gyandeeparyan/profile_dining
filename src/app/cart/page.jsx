"use client";
import { useState } from "react";
import { CircleX } from "lucide-react";
import Button from "../components/Button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { IMG_CDN_URL_SM } from "../constants/constants";
import DiscountPill from "../components/DiscountPill";
import EmptyCart from "../components/EmptyCart";
import { formatPrice } from "../lib/utils";
import {
  addItem,
  removeItem,
  clearCart,
  increase,
  decrease,
} from "../lib/features/cartSlice";
const Cart = () => {
  const discounts = [
    { id: 1, code: "RAKHI10", amount: 10 }, // Example discount
    { id: 2, code: "RAKHI20", amount: 20 },
    { id: 3, code: "RAKHI30", amount: 30 },
  ];
  const [removingItemId, setRemovingItemId] = useState(null);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = (product) => {
    setRemovingItemId(product.id);
    setTimeout(() => {
      dispatch(removeItem(product));
      setRemovingItemId(null); 
    }, 300); 
  };

  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);
  const discount = useSelector((store) => store.cart.discount);
  const originalTotal = useSelector((store) => store.cart.originalTotal);
  const isEmpty = useSelector((store) => store.cart.isEmpty);
  return isEmpty ? (
    <EmptyCart />
  ) : (
    <div className='mx-auto flex  md:px-40 h-full bg-backgroundLight   px-1 dark:bg-mainDark '>
      <div className='mx-5 mt-15 md:mt-0 max-w-2xl py-8  lg:max-w-7xl'>
        <h1 className='text-3xl  tracking-tight text-mainDark dark:text-textDark sm:text-4xl'>
          Booking details
        </h1>
        <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start pb-28 lg:gap-x-12 xl:gap-x-16'>
          <section
            aria-labelledby='cart-heading'
            className='md:rounded-2xl rounded-xl -mt-4  lg:col-span-8'>
            <h2 id='cart-heading' className='sr-only'>
              Items in your shopping cart
            </h2>
            <ul
              role='list'
              className={` divide-y divide-dashed dark:divide-textDark divide-mainDark  
              }`}>
              {items?.map((product, productIdx) => (
                <div key={product.id} className=' '>
                  <li
                    className={`flex bg-red-200 rounded-lg my-3 px-6 py-6 sm:py-4 ${
                      removingItemId === product.id
                        ? "animate-fadeOutSlideUp"
                        : ""
                    }`}>
                    {/* IMAGE */}
                    <div className='flex-shrink-0'>
                      <Image
                        width={100}
                        height={100}
                        src={IMG_CDN_URL_SM + product.cloudinaryImageId}
                        alt={product?.name}
                        className='  object-contain sm:w-[150px] md:w-[110px]   rounded-xl  object-center'
                      />
                    </div>
                    {/* NAME,PRICE ,+ - BUTTONS */}
                    <div className=' flex flex-1 flex-col  justify-between ml-8 sm:ml-6'>
                      <div className='flex flex-col justify-center'>
                        <div className='flex justify-between'>
                          <h3 className=' text-black line-clamp-1'>
                            {product.name}
                          </h3>
                        </div>
                        <div className='mt-1 flex text-sm'></div>
                        <div className='mt-1 flex items-end'>
                          <p className='text-sm font-medium text-gray-900'>
                            {formatPrice(product.price, "INR", "en-IN")}
                          </p>
                        </div>
                        <div className='text-sm mt-3'>
                          <div className='min-w-24 flex '>
                            <Button
                              text={"-"}
                              onClick={() => dispatch(decrease(product))}
                              className='flex h-7 text-white bg-red-500 dark:bg-red-500 rounded-lg w-7 items-center justify-center'></Button>
                            <p className='mx-1 h-7 flex items-center text-mainDark  text-center'>
                              {product.amount} Person
                            </p>
                            <Button
                              text={"+"}
                              onClick={() => dispatch(increase(product))}
                              className='flex h-7 bg-emerald-500 dark:bg-emerald-500 rounded-lg text-white w-7 items-center justify-center'></Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleRemove(product)}
                      text={
                        <span className='flex'>
                          <CircleX
                            size={30}
                            className='text-mainDark font-thin  rounded-full'
                          />
                        </span>
                      }
                      className=' rounded-full  h-[40px]  !bg-transparent text-mainDark items-center   -mt-2 pr-0 pb-0 '></Button>
                  </li>
                </div>
              ))}
            </ul>
          </section>

          {/* Order summary */}

          <section
            aria-labelledby='summary-heading'
            className='mt-16 px-4 py-4   rounded-lg bg-red-200 lg:col-span-4 lg:mt-0 lg:p-0'>
            <div>
             
             
              <div className='md:px-3 md:py-3 '>
                <dl className=' space-y-1 px-1 py-2'>
                  <div className='flex items-center justify-between'>
                    <dt className='text-sm text-gray-800'>
                      Price ({items.length} item)
                    </dt>
                    <dd className='text-sm font-medium text-gray-900'>
                      {" "}
                      {formatPrice(originalTotal, "INR", "en-IN")}
                    </dd>
                  </div>
                  <div className='flex items-center justify-between pt-4'>
                    <dt className='flex items-center text-sm text-gray-800'>
                      <span>Discount</span>
                    </dt>
                    <dd className='text-sm font-medium text-emerald-700'>
                      - {formatPrice(discount, "INR", "en-IN")}
                    </dd>
                  </div>
                  <div className='flex items-center justify-between py-4'>
                    <dt className='flex text-sm text-gray-800'>
                      <span>Offers</span>
                    </dt>
                  </div>
                  <DiscountPill />
                  <div className='flex items-center justify-between border-mainDark border-y border-dashed py-4 '>
                    <dt className='text-base font-medium text-gray-900'>
                      Total Amount
                    </dt>
                    <dd className='text-base font-medium text-gray-900'>
                      {" "}
                      {formatPrice(total, "INR", "en-IN")}
                    </dd>
                  </div>
                </dl>
                <div className='px-1 pb-4 font-medium text-emerald-700'>
                  You will save {formatPrice(discount, "INR", "en-IN")} on this
                  order
                </div>
              
              </div>
              <Link href={"/checkout"}>
                    <Button
                      onClick={() => dispatch(clearCart())}
                      text={
                        <span className='flex justify-around'>
                          <span className='md:text-xs  text-sm ml-2 py-2 md:font-medium '>
                            Checkout
                          </span>
                        </span>
                      }
                      className='flex  bg-red-500 w-full md:rounded-b-lg md:rounded-t-none text-white justify-center items-center rounded-lg space-x-1 md:px-4  md:py-2 '></Button>
                  </Link> 
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
