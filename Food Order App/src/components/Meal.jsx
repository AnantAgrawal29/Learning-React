import { use } from "react";
import { CartContext } from "../store/cartContext";
export default function Meal({ meal, allMeals }) {
  const { addItemToCart } = use(CartContext);
  return (
    <>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <span className="meal-item-price">${meal.price}</span>
        <p className="meal-item-description">{meal.description}</p>
        <button
          className="button meal-item-actions"
          onClick={() => {
            addItemToCart(meal.id, allMeals);
          }}
        >
          Add to Cart
        </button>
      </article>
    </>
  );
}
