import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { setDestination, setOrigin } from "../slices/navigationSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";

const UserFirstScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <View>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={require("../assets/GETRIDELOGO.jpg")}
        />
        {/* <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          query={{
            key: "AIzaSyDXkUEn1LxrtepY_lDxy2BkrNHzRkDsYxg",
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
          }}
        /> */}
        <GooglePlacesAutocomplete
          placeholder="Search destination"
          minLength={2}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          onFail={(error) => console.error(error)}
          query={{
            key: "AIzaSyCqn1S12Kz772hl7aPV42MXT1HLT6wAyyo",
            language: "en",
          }}
          debounce={400}
        />
        {/* <MapboxAutocomplete
          publicKey="Your Mapbox Public Key"
          inputClass="form-control search"
          onSuggestionSelect={_suggestionSelect}
          country="us"
          resetSearch={false}
        /> */}
      </View>
    </View>
  );
};

export default UserFirstScreen;

const styles = StyleSheet.create({});
