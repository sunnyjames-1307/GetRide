import { StyleSheet, Text, View, Pressable, Button, TouchableOpacity, FlatList, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from 'react';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { setVehicle, setTrip } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import AddVehicle from './AddVehicle';
import { AntDesign } from '@expo/vector-icons';
const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
        regNo: "KL 64 6464",
        totalSeats: 5
    },
    // {
    //     id: "Uber-XL-456",
    //     title: "Uber XL",
    //     multiplier: 1.2,
    //     image: "https://links.papareact.com/5w8",
    //     regNo: "KL 64 6464",
    //     totalSeats: 5

    // },
    {
        id: "Bike",
        title: "Bike",
        multiplier: 1.2,
        // image: "https://ih1.redbubble.net/image.3253725746.3421/st,small,107x107-pad,100x100,f8f8f8.jpg",
        // image: "https://res.cloudinary.com/djsyh5syl/image/upload/c_scale,h_106/v1659076440/mini/sticker-vespa-gs-motif_70066940-removebg-preview_v7ccsu.png",
        // image: "https://cdn5.vectorstock.com/i/thumb-large/53/69/isolated-vintage-motorcycle-design-vector-31955369.jpg",
        image: "https://res.cloudinary.com/djsyh5syl/image/upload/v1659076334/mini/scooter2edit-removebg-preview_biwusi.png",
        regNo: "KL 64 6464",
        totalSeats: 2

    },

];

const VehicleDetails = () => {

    const [count, setCount] = useState(1);
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setVehicle(selected))
    }, [selected]);
    useEffect(() => {
        dispatch(setTrip({
            seats: count

        }))
    }, [count]);


    return (
        <View style={tw`bg-white h-full`}>
            <TouchableOpacity style={tw`mt-1 ml-2 shadow-lg`} onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <View style={tw`m-3 h-3/4`}>
                <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-xl`}>Available Seats</Text>
                    <View style={tw`flex flex-row`}>
                        <TouchableOpacity
                            onPress={() => {
                                setCount(count - 1)
                            }
                            }
                            disabled={(count < 2)}
                            style={[tw`bg-white border border-black`, { height: 35, width: 35 }]}>
                            <FontAwesome name="minus" color="black" size={20} style={[tw`text-center`, { paddingTop: 7 }]} />
                        </TouchableOpacity>
                        <Text style={tw`text-xl mx-2 mt-1`}>{count}</Text>
                        <TouchableOpacity
                            onPress={() => setCount(count + 1)}
                            disabled={(count > 4)}
                            style={[tw`bg-white border border-black`, { height: 35, width: 35 }]}>
                            <FontAwesome name="plus" color="black" size={20} style={[tw`text-center`, { paddingTop: 7 }]} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={tw`mb-2 mt-3 text-lg`}>Select Vehicle</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => {
                            return <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
                        }}
                        renderItem={({ item: { id, title, regNo, totalSeats, image }, item }) => (
                            <TouchableOpacity
                                onPress={() => (setSelected(item)

                                )}
                                style={tw`flex-row justify-between items-center px-5 pb-1  ${id === selected?.id && "bg-yellow-100"}`}>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: "contain",
                                    }}
                                    source={{ uri: image }}
                                />
                                <View style={tw`-ml-6`}>
                                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                                </View>
                                <View>
                                    <Text style={tw`text`}>{regNo}</Text>
                                    <Text style={tw`text-sm`}>Capacity:{totalSeats}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Add Vehicle')} style={[tw`mt-5 items-center`, { height: 35, width: 150, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-center my-auto`}>Add new vehicle</Text>
                    </TouchableOpacity> */}
                    <View style={tw`w-1/3 mr-3 mt-3`}>
                        <Button title='Add new Vehicle' onPress={() => navigation.navigate('Add Vehicle')}></Button>
                    </View>
                </View>
            </View>
            {/* color="#ffd700" */}
            <View style={tw`mt-auto bg-white border-t border-gray-200`}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Review")
                    }}
                    disabled={!selected}
                    style={tw`bg-blue-500 py-3 m-3 rounded-md items-center ${!selected && "bg-blue-100"}`}>
                    <Text style={tw`text-center text-white text-xl pb-5 top-2`}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VehicleDetails

const styles = StyleSheet.create({
    box: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: "#fff",
        margin: 1
    }
})