import React, { FC } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/core";
import { kRoute } from "../kRoute";

const P01_Example: FC<{ navigation: NavigationProp<ParamListBase> }> = ({
  navigation,
}) => {
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
      <Text style={styles.instructions}>This is Page 1!</Text>
      <Button
        onPress={() => navigation.navigate(kRoute.P02)}
        title="Navigate to page 2"
      />
      <Button
        onPress={() => navigation.navigate(kRoute.P03)}
        title="Navigate to page 3"
      />
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

export const P01 = React.memo(P01_Example);
