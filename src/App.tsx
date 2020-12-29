/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { P01, P02 } from "./screens";
import { kRoute } from "./kRoute";

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={kRoute.P01}
          component={P01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={kRoute.P02}
          component={P02}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
