import React from "react";
import {
     LoginModel,
     RegisterModel, 
     WalkthroughModel, 
     CategoryModel, 
    CoursesModel,
    CourseModel
} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './tabNavigation'

type RootStackParamList ={
    Tab:undefined;
    Login:undefined;
    Register:undefined;
    Walkthrough:undefined;
    Category:undefined;
    Courses:undefined;
    Course:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Tab" screenOptions={{headerShown:false}}>
            <Stack.Screen name= "Login" component={LoginModel}></Stack.Screen>
            <Stack.Screen name = "Register" component ={RegisterModel}></Stack.Screen>
            <Stack.Screen name = "Walkthrough" component ={WalkthroughModel}></Stack.Screen>
            <Stack.Screen name = "Category" component ={CategoryModel}></Stack.Screen>
            <Stack.Screen name = "Tab" component ={TabNav}></Stack.Screen>
            <Stack.Screen name = "Courses" component ={CoursesModel}></Stack.Screen>
            <Stack.Screen name = "Course" component ={CourseModel}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;