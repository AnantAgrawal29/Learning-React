import { cartActions } from "./cart";
import { uiActions } from "./uiSlice";

export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch(
        "https://react-redux-14b28-default-rtdb.firebaseio.com/cart.json",
      );
      if (!response.ok) throw new Error("Could not fetch cart data!");
      const cart = await response.json();
      return cart;
    }
    try {
      const cartData = await fetchData();
      if (!cartData || !cartData.items) return;
      dispatch(cartActions.replaceCartData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        }),
      );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      }),
    );

    async function sendRequest() {
      const response = await fetch(
        "https://react-redux-14b28-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );
      if (!response.ok) throw new Error("Sending cart data failed!");
    }

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        }),
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        }),
      );
    }
  };
}
