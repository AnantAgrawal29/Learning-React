export default function Header({ onCartModal, totalItems }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src="/logo.jpg" alt="Logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button onClick={onCartModal}>
        Cart {totalItems > 0 && `(${totalItems})`}
      </button>
    </header>
  );
}
