import { use } from "react";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";
import { CartContext } from "../store/cartContext";

export default function CartModal({ onCheckout, cartRef }) {
  const { items, updateItemsInCart } = use(CartContext);
  function handleClose() {
    cartRef.current.close();
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) handleClose();
  }

  return createPortal(
    <dialog className="modal cart" ref={cartRef} onClick={handleBackdropClick}>
      <h2>Your Cart</h2>
      {items.length !== 0 && (
        <ul>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {items.length === 0 && <p>No items added.</p>}
      {items.length !== 0 && <p className="cart-total">$73.96</p>}
      <div className="modal-actions">
        <button className="text-button" onClick={handleClose}>
          Close
        </button>
        <button className="button" onClick={onCheckout}>
          Go to Checkout
        </button>
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
}
