import { createSlice } from "@reduxjs/toolkit";

const cartDrawerSlice = createSlice({
  name: "cartDrawer",
  initialState: { open: false },
  reducers: {
    openCartDrawer(state, action) {
      if (!state.open) state.open = true;
    },
    closeCartDrawer(state, action) {
      if (state.open) state.open = false;
    },
  },
});

export const {openCartDrawer, closeCartDrawer} = cartDrawerSlice.actions;
export default cartDrawerSlice.reducer;