import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import { auth } from "../firebase";

const LoginScreen = () => {
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
    <KeyboardAvoidingView style={styles.container} behavio="padding">
      <Text style={styles.text_footer}>Email</Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Your Email"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => setEmail(val)}
        />
        {/* {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null} */}
      </View>
      <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
      <View style={styles.action}>
        <FontAwesome name="lock" color="#05375a" size={20} />
        <TextInput
          placeholder="Your password"
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => setPassword(val)}
        />
        {/* <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
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
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#fecb3e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 300,
    height: 40,
    transform: [{ translateX: 25 }, { translateY: 50 }],
    marginBottom: 30,
    color: "#020d52",
    fontSize: 60,
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
