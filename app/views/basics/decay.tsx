import React, {useEffect} from "react";
import { Text, View,Animated } from "react-native";

const Decay_animation = ()=>{
    const positon = new Animated.ValueXY({x:0,y:0})
    Animated.decay(positon, {
    velocity: 0.5,
    useNativeDriver: false,
  
}
).start();

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

export default Decay_animation;