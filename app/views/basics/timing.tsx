import React, {useEffect} from "react";
import { Text, View,Animated, ImageBackground,Dimensions } from "react-native";

let {height,width} =Dimensions.get('window')
const Timing_animation = ()=>{
    const positon = new Animated.ValueXY({x:0,y:0})
    Animated.timing(positon, {
    toValue: {x:300,y:400},
    duration: 5000,
    useNativeDriver: true,
    //To use nativeDriver elements
}).start();

    return(
        <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={{flex:1,
            padding:10,}}
            imageStyle={{height:height,width:width}}>
        <View style={{flex:1,padding:10,}}>
            <Text style={{color:'white',fontSize:24,textAlign:'center'}}> Timing Animation</Text>
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
                <Text style={{color:'white'}}  >Successive Technologies</Text>
            </Animated.View>
            
        </View>
        </ImageBackground>
    )

}

export default Timing_animation;