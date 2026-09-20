export default function CartItem({ quantity = 3, price = 1 }) {
  return (
    <li className="cart-item">
      <p>
        Seafood Paella - <span>{quantity}</span> x $<span>{price}</span>
      </p>
      <p className="cart-item-actions">
        <button>-</button>1<button>+</button>
      </p>
    </li>
  );
}
