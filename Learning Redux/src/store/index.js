import { createStore } from "redux";

function reducer(state = { counter: 0 }, action) {
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

const store = createStore(reducer);
function counterSubscriber() {
  const latestState = store.getState();
  console.log(latestState);
}
store.subscribe(counterSubscriber);
export default store;
