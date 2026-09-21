import useHttp from "../hooks/useHttp";
import Meal from "./Meal";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: meals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) return <p className="center">Fetching meals...</p>;
  if (error) return <Error title="Failed to fetch meals" message={error} />;
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
      {!meals && (
        <p className="center">No meals found. Something wrong from our end!</p>
      )}
    </main>
  );
}
