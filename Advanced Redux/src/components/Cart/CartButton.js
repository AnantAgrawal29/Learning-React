import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  function cartHandler() {
    dispatch(cartActions.toggleCart());
  }
  return (
    <button className={classes.button}>
      <span onClick={cartHandler}>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
