import React, {useEffect} from "react";
import { Text, View,Animated, ImageBackground,Dimensions, TouchableOpacity, Image } from "react-native";
import { HeaderComponent } from "../../common";
import { strings } from "../../constants";

let {height,width} =Dimensions.get('window')
const Timing_animation = ({navigation}:any)=>{
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
        <View style={{flex:1}}>
        <HeaderComponent  navigation={navigation}  head={strings.timingAnimation}/>
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