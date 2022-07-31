import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navigationSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { db, auth } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const UserScreen = () => {
  const dispatch = useDispatch();
  const dbRef = db.ref();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [addr, setAddr] = useState("");
  const [data, setData] = useState([]);

  //const [uid, setUid] = useState(true);
  //const handlePress = () => false;
  //   function user_data() {
  //     const dbRef = db.ref();
  //     const userId = auth.currentUser.uid;
  //     return dbRef("/users/" + userId)
  //       .once("value")
  //       .then((snapshot) => {
  //         var firstname = (snapshot.val() && snapshot.val().fname) || "Anonymous";
  //         setFname(firstname);
  //         console.log(firstname);
  //       });
  //   }

  //setUid(id);
  //   function getUserData(uid) {
  //     db.ref(`/Users/${uid}/Info`).on("value", (snapshot) => {
  //       const useremail = snapshot.val().addr || "unknown email";
  //       const userFname = snapshot.val().fname || "unknown fname";
  //       const userLname = snapshot.val().lname || "unknown lname";
  //       setAddr(useremail);
  //       setFname(userFname);
  //       setLname(userLname);
  //     });
  //   }

  const getData = () => {
    const userId = auth.currentUser ? auth.currentUser.uid : "";
    db.ref("users/" + userId).on("value", function (snapshot) {
      setFname(snapshot.val().firstName);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setData(getData);
    }, 1000);
  }, []);

  return (
    <View>
      <Text style={styles.heading}>Find a ride</Text>
      <Text style={styles.name}>Hi {fname}👋, Let's find a Ride</Text>
      <View style={styles.location}>
        <GooglePlacesAutocomplete
          placeholder="Where from"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            console.log(data.description);
            // console.log(details);
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            console.log(data.description);
            // console.log(details);
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
      <TouchableOpacity
        style={styles.Gbutton}
        onPress={() => {
          /* do this */
        }}
      >
        <View>
          <Text style={styles.text}>Find Trip</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  location: {
    transform: [{ translateY: 50 }],
    width: 360,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "black",
    margin: 15,
    marginTop: 60,
  },
  heading: {
    fontSize: 30,
    marginLeft: 120,
    marginTop: 20,
    fontWeight: "bold",
  },
  name: {
    fontSize: 23,
    marginLeft: 10,
    marginTop: 30,
    transform: [{ translateX: 10 }, { translateY: 70 }],
    fontWeight: "bold",
  },
  schedule: {
    fontSize: 15,
    transform: [{ translateX: 20 }, { translateY: 230 }],
  },
  Sbutton: {
    backgroundColor: "black",
    fontColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 5,
    width: 250,
    height: 50,
    transform: [{ translateY: 40 }],
    marginBottom: 30,
    marginLeft: 15,
  },
  Gbutton: {
    backgroundColor: "black",
    fontColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 5,
    width: 150,
    height: 50,
    transform: [{ translateY: 120 }],
    marginLeft: 120,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
