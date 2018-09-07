import React, { Component } from "react";
import * as d3 from "d3";
import Axis from "./Axis";

class Scatterplot extends Component {
  state = {
    xScale: d3
      .scaleLinear()
      .domain([1, 0])
      .range([0, this.props.width]),

    yScale: d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, this.props.height])
  };

  static getDerivedStateFromProps(props, state) {
    let { xScale, yScale } = state;

    xScale.range([0, props.width]);
    yScale.range([0, props.height]);
  }

  render() {
    const { data, x, y } = this.props;
    return (
      <g transform={`translate(${x}, ${y})`}>
        {data.map(([x, y]) => (
          <circle cx={this.state.xScale(x)} cy={this.state.yScale(y)} r={3} />
        ))}
        <Axis
          x={this.props.width}
          y={0}
          scale={this.state.xScale}
          type="Right"
        />
        <Axis
          x={0}
          y={this.props.height}
          scale={this.state.xScale}
          type="Bottom"
        />
      </g>
    );
  }
}

export default Scatterplot;
