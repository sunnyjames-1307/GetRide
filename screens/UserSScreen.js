import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import uuid from "react-native-uuid";
//import { uuid } from "uuidv4";
//import "react-native-get-random-values";
//const { v4: uuidv4 } = require("uuid");
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navigationSlice";
import DateTimePicker from "@react-native-community/datetimepicker";
import tw from "twrnc";
// import { Icon, Image } from 'react-native-elements'
import FontAwesome from "react-native-vector-icons/FontAwesome";
//import RouteScreenStack from '../components/RouteScreenStack';
import Map from "../components/Map";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { auth, firestore, db } from "../firebase";
const UserSScreen = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState("");
  const [textTime, setTextTime] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let hours =
      tempDate.getHours() < 13 ? tempDate.getHours() : tempDate.getHours() - 12;
    let fTime =
      hours +
      ":" +
      (tempDate.getMinutes() < 10
        ? `0${tempDate.getMinutes()}`
        : tempDate.getMinutes()) +
      (tempDate.getHours() < 13 ? "AM" : "PM");
    setTextDate(fDate);
    setTextTime(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const createTrip = () => {
    if (origin && destination && textDate && textTime && auth.currentUser) {
      const rideUuid = auth.currentUser.uid;
      db.ref("rides/" + rideUuid)
        .set({
          rideUuid: rideUuid,
          requestor: auth.currentUser.email,
          pickup: origin,
          destination: destination,
          date: textDate,
          time: textTime,
          status: 0,
        })
        .then(() => alert("data submitted"))
        .catch((error) => alert(error));
      console.log(rideUuid);
      console.log(auth.currentUser.email);
      console.log(origin);
      console.log(destination);
      console.log(textDate);
      console.log(textTime);
    }
  };
  return (
    <SafeAreaView style={tw`bg-white h-full flex-grow`}>
      <View style={tw`h-1/1.9`}>
        {/* <View>
                    <View style={tw`border-b border-gray-500 p-1`}><Text style={[tw`text-center mt-10`, { fontSize: 30 }]}>Offer a Ride</Text></View>
                    <TouchableOpacity style={tw`absolute top-9 left-3 z-50 p-3`}>
                        <FontAwesome name="arrow-left" color="black" size={25} />
                    </TouchableOpacity>
                </View> */}
        <Map />
      </View>
      <View style={styles.location}>
        <Text style={{ fontSize: 18 }}>{origin.description.split(",")[0]}</Text>
        <Text style={{ fontSize: 18 }}>
          {destination.description.split(",")[0]}
        </Text>
      </View>
      {/* <View>
        
        {isDisplayDate && (
          <RNDateTimePicker
            value={mydate}
            mode={displaymode}
            is12Hour={true}
            display="default"
            onChange={changeSelectedDate}
          />
        )}
      </View> */}
      {/* <Text style={tw`m-3 text-xl`}>Schedule</Text> */}
      <View style={tw`mx-2`}>
        <View style={tw`flex flex-row p-2 justify-between`}>
          <View style={tw`w-1/3`}>
            <Button title="Trip Date" onPress={() => showMode("date")}></Button>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{textDate}</Text>
        </View>
        <View style={tw`flex flex-row p-2 mt-2 justify-between`}>
          <View style={tw`w-1/3 mr-3`}>
            <Button
              title="Start Time"
              onPress={() => showMode("time")}
            ></Button>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{textTime}</Text>
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          // is24Hour={true}
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
      <TouchableOpacity
        onPress={createTrip}
        style={styles.Sbutton}
        title="Create Trip"
      >
        <View>
          <Text style={styles.text}>Find Trip</Text>
        </View>
      </TouchableOpacity>

      {/* <Text style={{ fontSize: 20 }}>Time: {date}</Text> */}
      {/* <Button
        onPress={() => {
          console.log(origin.description); 
        }}
      >
        Button
      </Button> */}
      {/* <Button onPress={() => console.log(origin)}></Button> */}
    </SafeAreaView>
  );
};

export default UserSScreen;

const styles = StyleSheet.create({
  map: { flex: 1 },
  location: {
    borderWidth: 5,
    borderColor: "black",
    fontSize: 50,
    width: 370,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
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
    marginLeft: 70,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
