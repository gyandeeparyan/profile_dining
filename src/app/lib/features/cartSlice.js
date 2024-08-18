import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  discount: 0,
  isShaking:false,
  selectedDiscount :null,
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
      state.isShaking=true
    },

    endShake: (state) => {
      state.isShaking = false;  // Reset the shake state
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
      state.selectedDiscount = null;
    },
    
    increase: (state, action) => {
        const { id } = action.payload;
        const cartItem = state.items.find(item => item.id === id);
        if (cartItem) {
            // Update the amount and total correctly
            cartItem.amount += 1; // Directly increment amount
            state.total += cartItem.price; // Update total with the item's price
        }
    },
    
    decrease: (state, action) => {
        const { id } = action.payload;
        const cartItem = state.items.find(item => item.id === id);
        if (cartItem) {
            if (cartItem.amount > 1) {
                // Directly decrement amount
                cartItem.amount -= 1; 
                state.total -= cartItem.price; // Update total with the item's price
            } else {
                // Remove item and update total
                state.items = state.items.filter(item => item.id !== id);
                state.total -= cartItem.price; // Update total with the item's price
                if (state.items.length === 0) {
                    state.isEmpty = true; // Set isEmpty if no items left
                }
            }
        }
    },
      
    applyDiscount: (state, action) => {
        const discount = action.payload;
  
        // Reset total to base value without discounts
        state.total = state.items.reduce((total, item) => total + item.price * item.amount, 0);
        
        // Apply selected discount
        state.selectedDiscount = discount;
        state.discount=discount.amount*10
        state.total -= (state.total * discount.amount) / 100;
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

export const { endShake,addItem, removeItem, clearCart, increase, decrease, calculateTotals ,applyDiscount } = cartSlice.actions;

export default cartSlice.reducer;
