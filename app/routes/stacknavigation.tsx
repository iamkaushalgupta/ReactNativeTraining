import React from "react";
import {HomeModel,} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList ={
    Home: Function;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}  >
            <Stack.Screen name ="Home" component={HomeModel}></Stack.Screen>          
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;