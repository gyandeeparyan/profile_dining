import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import resturantListingSlice from "./features/resturantListingSlice";
import appSlice from "./features/appSlice"
export function makeStore() {
  return configureStore({
    reducer: {
      app:appSlice,
      cart: cartSlice,
      resturantListing: resturantListingSlice,
    },
  });
}

export const store = makeStore();
