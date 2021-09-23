const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const lastState = store.getState();
  console.log(lastState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
