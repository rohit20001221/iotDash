import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

import Home from "../screens/Home";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "iot dashboard",
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Home} name="home" />
      <Drawer.Screen component={Settings} name="settings" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
