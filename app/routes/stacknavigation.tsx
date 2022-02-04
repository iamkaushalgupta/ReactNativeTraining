import React from "react";
import {
     LoginModel,
     RegisterModel, 
     WalkthroughModel, 
     CategoryModel, 
    CoursesModel,
    CourseModel,
    NotificationModel,
    InstructorProfileModel,
    MemberShipModel
} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './tabNavigation'

type RootStackParamList ={
    Tab:Function;
    Login:Function;
    Register:Function;
    Walkthrough:Function;
    Category:Function;
    Courses:Function;
    Course:Function;
    Notification:Function;
    InstructorProfile:Function;
    MemberShip:Function
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name= "Login" component={LoginModel}></Stack.Screen>
            <Stack.Screen name = "Register" component ={RegisterModel}></Stack.Screen>
            <Stack.Screen name = "Walkthrough" component ={WalkthroughModel}></Stack.Screen>
            <Stack.Screen name = "Category" component ={CategoryModel}></Stack.Screen>
            <Stack.Screen name = "Tab" component ={TabNav}></Stack.Screen>
            <Stack.Screen name = "Courses" component ={CoursesModel}></Stack.Screen>
            <Stack.Screen name = "Course" component ={CourseModel}></Stack.Screen>
            <Stack.Screen name = "Notification" component ={NotificationModel}></Stack.Screen>
            <Stack.Screen name = "InstructorProfile" component ={InstructorProfileModel}></Stack.Screen>
            <Stack.Screen name = "MemberShip" component ={MemberShipModel}></Stack.Screen>

        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;