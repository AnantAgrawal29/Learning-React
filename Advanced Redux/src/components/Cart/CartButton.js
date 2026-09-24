import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  function cartHandler() {
    dispatch(cartActions.toggleCart());
  }
  return (
    <button className={classes.button}>
      <span onClick={cartHandler}>My Cart</span>
      {totalQuantity > 0 && (
        <span className={classes.badge}>{totalQuantity}</span>
      )}
    </button>
  );
};

export default CartButton;
