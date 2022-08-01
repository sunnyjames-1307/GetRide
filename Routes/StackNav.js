import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen"
import FirstScreen from "../screens/FirstScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import UserScreen from "../screens/UserScreen"
import RouteScreen from "../screens/RouteScreen"
import VehicleConfirm from "../components/VehicleConfirm";
const screens={
    VehicleConfirm:{
        screen: VehicleConfirm,
        navigationOptions: { headerShown: false }

    },
    FirstScreen:{
        screen: FirstScreen,
        navigationOptions: { headerShown: false }
    },
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions: { headerShown: false }
    },
   
    LoginScreen:{
        screen:LoginScreen,
        navigationOptions: { headerShown: false }
    },
    RegisterScreen:{
        screen: RegisterScreen,
        navigationOptions: { headerShown: false }
    },
    UserScreen:{
        screen: UserScreen, 
        navigationOptions: { headerShown: false }
    },
    RouteScreen: {
        screen: RouteScreen,
        navigationOptions: { headerShown: false }

    }

}
const StackNav= createStackNavigator(screens);
export default createAppContainer(StackNav);
