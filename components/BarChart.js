import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryBar,
  VictoryZoomContainer,
} from "victory-native";

const window = Dimensions.get("window");

const BarChart = ({ data }) => {
  return (
    <View style={styles.container}>
      <VictoryChart
        width={window.width}
        height={300}
        theme={VictoryTheme.material}
        containerComponent={<VictoryZoomContainer zoomDimension="x" />}
      >
        <VictoryBar barRatio={0.5} alignment="start" data={data} />
      </VictoryChart>
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
});
