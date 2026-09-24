import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  showCart: true,
  reducer: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default cartSlice.reducer;
