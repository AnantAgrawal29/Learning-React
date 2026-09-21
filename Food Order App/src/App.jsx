import { useRef } from "react";
import CartModal from "./components/CartModal";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/cartContext";

function App() {
  const showCart = useRef();
  const showCheckout = useRef();

  function handleShowModal(ref) {
    ref.current.showModal();
  }
  function handleClose(ref) {
    ref.current.close();
  }
  function handleBackdropClick(event, ref) {
    if (event.target === event.currentTarget) handleClose(ref);
  }

  return (
    <>
      <CartContextProvider>
        <Header totalItems={0} onCartModal={() => handleShowModal(showCart)} />
        <CartModal
          cartRef={showCart}
          onCheckout={() => handleShowModal(showCheckout)}
          onBackdropClick={handleBackdropClick}
          onClose={handleClose}
        />
        <CheckoutForm
          checkoutRef={showCheckout}
          cartRef={showCart}
          onBackdropClick={handleBackdropClick}
          onClose={handleClose}
        />
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;
