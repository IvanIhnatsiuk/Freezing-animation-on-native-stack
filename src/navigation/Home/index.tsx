import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NativeStackAnimation from "../../screens/nativeStack/animation";
import NativeStackMain from "../../screens/nativeStack/main";

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="nativeStack" component={NativeStackMain} />
    <Stack.Screen name="nativeStackAnimation" component={NativeStackAnimation} />
  </Stack.Navigator>
);

export default HomeStack;
