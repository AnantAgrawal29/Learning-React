const redux = require("redux");

// action work on dispatched states
// old state is replaced by dispatched state when reducer function is called

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };
  if (action.type === "decrement")
    return {
      counter: state.counter - 1,
    };
  return state;
}

function counterSubscriber() {
  const latestState = store.getState();
  console.log(latestState);
}

const store = redux.createStore(counterReducer);
console.log(store.getState());
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
