
import { createSlice,} from "@reduxjs/toolkit";
import {resturantList} from "@/app/constants/constants"

const resturants = resturantList.map(resturant => ({
  ...resturant,
  amount: 1,
}));


const initialState = {
resturants:resturants,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    
  },
 
});

export const { increment } = dataSlice.actions;
export default dataSlice.reducer;