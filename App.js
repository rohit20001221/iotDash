import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";

import { MqttProvider } from "./context/MqttContext";

export default function App() {
  return (
    <MqttProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </MqttProvider>
  );
}
