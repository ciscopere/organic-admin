import { createSlice } from "@reduxjs/toolkit";

const addDrawerSlice = createSlice({
  name: "addDrawer",
  initialState: { open: false },
  reducers: {
    openAddDrawer(state, action) {
      if (state.open === false) {
        state.open = true;
      } 
    },
    closeAddDrawer(state, action){
      if (state.open===true){
        state.open = false;
      }
    }
  },
});

export const { openAddDrawer, closeAddDrawer } = addDrawerSlice.actions;
export default addDrawerSlice.reducer;
