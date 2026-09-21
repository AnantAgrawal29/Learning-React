import { useState, useEffect } from "react";
import Meal from "./Meal";

export default function Meals() {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const allMeals = await response.json();
      setMeals(allMeals);
    }

    loadMeals();
  }, []);

  return (
    <main>
      {meals && (
        <ul id="meals">
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <Meal meal={meal} allMeals={meals} />
            </li>
          ))}
        </ul>
      )}
      {!meals && <p>No meals found. Something wrong from our end!</p>}
    </main>
  );
}
