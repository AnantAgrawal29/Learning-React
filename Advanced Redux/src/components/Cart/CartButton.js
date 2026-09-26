import classes from "./CartButton.module.css";
import { uiActions } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  function cartHandler() {
    dispatch(uiActions.toggleCart());
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
