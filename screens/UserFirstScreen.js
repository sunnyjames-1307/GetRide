import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { setDestination, setOrigin } from "../slices/navigationSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
const axios = require("axios");
import { WebView } from "react-native-webview";
import mapTemplate from "../map-template";

const UserFirstScreen = () => {
  let webRef = undefined;
  let [mapCenter, setMapCenter] = useState("-121.913, 37.361");
  const run = `
      document.body.style.backgroundColor = 'blue';
      true;
    `;

  const onButtonClick = () => {
    const [lng, lat] = mapCenter.split(",");
    webRef.injectJavaScript(
      `map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`
    );
  };

  const handleMapEvent = (event) => {
    setMapCenter(event.nativeEvent.data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TextInput
          style={styles.textInput}
          onChangeText={setMapCenter}
          value={mapCenter}
        ></TextInput>
        <Button title="Set Center" onPress={onButtonClick}></Button>
      </View>
      <WebView
        ref={(r) => (webRef = r)}
        onMessage={handleMapEvent}
        style={styles.map}
        originWhitelist={["*"]}
        source={{ html: mapTemplate }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    height: "15%",
    backgroundColor: "#fff",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  textInput: {
    height: 40,
    width: "60%",
    marginRight: 12,
    paddingLeft: 5,
    borderWidth: 1,
  },
  map: {
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserFirstScreen;

// const dispatch = useDispatch();
// const [destination, setDestination] = useState("");
// // const findlongitude = (destiantion) => {
// //   const params = {
// //     access_key: "YOUR_ACCESS_KEY",
// //     query: "1600 Pennsylvania Ave NW",
// //   };

// //   axios
// //     .get("https://api.positionstack.com/v1/forward", { params })
// //     .then((response) => {
// //       console.log(response.data);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });
// // };
{
  /* <View style={styles.container}>
        <View style={styles.buttons}>
          <TextInput
            style={styles.textInput}
            onChangeText={setMapCenter}
            value={mapCenter}
          ></TextInput>
          <Button title="Set Center" onPress={onButtonPress}></Button>
        </View>
        
      </View> */
}
//     </View>
//   );
{
  /* <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={require("../assets/GETRIDELOGO.jpg")}
      /> */
}
