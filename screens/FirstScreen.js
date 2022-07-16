import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/GETRIDELOGO.jpg")}
        style={styles.logo}
      />

      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>REGISTER</Text>
        </View>
      </TouchableOpacity>

      <Image source={require("../assets/car.jpg")} style={styles.svg} />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#feb000",
  },
  logo: {
    width: 300,
    height: 150,
    borderColor: "#feb000",
    transform: [{ translateX: 55 }, { translateY: 140 }],
    flexDirection: "row",
    alignItems: "center",
  },
  svg: {
    width: 300,
    height: 250,
    transform: [{ translateX: 50 }, { translateY: 150 }],
  },
  button: {
    backgroundColor: "black",
    fontColor: "#feb000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 300,
    height: 40,
    transform: [{ translateX: 50 }, { translateY: 160 }],
    marginBottom: 30,
  },
  Rbutton: {
    button: {
      backgroundColor: "#fecb3e",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      width: 300,
      height: 40,
      transform: [{ translateX: 50 }, { translateY: 400 }],
    },
  },
  text: {
    fontSize: 20,
    color: "#feb000",
    fontWeight: "bold",
  },
});
