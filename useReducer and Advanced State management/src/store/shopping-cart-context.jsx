import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
// We define the state/strcuture of the context here so we get autocompletion when using this context
// we provide it the value on the component where the value is being passed from
// check ctxValue in App.jsx

// simple state? useState, complex state? useReducer. and if that state need to be accessed in alot of components and it's making you do alot of prop drilling the useContext can be used with either useState and useReducer.

// Use Cases:
// useState:
// For simple components with independent state variables.
// When state updates are straightforward and don't require complex logic.

// useReducer:
// For components with complex state logic.
// When multiple state variables need to be updated together.
// When state transitions are based on previous state or when actions are dispatched.

// Summary:
// useState is simpler and suitable for most use cases.
// useReducer is more powerful and appropriate for complex state management.

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemsInCart: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload,
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload,
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // not needed here as we have only one value
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId,
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDisptach] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    },
  );

  function handleAddItemToCart(id) {
    shoppingCartDisptach({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDisptach({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemsInCart: handleUpdateCartItemQuantity,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
