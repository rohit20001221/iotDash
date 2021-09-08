import React, { useLayoutEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import tw from "tailwind-react-native-classnames";

const formcontrol = tw`mt-5`;
const label = tw`font-bold mb-2`;

const AddWidget = () => {
  const navigation = useNavigation();
  const [widgetType, setWidgetType] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "add widget",
    });
  }, [navigation]);

  return (
    <View style={tw`flex-1 bg-white p-8`}>
      {/* widget type form input */}
      <View style={formcontrol}>
        <Text style={label}>widget</Text>
        <View style={tw`bg-gray-200 px-2 py-3 rounded`}>
          <Picker
            mode="dropdown"
            selectedValue="push-button"
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
          <TextInput placeholder="topic name" />
        </View>
      </View>

      {/* publish message input */}
      <View style={formcontrol}>
        <Text style={label}>publish message</Text>
        <View style={tw`bg-gray-200 px-2 py-3 rounded`}>
          <TextInput placeholder="publish message  (user only for button widget)" />
        </View>
      </View>

      {/* submit button */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={tw`bg-red-500 px-2 py-3 mt-3 rounded-md shadow-md`}
      >
        <Text style={tw`text-center font-bold text-white`}>create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWidget;
