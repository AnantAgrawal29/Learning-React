export default function CartItem({ item }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} - <span>{item.quantity}</span> x $<span>{item.price}</span>
      </p>
      <p className="cart-item-actions">
        <button>-</button>{item.quantity}<button>+</button>
      </p>
    </li>
  );
}
