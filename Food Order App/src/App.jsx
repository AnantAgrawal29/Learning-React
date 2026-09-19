import Header from "./components/Header";
import Meals from "./components/Meals";
import { MealsContextProvider } from "./store/mealContext";

function App() {
  return (
    <>
      <Header />
      <MealsContextProvider>
        <Meals />
      </MealsContextProvider>
    </>
  );
}

export default App;
