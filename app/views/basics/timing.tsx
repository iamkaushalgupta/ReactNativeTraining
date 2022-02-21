import React, {useEffect} from "react";
import { Text, View,Animated } from "react-native";

const Timing_animation = ()=>{
    const positon = new Animated.ValueXY({x:0,y:0})
    Animated.timing(positon, {
    toValue: {x:300,y:400},
    duration: 5000,
    useNativeDriver: true,
    //To use nativeDriver elements
}).start();

    return(
        <View style={{flex:1}}>
            <Animated.View style={{
                height:100,
                width:100,
                transform:[
                    {   translateX:positon.x, },
                    {   translateY:positon.y  },
                ],
                backgroundColor:'red'
            }}>
                <Text>kaushal</Text>
            </Animated.View>
            
        </View>
    )

}

export default Timing_animation;