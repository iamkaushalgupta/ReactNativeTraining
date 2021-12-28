import React from "react";
import {HomeModel, ContactModel, ProfileModel,TestModel,OnboardingModel,SignInModel} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';


type RootStackParamList ={
    Home: undefined;
    Profile:undefined;
    Contact:undefined;
    Demo: undefined;
    Onboarding:undefined;
    Signin:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown:false}}>
            <Stack.Screen name ="Home" component={HomeModel}></Stack.Screen>
            <Stack.Screen name ="Demo" component={TestModel}></Stack.Screen>
            <Stack.Screen name= "Profile" component={ProfileModel}></Stack.Screen>
            <Stack.Screen name = "Contact" component ={ContactModel}></Stack.Screen>
            <Stack.Screen name = "Onboarding" component ={OnboardingModel}></Stack.Screen>
            <Stack.Screen name = "Signin" component ={SignInModel}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;