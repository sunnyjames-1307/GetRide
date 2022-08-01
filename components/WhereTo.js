import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import DatePicker from './DatePicker'
import tw from 'twrnc';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import OutlineInput from 'react-native-outline-input';
import { setTravelTimeInformation } from '../slices/navSlice';
const WhereTo = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const [fare, setFare] = useState('0')
    const [ori, setOri] = useState(null)
    const [dest, setDest] = useState(null)
    return (


        <View style={tw`bg-white h-full`}>
            <Text style={tw`m-3 text-xl`}>Your route</Text>
            <View style={tw`border rounded-lg m-3 p-2`}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    fetchDetails={true}
                    returnKeyType={"search"}
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
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        })),
                            setOri(data.description)

                    }}


                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en'
                    }}

                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <View style={tw`border-t-2 border-gray-200`} />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    fetchDetails={true}
                    returnKeyType={"search"}
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
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        })),
                            setDest(data.description)
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en'
                    }}

                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
            </View>

            <View>
                <DatePicker />
            </View>
            <KeyboardAvoidingView>
                <View style={tw`bg-white border-t border-gray-200 mt-auto top-8`}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("VehicleDetails")}
                        disabled={!ori && !dest}
                        style={tw`bg-blue-500 py-3 m-3 rounded-md items-center ${(!ori || !dest) && "bg-blue-100"}`}>
                        <Text style={tw`text-center text-white text-xl pb-5 top-2`}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        </View>


    )
}

export default WhereTo