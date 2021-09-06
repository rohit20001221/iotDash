import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryZoomContainer,
} from "victory-native";

const window = Dimensions.get("window");

const LineChart = ({ data, x, y }) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default LineChart;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
});
