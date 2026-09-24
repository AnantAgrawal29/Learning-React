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
      if (!item.id) item.id = Math.ceil(Math.random() * 10000);
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
    },
    manageQuantity(state, action) {
      const updation = action.payload;
      const exisitingcartItem = state.items.find((el) => el.id === updation.id);
      const newQuantity = exisitingcartItem.quantity + updation.amount;
      if (newQuantity <= 0)
        state.items = state.items.filter((el) => el.id !== updation.id);
      else {
        exisitingcartItem.quantity += updation.amount;
        exisitingcartItem.totalPrice +=
          updation.amount * exisitingcartItem.price;
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
