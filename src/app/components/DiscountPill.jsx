import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyDiscount, resetDiscount } from '../lib/features/cartSlice';

const DiscountPill = () => {
  const selectedDiscount = useSelector((store) => store.cart.selectedDiscount);
  const dispatch = useDispatch();
  const discounts = [
    { id: 1, code: "RAKHI10", amount: 10 }, // Example discount
    { id: 2, code: "RAKHI20", amount: 20 },
    { id: 3, code: "RAKHI30", amount: 30 },
  ];
  const handleDiscountClick = (discount) => {
    dispatch(applyDiscount(discount));
  };

  return (
    <div>
      {discounts.map((discount) => (
        <button
          key={discount.id}
          onBlur={()=>dispatch(resetDiscount())}
          onClick={() => handleDiscountClick(discount)}
          className={`rounded-full text-sm px-3 py-1 mx-1 mb-6 text-mainDark border-[1px] border-emerald-900 ${
            selectedDiscount?.id === discount.id
              ? "bg-emerald-500 !border-emerald-500 font-bold"
              : ""
          } dark:${
            selectedDiscount?.id === discount.id
              ? "bg-emerald-500 !border-emerald-500 font-bold"
              : ""
          }`}>
          {discount.code}
        </button>
      ))}
    </div>
  );
};

export default DiscountPill;
