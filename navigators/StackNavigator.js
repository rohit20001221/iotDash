import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={DrawerNavigation} name="home-drawer" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
