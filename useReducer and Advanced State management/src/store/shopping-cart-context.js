import { createContext } from "react";

// We define the state/strcuture of the context here so we get autocompletion when using this context
// we provide it the value on the component where the value is being passed from
// check ctxValue in App.jsx
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemsInCart: () => {},
});
