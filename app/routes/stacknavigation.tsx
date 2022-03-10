import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
// import {Event_animation,Decay_animation,Spring_animation,Timing_animation,
//     HomeScreen,
//     Interpolation_demo,
//     Loop_demo,Parellel_demo,
//     Sequence_demo,
//     Stagger_demo,
//     FadeInOutOnPress
// } from '../viewModels'
import Event_animation from "../views/basics/event";
import Decay_animation from "../views/basics/decay";
import Spring_animation from "../views/basics/spring";
import Timing_animation from "../views/basics/timing";
import HomeScreen from "../views/homeScreen/homeScreen";
import Interpolation_demo from "../views/interpolation/interpolation";
import Loop_demo from "../views/loop/loop";
import Parellel_demo from "../views/parallel/parallel";
import Sequence_demo from "../views/seqence/sequence";
import Stagger_demo from "../views/stagger/stagger";
import FadeInOutOnPress from "../views/fadeInOutOnPress/fadeInOutOnPress";

type RootStackParamList ={
    Home: Function;
    Spring:Function;
    Time:Function;
    Decay:Function;
    Event:Function;
    InterPolate:Function;
    Loop:Function;
    Parallel:Function;
    Sequence:Function;
    Stagger:Function;
    FadeInOut:Function;
    
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}} >
            <Stack.Screen name ="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name ="Spring" component ={Spring_animation}/>
            <Stack.Screen name ="Time" component ={Timing_animation}/>
            <Stack.Screen name ="Decay" component ={Decay_animation}/>
            <Stack.Screen name ="Event" component ={Event_animation}/>
            <Stack.Screen name ="InterPolate" component ={Interpolation_demo}/>
            <Stack.Screen name ="Loop" component ={Loop_demo}/>
            <Stack.Screen name ="Parallel" component ={Parellel_demo}/>
            <Stack.Screen name ="Sequence" component ={Sequence_demo}/>
            <Stack.Screen name ="Stagger" component ={Stagger_demo}/>
            <Stack.Screen name="FadeInOut" component={FadeInOutOnPress}/>
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;