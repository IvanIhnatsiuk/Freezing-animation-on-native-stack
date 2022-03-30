import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./src/navigation/BottomTabNav";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import { enableFreeze } from "react-native-screens";

enableFreeze(false);

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
