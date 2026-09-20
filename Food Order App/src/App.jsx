import { useRef } from "react";
import CartModal from "./components/CartModal";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { MealsContextProvider } from "./store/mealContext";

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
      <CartModal cartRef={showCart} onCheckout={handleCheckoutModal} />
      <CheckoutForm checkoutRef={showCheckout} />
      <Header totalItems={0} onCartModal={handleCartModal} />
      <MealsContextProvider>
        <Meals />
      </MealsContextProvider>
    </>
  );
}

export default App;
