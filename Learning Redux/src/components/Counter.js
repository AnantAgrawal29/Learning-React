import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function increaseHandler() {
    dispatch(counterActions.increase(10)); // automatically saved in payload property
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
        {showCounter ? counter : "--- COUNTER VALUE ---"}
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class based implementation

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // passed as a prop to class component
// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({ type: "increment" }),
//   decrement: () => dispatch({ type: "decrement" }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
