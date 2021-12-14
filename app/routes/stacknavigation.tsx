import React from "react";
import { Test2by4Model,ChangePasswordModel,CommunicationPreferncesModel } from '../viewModels'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './tabnavigation'
import Test2by4 from '../views/test2by4/test2by4'

type RootStackParamList = {
   
    Tab: undefined;
    Test2by4:undefined;
    ChangePassword:undefined;
    CommunicationPrefernces:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tab" component={MainTab}></Stack.Screen>
                <Stack.Screen name="Test2by4" component={Test2by4Model}></Stack.Screen>
                <Stack.Screen name="ChangePassword" component={ChangePasswordModel}></Stack.Screen>
                <Stack.Screen name="CommunicationPrefernces"component={CommunicationPreferncesModel}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;