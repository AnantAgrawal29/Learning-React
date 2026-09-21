import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemsInCart: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id,
    );

    if (existingCartItemIndex != -1) {
      const existingCartItem = updatedItems[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const meal = action.payload.meals.find(
        (meal) => meal.id === action.payload.id,
      );
      updatedItems.push({
        id: action.payload.id,
        name: meal.name,
        price: meal.price,
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
      (item) => item.id === action.payload.mealId,
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
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "CLEAR")
    return {
      ...state,
      items: [],
    };

  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDisptach] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    },
  );

  function handleAddItemToCart(id, meals) {
    shoppingCartDisptach({
      type: "ADD_ITEM",
      payload: {
        id,
        meals,
      },
    });
  }

  function handleUpdateCartItemQuantity(mealId, amount) {
    shoppingCartDisptach({
      type: "UPDATE_ITEM",
      payload: {
        mealId,
        amount,
      },
    });
  }

  function clearCart() {
    shoppingCartDisptach({
      type: "CLEAR",
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemsInCart: handleUpdateCartItemQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
