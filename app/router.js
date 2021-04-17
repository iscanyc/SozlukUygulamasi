import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2980b9",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ title: "Sözlük Uygulaması" }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Search"
        options={({ route }) => ({
          title: `Sonuçlar ${route?.params?.keyword} için gösteriliyor`,
        })}
        component={SearchScreen}
      />

      <Stack.Screen
        name="Details"
        options={({ route }) => ({ title: route?.params?.keyword })}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
