"use client"
import { Heart, CircleX} from 'lucide-react'
import Button from "../components/Button"
import { useSelector ,useDispatch } from 'react-redux'
import Image from 'next/image'
import { IMG_CDN_URL_SM } from '../constants/constants'
import { addItem, removeItem, clearCart, increase, decrease,} from '../lib/features/cartSlice'
const Cart = () => {
const dispatch=useDispatch()
const items=useSelector((store)=>store.cart.items)
const total=useSelector((store)=>store.cart.total)


  return (<div className="mx-auto md:px-40  px-2 bg-mainDark ">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl  tracking-tight text-textDark sm:text-4xl">
          Booking details
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="rounded-3xl bg-red-200 lg:col-span-8">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className=" divide-y divide-dashed dark:divide-mainDark ">
              {items?.map((product, productIdx) => (
                <div key={product.id} className=" ">
                  <li className="flex px-6 py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        width={100}
                        height={100}
                        src={IMG_CDN_URL_SM + product.cloudinaryImageId}
                        alt={product?.name}
                        className="sm:h-38 object-contain sm:w-38   rounded-xl  object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href={product.href} className="font-semibold text-black">
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                         
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              {product.originalPrice}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                            {product.price}
                            </p>
                           
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex items-center">
                    <div className="min-w-24 px-6 flex ">
                    <Button text={"-"} onClick={()=>dispatch(decrease(product))} className="flex h-7 text-white w-7 items-center justify-center">
                       
                       </Button>
                      <p
                       
                        className="mx-1 h-7 w-9 text-mainDark  text-center"
      
                      >{product.amount}</p>
                      <Button text={"+"} onClick={()=>dispatch(increase(product))} className="flex h-7 text-white w-7 items-center justify-center">
                       
                      </Button>
                    </div>
                    <div className="text-sm">
                      <Button onClick={()=>dispatch(removeItem(product))} text={<span className="flex"><CircleX size={16} className="text-white rounded-full" />
                      <span  className="text-xs ml-2 font-medium ">Remove</span></span>} className="flex  bg-red-500 text-white items-center space-x-1 px-2 py-1 ">
                        
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-3xl bg-red-200 lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 dark:border-mainDark px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price ({items.length} item)</dt>
                  <dd className="text-sm font-medium text-gray-900">₹ {total}</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between dark:border-mainDark border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹ {total}</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Cart