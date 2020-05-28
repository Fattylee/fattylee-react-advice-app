import { useReducer, useEffect } from "react";
import reducer from "./reducer";

const useStore = () => {
  const [state, dispatch] = useReducer(
    reducer,
    { counter: 10, age: 30 },
    (stateVal) => {
      const counterDB = JSON.parse(localStorage.getItem("counter"));
      if (counterDB) {
        return counterDB;
      }
      console.log(counterDB);
      return { ...stateVal, counter: 3 };
    }
  );

  useEffect(() => {
    return () => {
      console.log("unmounting", state);
    };
  }, []);

  /*   useEffect(() => { */
  // const initialCounterState = JSON.parse(localStorage.getItem("counter"));

  // if (!initialCounterState) {
  // localStorage.setItem("counter", JSON.stringify(state));
  // } else {
  // dispatch({ type: "set_counter", payload: { counter: -5 } });
  // }

  // console.log("mounted....");

  // return () => {
  // console.log("unmounting....");

  // // console.log(initialCounterState);
  // console.log(state);
  // };
  /* }, []) */

  return [state, dispatch];
};

export default useStore;
