import React, { useLayoutEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import { useWidgets } from "../context/WidgetContext";
import { useMqtt } from "../context/MqttContext";

import tw from "tailwind-react-native-classnames";

const formcontrol = tw`mt-5`;
const formcontrolrow = tw`mt-5 flex-row`;

const label = tw`font-bold mb-2`;

const AddWidget = () => {
  const navigation = useNavigation();
  const [widgetType, setWidgetType] = useState("push-button");
  const [topic, setTopic] = useState("");
  const [publishMessageActive, setPublishMessageActive] = useState("");
  const [publishMessageInActive, setPublishMessageInActive] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const widget = useWidgets();

  const mqtt = useMqtt();

  const submitForm = () => {
    widget.addWidget({
      key: widgetType,
      message: message,
      topic: topic,
      publishMessageActive: publishMessageActive,
      publishMessageInActive: publishMessageInActive,
      title: title,
    });

    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "add widget",
    });
  }, [navigation]);

  return (
    <View style={tw`flex-1 bg-white p-8 justify-center`}>
      {/* widget type form input */}
      <View style={formcontrol}>
        <Text style={label}>widget</Text>
        <View style={tw`bg-gray-200 px-2 py-3 rounded`}>
          <Picker
            mode="dropdown"
            selectedValue={widgetType}
            onValueChange={(item) => setWidgetType(item)}
          >
            <Picker.Item value="push-button" label="push button" />
            <Picker.Item value="toggle-button" label="toggle button" />
            <Picker.Item value="value-display" label="value display" />
            <Picker.Item value="line-graph" label="line graph" />
          </Picker>
        </View>
      </View>

      {/* topic input */}
      <View style={formcontrol}>
        <Text style={label}>topic</Text>
        <View style={tw`bg-gray-200 px-2 py-3 rounded`}>
          <TextInput
            value={topic}
            onChangeText={setTopic}
            placeholder="topic name"
          />
        </View>
      </View>

      {/* publish message input */}
      <View style={formcontrol}>
        <Text style={label}>publish message</Text>
        <View style={tw`flex-row`}>
          <TextInput
            style={tw`bg-gray-200 px-2 py-3 rounded flex-1`}
            value={publishMessageActive}
            onChangeText={setPublishMessageActive}
            placeholder="message active"
          />
          <View style={tw`w-2 bg-white`}></View>
          <TextInput
            style={tw`bg-gray-200 px-2 py-3 rounded flex-1`}
            value={publishMessageInActive}
            onChangeText={setPublishMessageInActive}
            placeholder="message inactive"
          />
        </View>
      </View>

      {/* message input */}
      <View style={formcontrol}>
        <Text style={label}>message</Text>
        <View style={tw`bg-gray-200 px-2 py-3 rounded`}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="message"
          />
        </View>
      </View>

      {/* title input */}
      <View style={formcontrol}>
        <Text style={label}>title</Text>
        <View style={tw`bg-gray-200 px-2 py-3 rounded`}>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="title"
          />
        </View>
      </View>

      {/* submit button */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={tw`${
          mqtt.isConnected ? "bg-red-500" : "bg-red-800"
        } px-2 py-3 mt-4 rounded-md shadow-md`}
        onPress={submitForm}
        disabled={!mqtt.isConnected}
      >
        <Text style={tw`text-center font-bold text-white`}>
          {mqtt.isConnected ? "create" : "connect to server from settings"}
        </Text>
      </TouchableOpacity>
      <View style={{ height: 150 }}></View>
    </View>
  );
};

export default AddWidget;
