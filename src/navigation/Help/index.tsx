import { createStackNavigator } from "@react-navigation/stack";
import HelpAnimation from "../../screens/JSStack/animation";
import HelpMain from "../../screens/JSStack/main";
import React from "react";

const Stack = createStackNavigator();

const HelpStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="JSStack" component={HelpMain} />
    <Stack.Screen name="JSStackAnimation" component={HelpAnimation} />
  </Stack.Navigator>
);

export default HelpStack;
