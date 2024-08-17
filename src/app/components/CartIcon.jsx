"use client";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
const CartIcon = ({className}) => {
  const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className='flex py-1 cursor-pointer '>
      <ShoppingCart className="dark:text-gray-800" />
      <span className={`rounded-full h-6 w-6 px-2 text-center flex items-center justify-between -mt-2 bg-gray-800 text-white ${className}`}>
        {cartItems.length}
      </span>
    </div>
  );
};

export default CartIcon;
