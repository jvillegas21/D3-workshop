import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import Scatterplot from "./Scatterplot";

const data = d3.range(100).map(_ => [Math.random(), Math.random()]);

import "./styles.css";

class App extends Component {
  state = {
    width: 500,
    height: 500
  };

  onClick = () =>
    this.setState({
      width: this.state.width * 0.8,
      height: this.state.height * 0.8
    });

  render() {
    const { width, height } = this.state;

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <svg width="800" height="800" onClick={this.onClick}>
          <Scatterplot
            x={10}
            y={10}
            data={data}
            width={width}
            height={height}
          />
        </svg>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
