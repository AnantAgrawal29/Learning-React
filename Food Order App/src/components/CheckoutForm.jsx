import { useActionState } from "react";

const initialState = {
  errors: null,
};

function checkoutAction(prevForm, formdata) {
  if (formdata == null) return initialState;
  const fullName = formdata.get("fullName");
  const email = formdata.get("email");
  const street = formdata.get("street");
  const postalCode = formdata.get("postalCode");
  const city = formdata.get("city");

  const errors = [];

  if (fullName.trim().length === 0)
    errors.push("Please enter a valid fullname!");
  if (street.trim().length === 0)
    errors.push("Please enter a valid street name!");
  if (city.trim().length === 0) errors.push("Please enter a valid city name!");
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

  return {
    errors: null,
  };
}

export default function CheckoutForm({ totalPrice = 89.95 }) {
  const [checkoutState, checkoutActionFn] = useActionState(
    checkoutAction,
    initialState,
  );
  return (
    <dialog className="modal" open>
      <h2>Checkout</h2>
      <p>Total amount - ${totalPrice}</p>
      <form className="control" action={checkoutActionFn}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          defaultValue={checkoutState?.enteredValues?.fullName}
          required
        />
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={checkoutState?.enteredValues?.email}
          required
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          defaultValue={checkoutState?.enteredValues?.street}
          required
        />
        <div className="control-row">
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="number"
              name="postalCode"
              id="postalCode"
              defaultValue={checkoutState?.enteredValues?.postalCode}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              defaultValue={checkoutState?.enteredValues?.city}
              required
            />
          </div>
        </div>
        <div className="button-row">
          <button
            type="reset"
            className="button-row-btn"
            onClick={() => checkoutActionFn(null)}
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
    </dialog>
  );
}
