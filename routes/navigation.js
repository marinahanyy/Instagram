import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import LoginScreen from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const RootStack = createStackNavigator();

export default function Navigation() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <RootStack.Screen name="Newsfeed" component={HomeStack} />
        ) : (
          <RootStack.Screen name="Home" component={LoginScreen} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
