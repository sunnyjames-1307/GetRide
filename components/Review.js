import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { useSelector } from 'react-redux'
import { selectOrigin, selectDestination, selectVehicle, selectTrip, selectTravelTimeInformation } from '../slices/navSlice'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const Review = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const vehicle = useSelector(selectVehicle)
    const trip = useSelector(selectTrip)
    const travelInfo = useSelector(selectTravelTimeInformation)
    const navigation = useNavigation()

    let start = (origin?.description?.split(",")[0] + ' ,' + origin?.description?.split(",")[1]) || 'Please add origin'
    let end = (destination?.description?.split(",")[0] + ' ,' + destination?.description?.split(",")[1]) || 'Please add destination'
    return (
        <View style={tw`bg-white h-full`}>
            <ScrollView>
                <TouchableOpacity style={tw`mt-2 ml-2`} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={tw`m-3 mt-1 h-3/4`}>
                    <View style={tw`border rounded-lg p-2 mt-2`}>
                        <Text style={tw`text-lg p-1`}>From: {start || ''}</Text>
                        <View style={tw`border-t-2 border-gray-200`} />
                        <Text style={tw`text-lg p-1`}>To: {end || ''}</Text>
                    </View>
                    <View style={tw`flex flex-row justify-between mt-2`}>
                        <View style={[tw`mt-2 items-center`, { height: 50, width: 178, borderColor: "#000", borderWidth: 1 }]}>
                            <Text style={tw`text-center my-auto text-lg`}>Date: {travelInfo?.date || ''}</Text>
                        </View>
                        <View style={[tw`mt-2 items-center`, { height: 50, width: 178, borderColor: "#000", borderWidth: 1 }]}>
                            <Text style={tw`text-center my-auto text-lg`}>Time: {travelInfo?.time || ''}</Text>
                        </View>
                    </View>
                    <View style={[tw`mt-2 flex-row p-2 px-2 mt-4`, { height: 50, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-left ml-2 text-lg my-auto`}>Available Seats:</Text>
                        <Text style={[tw`text-right mr-2 text-lg my-auto`, { marginLeft: 'auto' }]}>{trip?.seats || ''}</Text>
                        {/* //{trip} */}
                    </View>

                    <View style={[tw`mt-2 flex-row p-2 px-2 mt-4`, { height: 50, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-left ml-2 text-lg my-auto`}>Vehicle:</Text>
                        <Text style={[tw`text-right mr-2 my-auto text-lg`, { marginLeft: 'auto' }]}>{vehicle?.title}</Text>
                    </View>
                    <View style={[tw`mt-2 flex-row p-2 px-2 mt-4`, { height: 50, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-left ml-2 text-lg my-auto`}>Reg No:</Text>
                        <Text style={[tw`text-right mr-2 my-auto text-lg`, { marginLeft: 'auto' }]}>{vehicle?.regNo}</Text>
                    </View>

                    <View style={[tw`mt-2 flex-row p-2 px-2 mt-4`, { height: 50, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-left ml-2 text-lg my-auto`}>Fee (per person)</Text>
                        <Text style={[tw`text-right mr-2 text-lg my-auto`, { marginLeft: 'auto' }]}>{travelInfo?.fare} rupees per km</Text>
                    </View>

                </View>
            </ScrollView>
            <View style={tw`mt-auto bg-white border-t border-gray-200`}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("Review")}
                    style={tw`bg-green-500 py-3 m-3 rounded-md items-center`}>
                    <Text style={tw`text-center text-white text-xl pb-5 top-2`}>Create Trip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({})