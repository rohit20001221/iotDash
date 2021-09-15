import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useMqtt } from "../context/MqttContext";

import tw from "tailwind-react-native-classnames";

import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const mqtt = useMqtt();
  const navigation = useNavigation();

  const connectServer = () => {
    mqtt.setServer(ip);
    mqtt.setPort(port);

    navigation.goBack();
  };

  const disConnectServer = () => {
    mqtt.disconnect();
  };

  return (
    <View style={tw`flex-1 bg-white p-10`}>
      <View style={tw`my-2`}>
        <Text style={tw`text-lg font-bold text-gray-600`}>
          Server ip address
        </Text>
        <TextInput
          style={tw`bg-gray-200 p-2 rounded-md`}
          placeholder="192.168.1.10"
          value={ip}
          onChangeText={setIp}
        />
      </View>
      <View style={tw`my-2`}>
        <Text style={tw`text-lg font-bold text-gray-600`}>Server port</Text>
        <TextInput
          style={tw`bg-gray-200 p-2 rounded-md`}
          placeholder="8000"
          value={port}
          onChangeText={setPort}
        />
      </View>
      <TouchableOpacity
        style={tw`bg-yellow-300 px-2 py-3 my-3 rounded items-center`}
        onPress={connectServer}
        disabled={mqtt.isConnected}
      >
        <Text style={tw`text-black font-bold`}>connect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-red-500 px-2 py-3 my-3 rounded items-center`}
        onPress={disConnectServer}
        disabled={!mqtt.isConnected}
      >
        <Text style={tw`text-black font-bold`}>disconnect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
