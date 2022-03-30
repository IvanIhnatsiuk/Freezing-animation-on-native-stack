import HelpStack from "../Help";
import HomeStack from "../Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

const Tab = createBottomTabNavigator();

const TabsNav = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Tab1" component={HelpStack} />
    <Tab.Screen name="Tab2" component={HomeStack} />
  </Tab.Navigator>
);

export default TabsNav;
