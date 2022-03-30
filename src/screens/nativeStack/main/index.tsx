import React from "react";
import { StyleSheet, Text, Touchable, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HelpMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("nativeStackAnimation")}
        title="Go to second screen"
      />
    </View>
  );
};

export default HelpMain;
