import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import WhereTo from './WhereTo';
import VehicleDetails from './VehicleDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Review from './Review';
import { NavigationContainer } from '@react-navigation/native';
import AddVehicle from './AddVehicle';




const RouteScreenStack = () => {

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="WhereTo"
                    component={WhereTo}
                    options={{
                        headerShown: false
                    }}

                />
                <Stack.Screen
                    name="VehicleDetails"
                    component={VehicleDetails}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Add Vehicle"
                    component={AddVehicle}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Review"
                    component={Review}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default RouteScreenStack

const styles = StyleSheet.create({})