export default function Meal({ meal }) {
  return (
    <>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <span className="meal-item-price">${meal.price}</span>
        <p className="meal-item-description">{meal.description}</p>
        <button className="button meal-item-actions">Add to Cart</button>
      </article>
    </>
  );
}
