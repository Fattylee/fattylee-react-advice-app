import React, { Fragment, useState, useEffect } from "react";

import "./App.css";

const fetcAdvice = async (url) => {
  const res = await fetch(url);
  const resData = await res.json();
  return resData.slip.advice;
};
const App = () => {
  const adviceUrl = "https://api.adviceslip.com/advice";
  const [val, setVal] = useState("Default advice here");
  useEffect(() => {
    console.log("this act like componentDidMount to me");
    fetcAdvice(adviceUrl).then((advice) => setVal(() => advice));
  }, [adviceUrl]);

  return (
    <Fragment>
      <div className="app">
        <div className="card">
          <h1>{val}</h1>
          <button
            onClick={() => {
              console.log("I got clicked!");
              fetcAdvice(adviceUrl).then((advice) => setVal(() => advice));
            }}
          >
            Give me advice
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
