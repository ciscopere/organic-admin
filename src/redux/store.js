import { configureStore } from "@reduxjs/toolkit";
import addDrawerReducer from '../redux/addDrawer.slice'


export const store = configureStore({
  reducer: {
    addDrawer: addDrawerReducer
  }
})