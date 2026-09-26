import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCartData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const item = action.payload;
      const exisitingcartItem = state.items?.find((el) => el.id === item.id);
      if (!exisitingcartItem) {
        item.quantity = 1;
        item.totalPrice = item.price;
        state.items.push(item);
      } else {
        exisitingcartItem.quantity++;
        exisitingcartItem.totalPrice += exisitingcartItem.price;
      }
      state.totalQuantity++;
    },
    manageQuantity(state, action) {
      const updation = action.payload;
      const exisitingcartItem = state.items.find((el) => el.id === updation.id);
      const newQuantity = exisitingcartItem.quantity + updation.amount;

      state.totalQuantity -= exisitingcartItem.quantity;

      if (newQuantity <= 0) {
        state.items = state.items.filter((el) => el.id !== updation.id);
      } else {
        exisitingcartItem.quantity += updation.amount;
        state.totalQuantity += exisitingcartItem.quantity;

        exisitingcartItem.totalPrice +=
          updation.amount * exisitingcartItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
