import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import PushButton from "../components/widgets/PushButton";
import ToggleButton from "../components/widgets/ToggleButton";
import ValueDisplay from "../components/widgets/ValueDisplay";

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
        <PushButton text={"led 1"} />
        <ToggleButton text={"led main"} />
        <ValueDisplay
          title="triboard"
          message={"the temperature of triboard is"}
          value={30}
        />
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
