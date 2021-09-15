import React, { useState, useEffect } from "react";
import { View, Text, Switch } from "react-native";

import tw from "tailwind-react-native-classnames";

import { useMqtt } from "../../context/MqttContext";

const ToggleButton = ({
  title,
  publishMessageActive,
  publishMessageInActive,
  topic,
}) => {
  const [toggle, setToggle] = useState(false);
  const mqtt = useMqtt();

  useEffect(() => {
    if (toggle == false) {
      mqtt.publish(topic, publishMessageInActive);
    } else {
      mqtt.publish(topic, publishMessageActive);
    }
  }, [toggle]);

  return (
    <View
      style={tw`bg-green-500 flex-row items-center shadow-md my-1 px-2 py-3 rounded-md`}
    >
      <Text style={tw`flex-1 text-white font-bold`}>{title}</Text>
      <Switch value={toggle} onValueChange={setToggle} />
    </View>
  );
};

export default ToggleButton;
