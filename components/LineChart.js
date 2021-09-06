import React from "react";
import { Dimensions } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryZoomContainer,
} from "victory-native";

const window = Dimensions.get("window");

const LineChart = ({ data, x, y }) => {
  return (
    <VictoryChart
      width={window.width}
      height={300}
      theme={VictoryTheme.material}
      containerComponent={
        <VictoryZoomContainer zoomDomain={{ x: [0, 10] }} zoomDimension="x" />
      }
    >
      <VictoryLine data={data} x={x} y={y} interpolation="monotoneX" />
    </VictoryChart>
  );
};

export default LineChart;
