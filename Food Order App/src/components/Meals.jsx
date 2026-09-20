import { use } from "react";
import { MealsContext } from "../store/mealContext";
import Meal from "./Meal";

export default function Meals() {
  const { meals } = use(MealsContext);
  return (
    <main>
      {meals && (
        <ul id="meals">
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <Meal meal={meal} />
            </li>
          ))}
        </ul>
      )}
      {!meals && <p>No meals found. Something wrong from our end!</p>}
    </main>
  );
}
