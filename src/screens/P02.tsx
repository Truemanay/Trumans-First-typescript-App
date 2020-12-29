import React, { FC } from "react";
import { View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/core";
import { kRoute } from "../kRoute";
import BackButton from "../components/generated/BackButton";
import Image from "../components/generated/Image";
import { styles } from "../kStyle";

const P02_Example: FC<{ navigation: NavigationProp<ParamListBase> }> = ({
  navigation,
}) => {
  const navBack = () => {
    navigation.navigate(kRoute.P01);
  };
  return (
    <View style={styles.P02Container}>
      <View style={styles.P02Button}>
        <BackButton BackButton_onPress={navBack} />
      </View>
      <View style={styles.P02Image}>
        <Image />
      </View>
    </View>
  );
};

export const P02 = React.memo(P02_Example);
