import { use } from "react";
import { CartContext } from "../store/cartContext";

export default function CartItem({ item }) {
  const { updateItemsInCart } = use(CartContext);
  return (
    <li className="cart-item">
      <p>
        {item.name} - <span>{item.quantity}</span> x $<span>{item.price}</span>
      </p>
      <p className="cart-item-actions">
        <button onClick={() => updateItemsInCart(item.id, -1)}>-</button>
        {item.quantity}
        <button onClick={() => updateItemsInCart(item.id, +1)}>+</button>
      </p>
    </li>
  );
}
