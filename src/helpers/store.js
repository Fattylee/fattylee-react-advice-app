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
      return { ...stateVal, counter: 3 };
    }
  );

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};

export default useStore;
