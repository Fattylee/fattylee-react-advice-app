import React, { Fragment, useState, useEffect } from "react";
import List from "./List";

import "./App.css";

const fetchAdvice = async (url) => {
  const res = await fetch(url);
  const resData = await res.json();
  return resData.slip.advice;
};
const App = () => {
  const adviceUrl = "https://api.adviceslip.com/advice";
  const [adviceState, setAdviceState] = useState({
    advice: "Default advice here",
    isLoading: false,
  });

  useEffect(() => {
    fetchAdvice(adviceUrl).then((advice) =>
      setAdviceState((state) => ({ ...state, advice }))
    );
  }, [adviceUrl]);

  console.log(adviceState);

  return (
    <Fragment>
      <List />
      <div className={adviceState.error ? "modal-bg slide" : "modal-bg"}>
        <div className={adviceState.error ? "modal slide" : "modal"}>
          <p>{adviceState.errorMessage}</p>
          <button
            onClick={() => {
              setAdviceState((state) => ({
                ...state,
                error: false,
              }));
            }}
          >
            OK
          </button>
        </div>
      </div>
      <div className="app">
        <div className="card">
          <h1>{adviceState.advice}</h1>
          <button
            onClick={() => {
              // trigger isLoading
              setAdviceState((state) => ({ ...state, isLoading: true }));
              clearTimeout(adviceState.errorId);
              console.log("I got clicked!");
              fetchAdvice(adviceUrl)
                .then((advice) =>
                  setAdviceState((state) => ({
                    ...state,
                    advice,
                    isLoading: false,
                  }))
                )
                .catch((err) => {
                  const errorId = setTimeout(() => {
                    setAdviceState((state) => ({
                      ...state,
                      error: false,
                    }));
                  }, 5000);

                  if (err.message.includes("resource")) {
                    err.message = err.message.replace("resource", "advice");
                  }

                  setAdviceState((state) => ({
                    ...state,
                    isLoading: false,
                    error: true,
                    errorMessage: err.message,
                    errorId,
                  }));
                  console.log("no network, try again", err.message);
                });
            }}
          >
            Give me advice{" "}
            <span className={adviceState.isLoading ? "loading" : ""}></span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
