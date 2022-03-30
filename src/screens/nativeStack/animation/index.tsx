import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { useEffect, useState } from "react";
import { Animated, Button, Easing, StyleSheet, Text, Touchable, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedView: {
    width: 150,
    height: 150,
    backgroundColor: "red",
  },
});

const HelpAnimation = ({ navigation, route: { key } }) => {
  const [isZoom, setIsZoom] = useState(true);
  const scale = new Animated.Value(0);

  useEffect(() => {
    if (isZoom) {
      Animated.timing(scale, {
        toValue: 2.5,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setIsZoom(false);
      });
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setIsZoom(true);
      });
    }
  }, [isZoom]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, { transform: [{ scale: scale }] }]} />
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
};

export default HelpAnimation;
