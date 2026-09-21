import { useRef } from "react";
import CartModal from "./components/CartModal";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/cartContext";

function App() {
  const showCart = useRef();
  const showCheckout = useRef();

  function handleCartModal() {
    showCart.current.showModal();
  }
  function handleCheckoutModal() {
    showCheckout.current.showModal();
  }
  return (
    <>
      <CartContextProvider>
        <Header totalItems={0} onCartModal={handleCartModal} />
        <CartModal cartRef={showCart} onCheckout={handleCheckoutModal} />
        <CheckoutForm checkoutRef={showCheckout} />
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;
