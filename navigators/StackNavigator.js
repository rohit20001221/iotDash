import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigation from "./DrawerNavigation";
import AddWidget from "../screens/AddWidget";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={DrawerNavigation} name="home-drawer" />
      <Stack.Screen component={AddWidget} name="add-widget" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
