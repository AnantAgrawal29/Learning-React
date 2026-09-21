import { use } from "react";
import { useActionState } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/cartContext";

const initialState = {
  errors: null,
};

export default function CheckoutForm({
  checkoutRef,
  onBackdropClick,
  onClose,
  cartRef,
}) {
  const [checkoutState, checkoutActionFn] = useActionState(
    checkoutAction,
    initialState,
  );
  const { items, addOrder } = use(CartContext);

  async function checkoutAction(prevForm, formdata) {
    if (formdata == null) return initialState;
    const fullName = formdata.get("fullName");
    const email = formdata.get("email");
    const street = formdata.get("street");
    const postalCode = formdata.get("postalCode");
    const city = formdata.get("city");

    const errors = [];

    if (fullName.trim().length === 0)
      errors.push("Please enter a valid fullname!");
    if (email.trim().length === 0) errors.push("Please enter a valid email!");
    if (street.trim().length === 0)
      errors.push("Please enter a valid street name!");
    if (city.trim().length === 0)
      errors.push("Please enter a valid city name!");
    if (postalCode.trim().length < 6)
      errors.push("Please enter a valid postal code!");

    if (errors.length > 0)
      return {
        errors,
        enteredValues: {
          fullName,
          email,
          postalCode,
          city,
          street,
        },
      };

    await addOrder({
      name: fullName,
      email,
      "postal-code": postalCode,
      city,
      street,
    });

    onClose(checkoutRef);
    onClose(cartRef);

    return {
      errors: null,
    };
  }

  return createPortal(
    <dialog
      className="modal"
      ref={checkoutRef}
      onClick={(e) => onBackdropClick(e, checkoutRef)}
    >
      <h2>Checkout</h2>
      <p>
        Total amount - $
        {items.reduce((total, item) => total + +item.price * item.quantity, 0)}
      </p>
      <form className="control modal-actions" action={checkoutActionFn}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          defaultValue={checkoutState?.enteredValues?.fullName}
        />
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={checkoutState?.enteredValues?.email}
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          defaultValue={checkoutState?.enteredValues?.street}
        />
        <div className="control-row">
          <div className="control">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="number"
              name="postalCode"
              id="postalCode"
              defaultValue={checkoutState?.enteredValues?.postalCode}
            />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              defaultValue={checkoutState?.enteredValues?.city}
            />
          </div>
        </div>
        <div className="modal-actions">
          <button
            type="reset"
            className="text-button"
            onClick={() => onClose(checkoutRef)}
          >
            Close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </div>
        {checkoutState.errors && (
          <div className="error">
            <ul>
              {checkoutState.errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
}
