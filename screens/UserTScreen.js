import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { db, auth, firestore } from "../firebase";

const UserTScreen = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    //const rideId = auth.currentUser ? auth.currentUser.uid : "";
    db.ref("rides/").on("value", function (snapshot) {
      console.log(snapshot.val());
    });
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setData(getData);
  //     }, 1000);
  //   }, []);
  return (
    <View>
      <Text>UserTScreen</Text>
      <Button onPress={getData} title="button">
        Click
      </Button>
    </View>
  );
};

export default UserTScreen;

const styles = StyleSheet.create({});
