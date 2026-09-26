import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
  showCart: true,
};

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
