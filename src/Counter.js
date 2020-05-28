import React, { useEffect, useRef } from "react";
import useStore from "./helpers/store";

const handleCounterClick = (type, dispatch, {refState,state}) => {
  if (type === "increase") {
    dispatch({ type });
  } else if (type === "decrease") {
    dispatch({ type });
  }

  refState.current=state;
  console.log(refState.current);
  console.log(state);
};

const Counter = () => {
  const [state, dispatch] = useStore();

  const refState = useRef(state);

  useEffect(() => {

    return () => {
      // this value is the stale value not the current state value
      // console.log("unmounting...2", state.counter);
      refState.current.counter++;
      console.log("refState", refState.current);
      localStorage.setItem('counter', JSON.stringify(refState.current))
    };
  }, []);

  return (
    <div className="counter">
      <h2>Count is {state.counter}</h2>
      <button onClick={() => handleCounterClick("increase", dispatch,{refState,state})}>
        +
      </button>
      <button onClick={() => handleCounterClick("decrease", dispatch,{refState,state})}>
        -
      </button>
    </div>
  );
};

export default Counter;
