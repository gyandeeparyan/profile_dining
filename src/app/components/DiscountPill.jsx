import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { applyDiscount } from '../lib/features/cartSlice';

const DiscountPill = () => {
  const selectedDiscount=useSelector((store)=>store.cart.selectedDiscount)
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
          onClick={() => handleDiscountClick(discount)}
          className={`rounded-full text-sm px-3 py-1 mx-1 mb-6 text-mainDark border-[1px] border-mainDark ${
            selectedDiscount?.id === discount.id ? "bg-emerald-500 font-bold border-emerald-500 dark:bg-emerald-500 dark:border-emerald-500" : ""
          }`}
        >
          {discount.code}
        </button>
      ))}
    </div>
  );
};

export default DiscountPill;
