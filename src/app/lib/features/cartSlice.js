import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  isEmpty: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });  // Initialize amount to 1 when adding a new item
      }
      state.isEmpty = false;
      state.total += action.payload.price;  // Update total price immediately
    },
    
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (itemToRemove) {
        if (itemToRemove.amount > 1) {
          itemToRemove.amount -= 1;
          state.total -= itemToRemove.price;  // Decrease total when amount is reduced
        } else {
          state.items = state.items.filter(item => item.id !== action.payload.id);
          state.total -= itemToRemove.price;  // Subtract total by the item's price
          if (state.items.length === 0) {
            state.isEmpty = true;
          }
        }
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.isEmpty = true;
    },
    
    increase: (state, action) => {
        const { id } = action.payload;
        const cartItem = state.items.find(item => item.id === id);
        if (cartItem) {
          state.items = state.items.map(item =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
          );
          state.total += cartItem.price;
        }
      },
      
      decrease: (state, action) => {
        const { id } = action.payload;
        const cartItem = state.items.find(item => item.id === id);
        if (cartItem) {
          if (cartItem.amount > 1) {
            state.items = state.items.map(item =>
              item.id === id ? { ...item, amount: item.amount - 1 } : item
            );
            state.total -= cartItem.price;
          } else {
            state.items = state.items.filter(item => item.id !== id);
            state.total -= cartItem.price;
            if (state.items.length === 0) {
              state.isEmpty = true;
            }
          }
        }
      },
      
    calculateTotals: (state) => {
      let total = 0;

      state.items.forEach(item => {
        total += item.price * item.amount;  // Calculate total price based on amount
      });

      state.total = total;
    },
  },
});

export const { addItem, removeItem, clearCart, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
