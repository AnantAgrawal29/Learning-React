import { use } from "react";
import { CartContext } from "../store/cartContext";

export default function Header({ onCartModal }) {
  const { items } = use(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src="/logo.jpg" alt="Logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button onClick={onCartModal}>
        Cart {!items && `(${items.length})`}
      </button>
    </header>
  );
}
