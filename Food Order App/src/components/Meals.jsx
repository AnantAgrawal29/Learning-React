import { use } from "react";
import { MealsContext } from "../store/mealContext";
export default function Meals() {
  const { meals } = use(MealsContext);
  return (
    <main id="meals">
      {meals && (
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>
              <Meal meal={meal} />
            </li>
          ))}
        </ul>
      )}
      {!meals && <p>No meals found. Something wrong from our end!</p>}
    </main>
  );
}
