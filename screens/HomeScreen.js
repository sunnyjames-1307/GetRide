import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const signOut = () => {
    FirebaseUtil.signOut(email, password).catch((e) => {
      console.log(e);
      alert("Something went wrong");
    });
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => signOut()} title="Logout" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
