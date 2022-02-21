import React, {useEffect} from "react";
import { Text, View,Animated } from "react-native";

const Spring_animation = ()=>{
    const positon = new Animated.ValueXY({x:0,y:0})

//friction: Controls "bounciness"/overshoot. Default 7.
// tension: Controls speed. Default 40.
// speed: Controls speed of the animation. Default 12.
// bounciness: Controls bounciness. Default 8.
    Animated.spring(positon,{
    toValue: { x: 300, y: 400 },
    // friction:9,
    speed:10,
    bounciness:20,
    useNativeDriver: false,

}).start()
    return(
        <View style={{flex:1}}>
            <Animated.View style={{
                height:100,
                width:100,
                alignItems:'center',
                justifyContent:'center',
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

export default Spring_animation;