import React from "react";
import { TouchableOpacity, Text } from "react-native";

import tw from "tailwind-react-native-classnames";

const PushButton = ({ text }) => {
  return (
    <TouchableOpacity
      style={tw`shadow-md my-1 bg-blue-500 px-2 py-3 rounded`}
      activeOpacity={0.8}
    >
      <Text style={tw`text-center font-bold text-white`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PushButton;
