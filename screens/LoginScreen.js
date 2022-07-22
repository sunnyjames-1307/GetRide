import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import { auth } from "../firebase";
export default function LoginScreen({navigation})
 {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //   const handlePasswordChange = (val) => {
  //     setData({
  //       ...data,
  //       password: val,
  //     });
  //   };
 
 
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate('HomeScreen')
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  
  //   const updateSecureTextEntry = (val) => {
  //     setData({
  //       ...data,
  //       secureTextEntry: !data.secureTextEntry,
  //     });
  //   };

  //   const textInputChange = (val) => {
  //     if (val.length != 0) {
  //       setData({
  //         ...data,
  //         email: val,
  //         check_textInputChange: true,
  //       });
  //     } else {
  //       setData({
  //         ...data,
  //         email: val,
  //         check_textInputChange: false,
  //       });
  //     }
  //   };
  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Image
          source={require("../assets/GETRIDELOGO.jpg")}
          style={[
            {
              width: 210,
              height: 100,
              transform: [{ translateX: 85 }, { translateY: 50 }],
            },
          ]}
        />
      </View>
      <Text style={styles.text_footer}>Sign In</Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Your Email"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => setEmail(val)}
        />
        <FontAwesome name="lock" color="#05375a" size={20} />
        <TextInput
          placeholder="Your password"
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      {/* {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null} */}

      {/* <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text> */}
      {/* <View style={styles.action}>

        
        {/* <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity> */}
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={[styles.text, { fontSize: 17 }]}>SIGN IN</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require("../assets/car3.webp")}
        style={[
          {
            width: 240,
            height: 230,

            transform: [{ translateX: 50 }, { translateY: 220 }],
          },
        ]}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontWeight: "bold",
    fontSize: 22,
    transform: [{ translateX: 25 }, { translateY: 125 }],
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 0,
    transform: [{ translateX: 25 }, { translateY: 150 }],
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    width: 200,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#feb000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 300,
    height: 60,
    transform: [{ translateX: 40 }, { translateY: 205 }],
    marginBottom: 30,
    color: "black",
    fontWeight: 900,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
