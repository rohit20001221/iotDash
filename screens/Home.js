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

import { useWidgets } from "../context/WidgetContext";

import { widgetMapping } from "../components/WidgetMap";

export default function Home() {
  const navigation = useNavigation();
  const { widgets } = useWidgets();

  const goToAddWidget = () => {
    navigation.navigate("add-widget");
  };

  const renderWidget = ({
    key,
    message = "",
    value = "",
    title = "",
    topic = "",
    publishMessageActive = "",
    publishMessageInActive = "",
    id = "",
  }) => {
    const Component = widgetMapping[key];

    return (
      <Component
        message={message}
        value={value}
        title={title}
        topic={topic}
        publishMessageActive={publishMessageActive}
        publishMessageInActive={publishMessageInActive}
        id={id}
        key={id}
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

  console.log(widgets);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {widgets.map((item, id) => renderWidget({ ...item, id }))}
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
