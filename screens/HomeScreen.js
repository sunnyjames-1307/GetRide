import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
   
    
    <View style={styles.container}>
      
    
      <Image
        source={require("../assets/GETRIDELOGO.jpg")}
        style={styles.logo}
      />
       <Image style={styles.hs1}
        source={require("../assets/hs1.jpg")}
        />
         <Image style={styles.hs2}
        source={require("../assets/hs2.jpg")}
        />
      

      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
        <View style={styles.button}>
       
          <Text style={styles.text}>GetRide</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}
      >
        <View style={styles.Rbutton}>
          <Text style={styles.text}>StartRide</Text>
        </View>
      </TouchableOpacity>

     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  logo: {
    width: 395,
    height: 150,
    borderColor: "#feb000",
    borderRadius:350,
    transform: [{ translateX: 0 }, { translateY: 80 }],
    flexDirection: "row",
    alignItems: "center",
  },
  hs1: {
    width: 150,
    height: 150,
    transform: [{ translateX: -1 }, { translateY: 200 }]
    
  },
  hs2:{
    width: 150,
    height: 140,
    transform: [{ translateX: 236 }, { translateY: 50 }]
  },
  /*hs3:{
    width: 200,
    height: 240,
    transform:[{translateX:90},{translateY:-270}]
  },*/
  button: {
    
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    width: 100,
    height: 200,
    transform: [{ translateX: 40 }, { translateY: -30 }],
    marginBottom: 30,
  },
  Rbutton: {
    
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    width: 150,
    height: 200,
    transform: [{ translateX: 240 }, { translateY: -260 }],
    marginBottom: 30,
    
  },
  text: {
    fontSize: 20,
    color: "#feb000",
    fontWeight: "bold",
  },
});
