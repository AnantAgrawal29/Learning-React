import { use } from "react";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";
import { CartContext } from "../store/cartContext";

export default function CartModal({
  onCheckout,
  cartRef,
  onBackdropClick,
  onClose,
}) {
  const { items } = use(CartContext);

  return createPortal(
    <dialog
      className="modal cart"
      ref={cartRef}
      onClick={(e) => onBackdropClick(e, cartRef)}
    >
      <h2>Your Cart</h2>
      {items.length !== 0 && (
        <ul>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {items.length === 0 && <p>No items added.</p>}
      {items.length !== 0 && (
        <p className="cart-total">
          ${items.reduce((acc, el) => acc + +el.price * el.quantity, 0)}
        </p>
      )}
      <div className="modal-actions">
        <button className="text-button" onClick={() => onClose(cartRef)}>
          Close
        </button>
        {items.length !== 0 && (
          <button className="button" onClick={onCheckout}>
            Go to Checkout
          </button>
        )}
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
}
