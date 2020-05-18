import React, { Fragment, useState } from "react";

import "./App.css";

const App = () => {
  const [val, setVal] = useState(4);
  return (
    <Fragment>
      <div className="app">
        <div className="card">
          <h1>Default advice is here</h1>
          <button>Give me advice</button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
