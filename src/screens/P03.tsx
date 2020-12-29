import React, { FC } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/core";

const P03_Example: FC<{ navigation: NavigationProp<ParamListBase> }> = () => {
  const kInstructions = Platform.select({
    ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu",
    android:
      "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu",
    web: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native{Platform.OS === "web" ? " Web" : ""}!
      </Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{kInstructions}</Text>
      <Text style={styles.instructions}>This is Page 3!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  instructions: {
    marginBottom: 5,
    textAlign: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
});

export const P03 = React.memo(P03_Example);
