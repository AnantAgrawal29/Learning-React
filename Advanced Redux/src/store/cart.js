import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  showCart: true,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const exisitingcartItem = state.items.find((el) => el.id === item.id);
      if (!exisitingcartItem) {
        item.quantity = 1;
        item.totalPrice = item.price;
        state.items.push(item);
      } else {
        exisitingcartItem.quantity++;
        exisitingcartItem.totalPrice += exisitingcartItem.price;
      }
      state.totalPrice += item.price;
      state.totalQuantity++;
    },
    manageQuantity(state, action) {
      const updation = action.payload;
      const exisitingcartItem = state.items.find((el) => el.id === updation.id);
      const newQuantity = exisitingcartItem.quantity + updation.amount;

      state.totalPrice -= exisitingcartItem.totalPrice;
      state.totalQuantity -= exisitingcartItem.quantity;

      if (newQuantity <= 0) {
        state.items = state.items.filter((el) => el.id !== updation.id);
      } else {
        exisitingcartItem.quantity += updation.amount;
        state.totalQuantity += exisitingcartItem.quantity;

        exisitingcartItem.totalPrice +=
          updation.amount * exisitingcartItem.price;
        state.totalPrice += exisitingcartItem.totalPrice;
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
