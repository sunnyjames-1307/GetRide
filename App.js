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
import Navigator from "./Routes/StackNav"
export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>

    
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
