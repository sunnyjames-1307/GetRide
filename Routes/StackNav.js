import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen"
import FirstScreen from "../screens/FirstScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import UserFirstScreen from "../screens/UserFirstScreen"
const screens={
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
    UserFirstScreen:{
        screen: UserFirstScreen,
        navigationOptions: { headerShown: false }
    }

}
const StackNav= createStackNavigator(screens);
export default createAppContainer(StackNav);
