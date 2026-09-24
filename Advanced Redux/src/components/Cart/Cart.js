import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const showCart = useSelector((state) => state.cart.showCart);
  const items = useSelector((state) => state.cart.items);
  if (!showCart) return;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 && <p>No items added</p>}
      {items.length !== 0 && (
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
