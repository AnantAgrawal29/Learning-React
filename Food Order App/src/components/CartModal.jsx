import CartItem from "./CartItem";

export default function CartModal({ onCheckout, cartRef }) {
  function handleClose() {
    cartRef.current.close();
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) handleClose();
  }

  return (
    <dialog className="modal cart" ref={cartRef} onClick={handleBackdropClick}>
      <h2>Your Cart</h2>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <p className="cart-total">$73.96</p>
      <div className="modal-actions">
        <button className="text-button" onClick={handleClose}>
          Close
        </button>
        <button className="button" onClick={onCheckout}>
          Go to Checkout
        </button>
      </div>
    </dialog>
  );
}
