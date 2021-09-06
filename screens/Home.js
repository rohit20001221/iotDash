import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 16500 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
  { quarter: 9, earnings: 13000 },
  { quarter: 10, earnings: 16500 },
  { quarter: 11, earnings: 14250 },
  { quarter: 12, earnings: 19000 },
  { quarter: 13, earnings: 13000 },
  { quarter: 14, earnings: 16500 },
  { quarter: 15, earnings: 14250 },
  { quarter: 16, earnings: 19000 },
];

export default function Home() {
  const navigation = useNavigation();

  const goToAddWidget = () => {
    navigation.navigate("add-widget");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <TouchableOpacity activeOpacity={0.5} style={styles.icon}>
            <Ionicons name="md-pencil" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToAddWidget}
            activeOpacity={0.5}
            style={styles.icon}
          >
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LineChart data={data} x="quater" y="earnings" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
});
