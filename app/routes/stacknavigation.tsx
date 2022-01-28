import React from "react";
import {HomeModel, ContactModel, ProfileModel,LoginModel,RegisterModel, WalkthroughModel, CategoryModel, CourseModel} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './tabNavigation'

type RootStackParamList ={
    Tab:undefined;
    Contact:undefined;
    Login:undefined;
    Register:undefined;
    Walkthrough:undefined;
    Category:undefined;
    Courses:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name = "Contact" component ={ContactModel}></Stack.Screen>
            <Stack.Screen name= "Login" component={LoginModel}></Stack.Screen>
            <Stack.Screen name = "Register" component ={RegisterModel}></Stack.Screen>
            <Stack.Screen name = "Walkthrough" component ={WalkthroughModel}></Stack.Screen>
            <Stack.Screen name = "Category" component ={CategoryModel}></Stack.Screen>
            <Stack.Screen name = "Tab" component ={TabNav}></Stack.Screen>
            <Stack.Screen name = "Courses" component ={CourseModel}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;