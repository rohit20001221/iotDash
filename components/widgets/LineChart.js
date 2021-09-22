import React, { useState, useEffect } from "react";
import { Dimensions, View, Text } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryZoomContainer,
} from "victory-native";

import tw from "tailwind-react-native-classnames";

import { useMqtt } from "../../context/MqttContext";

const window = Dimensions.get("window");

const LineChart = ({ title, topic }) => {
  const [data_, setData] = useState([]);

  const { data } = useMqtt();

  useEffect(() => {
    console.log(data);
    setData((oldData) => [...oldData, { x: data[topic], y: oldData.length }]);
  }, [data]);

  return (
    <View style={tw`my-2 shadow-sm bg-white`}>
      <Text style={tw`text-lg font-bold`}>{title}</Text>
      <VictoryChart
        width={window.width}
        height={300}
        theme={VictoryTheme.material}
        containerComponent={<VictoryZoomContainer zoomDimension="x" />}
      >
        <VictoryLine data={data_} interpolation="linear" />
      </VictoryChart>
    </View>
  );
};

export default LineChart;
