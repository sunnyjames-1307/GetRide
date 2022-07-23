import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import { auth, firestore, db } from "../firebase";
import { ref, set } from "firebase/database";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useNavigation } from "@react-navigation/core";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import { useNavigationContainerRef } from "@react-navigation/native";
const RegisterScreen = () => {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const navigationRef = useNavigationContainerRef();

  //   const [data, setData] = React.useState({
  //     email: "",
  //     password: "",
  //     check_textInputChange: false,
  //     secureTextEntry: true,
  //   });

  //   const handlePasswordChange = (val) => {
  //     setData({
  //       ...data,
  //       password: val,
  //     });
  //   };

  //   const updateSecureTextEntry = (val) => {
  //     setData({
  //       ...data,
  //       secureTextEntry: !data.secureTextEntry,
  //     });
  //   };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        if (user.uid) {
          db.ref("users/" + user.uid)
            .set({
              email: email,
              firstName: firstName,
              lastName: lastName,
              addr: address,
            })
            .then(() => alert("data submitted"))
            .catch((error) => alert(error));
        }

        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

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

      <Text style={styles.text_footer}>Sign Up</Text>
      <View style={styles.action}>
        <FontAwesome name="envelope-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Your Email"
          style={styles.textInput}
          autoCapitalize="none"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <FontAwesome name="lock" color="#05375a" size={20} />
        <TextInput
          placeholder="Your password"
          secureTextEntry
          //={data.secureTextEntry ? true : false}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#05375a" size={20} />
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
          autoCapitalize="none"
          value={firstName}
          onChangeText={(val) => setFirstName(val)}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.textInput}
          autoCapitalize="none"
          value={lastName}
          onChangeText={(val) => setLastName(val)}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="address-card-o" color="#05375a" size={20} />
        <TextInput
          placeholder="Residential Address"
          style={styles.textInput}
          autoCapitalize="none"
          value={address}
          onChangeText={(val) => setAddress(val)}
        />
      </View>
      {/* {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null} */}

      {/* <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text> */}
      {/* <View style={styles.action}>
       */}

      {/* <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity> */}
      {/* </View> */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <View>
          <Text style={[styles.text, { fontSize: 17 }]}>SIGN UP</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require("../assets/car2.webp")}
        style={[
          {
            width: 300,
            height: 200,

            transform: [{ translateX: 40 }, { translateY: 120 }],
          },
        ]}
      />
    </View>
  );
};

export default RegisterScreen;

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
    transform: [{ translateX: 40 }, { translateY: 95 }],
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    transform: [{ translateX: 40 }, { translateY: 120 }],
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
    backgroundColor: "#feb000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 300,
    height: 40,
    transform: [{ translateX: 40 }, { translateY: 130 }],
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
