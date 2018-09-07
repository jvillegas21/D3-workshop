import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import Scatterplot from "./Scatterplot";

const data = d3.range(100).map(_ => [Math.random(), Math.random()]);

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <svg width="800" height="800">
        <Scatterplot x={10} y={10} data={data} />
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
