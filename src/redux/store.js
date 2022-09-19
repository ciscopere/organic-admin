import { configureStore } from "@reduxjs/toolkit";
import addDrawerReducer from "../redux/addDrawer.slice";
import cartDrawerReducer from "../redux/cartDrawer.slice";

export const store = configureStore({
  reducer: {
    addDrawer: addDrawerReducer,
    cartDrawer: cartDrawerReducer,
  },
});
