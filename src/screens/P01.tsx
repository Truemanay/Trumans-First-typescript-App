import React, { FC } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/core";
import { kRoute } from "../kRoute";
import TestButton from "../components/generated/TestButton";
import Circle from "../components/generated/Circle";
import Circle2 from "../components/generated/Circle2";
import { styles } from "../kStyle";

const P01_Example: FC<{ navigation: NavigationProp<ParamListBase> }> = ({
  navigation,
}) => {
  const navPageTwo = () => {
    navigation.navigate(kRoute.P02);
  };
  const headerText = "Truman's App Co.";
  return (
    <>
      <View>
        <View style={styles.P01Header}>
          <Text style={styles.P01Text}>{headerText}</Text>
        </View>
        <Circle style={styles.P01Circle} />
      </View>
      <View style={styles.P01Container}>
        <View style={styles.P01Instructions}>
          <Text>Press this button and see what happens</Text>
        </View>
        <View style={styles.P01Button}>
          <TestButton TestButton_onPress={navPageTwo} />
        </View>
        <Circle2 style={styles.P01CircleSmaller} />
      </View>
    </>
  );
};

export const P01 = React.memo(P01_Example);
