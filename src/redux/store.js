import { configureStore } from "@reduxjs/toolkit";
import cartDrawerReducer from "./cartDrawer.slice";
import { cartReducer } from "./cart.slice";
import { persistStore, persistReducer } from "redux-persist";

export const store = configureStore({
  reducer: {
    cartDrawer: cartDrawerReducer,
    cart: cartReducer,
  },
});
