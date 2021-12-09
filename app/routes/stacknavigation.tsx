import React from "react";
import { HomeModel, ContactModel, ProfileModel, TestModel, CourseModal } from '../viewModels'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './tabnavigation'

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Contact: undefined;
    Demo: undefined;
    Course: undefined;
    Tab: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeModel}></Stack.Screen>
                <Stack.Screen name="Demo" component={TestModel}></Stack.Screen>
                <Stack.Screen name="Profile" component={ProfileModel}></Stack.Screen>
                <Stack.Screen name="Contact" component={ContactModel}></Stack.Screen>
                <Stack.Screen name="Course" component={CourseModal}></Stack.Screen>
                <Stack.Screen name="Tab" component={MainTab}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;