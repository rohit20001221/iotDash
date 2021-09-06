import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddWidget = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "add widget",
    });
  }, [navigation]);

  return (
    <View>
      <Text>add widget</Text>
    </View>
  );
};

export default AddWidget;
