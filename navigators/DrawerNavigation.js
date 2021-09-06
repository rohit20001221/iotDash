import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Iot Dashboard",
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Home} name="home" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
