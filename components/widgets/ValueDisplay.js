import React from "react";
import { View, Text } from "react-native";

import tw from "tailwind-react-native-classnames";

const ValueDisplay = ({ message, title }) => {
  return (
    <View style={tw`bg-yellow-500 p-2 mt-1 rounded-md shadow-md h-32`}>
      <Text style={tw`mb-1 font-bold text-white`}>{title}</Text>
      <View style={tw`bg-yellow-400 p-2 h-2/3 rounded-md`}>
        <Text style={tw`text-yellow-800 font-bold`}>{`${message}`}</Text>
      </View>
    </View>
  );
};

export default ValueDisplay;
