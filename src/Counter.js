import React from "react";
import useStore from "./helpers/store";

const handleCounterClick = (type, dispatch) => {
  if (type === "increase") {
    dispatch({ type });
  } else if (type === "decrease") {
    dispatch({ type });
  }
};

const Counter = () => {
  const [state, dispatch] = useStore();

  return (
    <div className="counter">
      <h2 data-myh2="78">Count is {state.counter}</h2>
      <button onClick={() => handleCounterClick("increase", dispatch)}>
        +
      </button>
      <button onClick={() => handleCounterClick("decrease", dispatch)}>
        -
      </button>
    </div>
  );
};

export default Counter;
