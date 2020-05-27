import React, { Fragment, useReducer } from "react";
import reducer from "./helpers/store";

const handleCounterClick = (e, type, dispatch) => {
  if (type === "increase") {
    dispatch({ type });
  } else if (type === "decrease") {
    dispatch({ type });
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 5 });

  console.log(state);
  return (
    <Fragment>
      <h2>Count is {state.counter}</h2>
      <button onClick={(e) => handleCounterClick(e, "increase", dispatch)}>
        +
      </button>
      <button onClick={(e) => handleCounterClick(e, "decrease", dispatch)}>
        -
      </button>
    </Fragment>
  );
};

export default Count;
