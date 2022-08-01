
import DateTimePicker from '@react-native-community/datetimepicker'
import tw from 'twrnc'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import { setTravelTimeInformation } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import OutlineInput from 'react-native-outline-input';


// const DemoPicker = () => {
export default function DatePicker() {
    const dispatch = useDispatch();
    const [fare, setFare] = useState('0')
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [textDate, setTextDate] = useState('')
    const [textTime, setTextTime] = useState('')
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        let hours = tempDate.getHours() < 13 ? tempDate.getHours() : tempDate.getHours() - 12
        let fTime = hours + ':' + (tempDate.getMinutes() < 10 ? `0${tempDate.getMinutes()}` : tempDate.getMinutes()) + (tempDate.getHours() < 13 ? 'AM' : 'PM')
        setTextDate(fDate)
        setTextTime(fTime)
        // dispatch(setTrip({
        //     date: fDate,
        //     time: fTime
        // }))

    }

    useEffect(() => {
        // setCalculation(() => count * 2);
        // dispatch(setTrip(count))
        dispatch(setTravelTimeInformation({
            date: textDate,
            time: textTime,
            fare: fare
        }))
    }, [textDate, textTime, fare]);


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }

    return (
        // <View style={styles.container}>
        <View style={tw`flex`}>
            {/* <View styles={{
                container: {
                    flex: 0,
                },
                textInput: {
                    fontSize: 18,
                },
            }}> */}
            <View style={tw`mx-3 mr-2 mt-2`}>
                <OutlineInput
                    value={fare}
                    onChangeText={(e) => setFare(e)}
                    label="Rate per person per km"
                    activeValueColor="#000000"
                    activeBorderColor="#000000"
                    activeLabelColor="#000000"
                    passiveBorderColor="#808080"
                    passiveLabelColor="#000000"
                    passiveValueColor="#808080"
                />
            </View>
            <Text style={tw`m-3 text-xl`}>Schedule</Text>
            <View style={tw`mx-2`}>
                <View style={tw`flex flex-row p-2 justify-between`}>
                    <View style={tw`w-1/3`}>
                        <Button title='Trip Date' onPress={() => showMode('date')}></Button>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{textDate}</Text>

                </View>
                <View style={tw`flex flex-row p-2 mt-2 justify-between`}>
                    <View style={tw`w-1/3 mr-3`}>
                        <Button title='Start Time' onPress={() => showMode('time')}></Button>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{textTime}</Text>

                </View>
            </View>


            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    display='default'
                    // is24Hour={true}
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            )}

        </View>
    )
}

// export default DemoPicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: 'left',
        justifyContent: 'center'
    }
})