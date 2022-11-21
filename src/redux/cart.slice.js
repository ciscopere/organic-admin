import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity + action.payload.quantity;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = removeItem;
    },
  },
});

export const cartReducer = cart.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cart.actions;
