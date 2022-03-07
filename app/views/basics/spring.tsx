import React, {useEffect} from "react";
import { Text, View,Animated, ImageBackground,Dimensions } from "react-native";

let {height,width} =Dimensions.get('window')
const Spring_animation = ()=>{
    const positon = new Animated.ValueXY({x:0,y:0})

//friction: Controls "bounciness"/overshoot. Default 7.
// tension: Controls speed. Default 40.
// speed: Controls speed of the animation. Default 12.
// bounciness: Controls bounciness. Default 8.
    Animated.spring(positon,{
    toValue: { x: 300, y: 400 },
    // friction:9,
    // tension:3,
    speed:1,
    bounciness:20,
    useNativeDriver: false,

}).start()
    return(
        <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
    style={        {flex:1,
    
        padding:10,}}
        
        imageStyle={{height:height,width:width}}>
        <View style={{flex:1,}}>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}> Spring Animation</Text>
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

export default Spring_animation;