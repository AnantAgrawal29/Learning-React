import CartModal from "./components/CartModal";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { MealsContextProvider } from "./store/mealContext";

function App() {
  return (
    <>
      <CartModal />
      <CheckoutForm />
      <Header />
      <MealsContextProvider>
        <Meals />
      </MealsContextProvider>
    </>
  );
}

export default App;
