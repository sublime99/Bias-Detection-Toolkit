import React from "react";
import Plot from "react-plotly.js";

const MetricsChart = ({ metrics }) => (
  <Plot
    data={[
      {
        x: Object.keys(metrics),
        y: Object.values(metrics),
        type: "bar",
      },
    ]}
    layout={{ title: "Fairness Metrics" }}
  />
);

export default MetricsChart;
