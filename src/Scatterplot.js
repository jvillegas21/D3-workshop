import React, { Component } from "react";
import * as d3 from "d3";
import Axis from "./Axis";

class Scatterplot extends Component {
  xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, 400]);

  yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, 400]);

  render() {
    const { data, x, y } = this.props;
    return (
      <g transform={`translate(${x}, ${y})`}>
        {data.map(([x, y]) => (
          <circle cx={this.xScale(x)} cy={this.yScale(y)} r={3} />
        ))}
        <Axis x={0} y={400} scale={(this.xScale, this.yScale)} type="Bottom" />
      </g>
    );
  }
}

export default Scatterplot;
