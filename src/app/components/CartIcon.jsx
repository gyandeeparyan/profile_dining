"use client";
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from "react"
import { ShoppingCart } from "lucide-react";
import { endShake } from "../lib/features/cartSlice";
const CartIcon = ({className}) => {


  const isShaking = useSelector((state) => state.cart.isShaking);
  const items=useSelector((state)=>state.cart.items)
  const dispatch = useDispatch();


  useEffect(() => {
    if (isShaking) {
      const timer = setTimeout(() => {
        dispatch(endShake());
      }, 300); 

      return () => clearTimeout(timer);
    }
  }, [isShaking,items, dispatch]);


  const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className={`flex md:py-1  cursor-pointer `}>
      <ShoppingCart color="#1f2937" className={`text-gray-800 ${isShaking?'shake':''}`} />
      <span className={`rounded-full h-6 w-6 px-1  text-center  items-center justify-between -mt-2 bg-gray-800 text-white ${className}`}>
        {cartItems.length}
      </span>
    </div>
  );
};

export default CartIcon;
