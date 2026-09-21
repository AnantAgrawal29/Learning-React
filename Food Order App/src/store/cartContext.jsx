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
  async function addOrder(customerData) {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: shoppingCartState.items,
          customer: customerData,
        },
      }),
    });

    if (!response.ok) {
      return;
    }

    const message = await response.json();
    console.log(message);
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemsInCart: handleUpdateCartItemQuantity,
    addOrder,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
