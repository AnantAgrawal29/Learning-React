const redux = require("redux");

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

function counterSubscriber() {
  const latestState = store.getState();
  console.log(latestState);
}

const store = redux.createStore(reducer);
store.subscribe(counterSubscriber);

module.exports = store;
