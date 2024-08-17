import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import resturantListingSlice from "./features/resturantListingSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      cart: cartSlice,
      resturantListing: resturantListingSlice,
    },
  });
}

export const store = makeStore();
