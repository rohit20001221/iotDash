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

import { widgetMapping } from "../components/WidgetMap";

export default function Home() {
  const navigation = useNavigation();

  const goToAddWidget = () => {
    navigation.navigate("add-widget");
  };

  const renderWidget = ({
    key,
    message = "",
    value = "",
    title = "",
    topic = "",
    publishMessage = "",
  }) => {
    const Component = widgetMapping[key];

    return (
      <Component
        message={message}
        value={value}
        title={title}
        topic={topic}
        publishMessage={publishMessage}
      />
    );
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
        {renderWidget({ key: "toggle-button", title: "led.main" })}
        {renderWidget({
          key: "value-display",
          title: "moisture.sensor",
          message: "this is data from moisture sensor",
        })}
        {renderWidget({
          key: "push-button",
          title: "led.1",
        })}
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
