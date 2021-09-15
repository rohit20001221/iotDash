import React from "react";
import { TouchableOpacity, Text } from "react-native";

import tw from "tailwind-react-native-classnames";

import { useMqtt } from "../../context/MqttContext";

const PushButton = ({
  title,
  publishMessageActive,
  publishMessageInActive,
  topic,
}) => {
  const mqtt = useMqtt();

  const sendMessage = (message) => {
    console.log(message);
    mqtt.publish(topic, message);
  };

  return (
    <TouchableOpacity
      onPressIn={() => {
        sendMessage(publishMessageActive);
      }}
      onPressOut={() => {
        sendMessage(publishMessageInActive);
      }}
      style={tw`shadow-md my-1 bg-blue-500 px-2 py-3 rounded`}
      activeOpacity={0.8}
    >
      <Text style={tw`text-center font-bold text-white`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PushButton;
