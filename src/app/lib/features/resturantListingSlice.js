
import { createSlice,} from "@reduxjs/toolkit";
import {resturantList} from "@/app/constants/constants"

const resturants = resturantList.map(resturant => ({
  ...resturant,
  amount: 1,
}));


const initialState = {
resturants:resturants,
};

const resturantListingSlice = createSlice({
  name: "resturantListing",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
 
});

export const { increment } = resturantListingSlice.actions;
export default resturantListingSlice.reducer;