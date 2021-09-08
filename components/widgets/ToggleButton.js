import React from "react";
import { View, Text, Switch } from "react-native";

import tw from "tailwind-react-native-classnames";

const ToggleButton = ({ text }) => {
  return (
    <View
      style={tw`bg-green-500 flex-row items-center shadow-md my-1 px-2 py-3 rounded-md`}
    >
      <Text style={tw`flex-1 text-white font-bold`}>{text}</Text>
      <Switch />
    </View>
  );
};

export default ToggleButton;
