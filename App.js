import { NavigationContainer } from "@react-navigation/native/src/NavigationContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FirstScreen from "./screens/FirstScreen";
import UserFirstScreen from "./screens/UserFirstScreen";
import { store } from "./store";
import UserScreen from "./screens/UserScreen";
// const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="Login"
    //       component={LoginScreen}
    //     />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
