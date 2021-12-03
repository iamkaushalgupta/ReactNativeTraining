import React from "react";
import {HomeModel, ContactModel, ProfileModel,TestModel,PaypalModel} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';


type RootStackParamList ={
    Home: undefined;
    Profile:undefined;
    Contact:undefined;
    Demo: undefined;
    PayPal:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="PayPal">
            <Stack.Screen name ="Home" component={HomeModel}></Stack.Screen>
            <Stack.Screen name ="Demo" component={TestModel}></Stack.Screen>
            <Stack.Screen name= "Profile" component={ProfileModel}></Stack.Screen>
            <Stack.Screen name = "Contact" component ={ContactModel}></Stack.Screen>
            <Stack.Screen name = "PayPal" component ={PaypalModel}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;

