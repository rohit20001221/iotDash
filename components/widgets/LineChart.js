import React from "react";
import { Dimensions, View, Text } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryZoomContainer,
} from "victory-native";

import tw from "tailwind-react-native-classnames";

const window = Dimensions.get("window");

const LineChart = ({ data, x, y, title }) => {
  return (
    <View style={tw`my-2 shadow-sm bg-white`}>
      <Text style={tw`text-lg font-bold`}>{title}</Text>
      <VictoryChart
        width={window.width}
        height={300}
        theme={VictoryTheme.material}
        containerComponent={<VictoryZoomContainer zoomDimension="x" />}
      >
        <VictoryLine data={data} x={x} y={y} interpolation="linear" />
      </VictoryChart>
    </View>
  );
};

export default LineChart;
