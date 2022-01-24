import React from "react";
import {HomeModel, ContactModel, ProfileModel,LoginModel,RegisterModel, WalkthroughModel} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';


type RootStackParamList ={
    Home: undefined;
    Profile:undefined;
    Contact:undefined;
    Login:undefined;
    Register:undefined;
    Walkthrough:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name ="Home" component={HomeModel}></Stack.Screen>
            <Stack.Screen name= "Profile" component={ProfileModel}></Stack.Screen>
            <Stack.Screen name = "Contact" component ={ContactModel}></Stack.Screen>
            <Stack.Screen name= "Login" component={LoginModel}></Stack.Screen>
            <Stack.Screen name = "Register" component ={RegisterModel}></Stack.Screen>
            <Stack.Screen name = "Walkthrough" component ={WalkthroughModel}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;