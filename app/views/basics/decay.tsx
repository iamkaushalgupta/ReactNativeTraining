import React, {useEffect} from "react";
import { Text, View,Animated, ImageBackground,Dimensions, TouchableOpacity, Image } from "react-native";

let {height,width} = Dimensions.get('window')
const Decay_animation = ({navigation}:any)=>{
    const positon = new Animated.ValueXY({x:0,y:0})
    Animated.decay(positon, {
    velocity: 0.5,
    useNativeDriver: false,
  
}
).start();

    return(
        <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={        {flex:1,
        
            padding:10,}}
            
            imageStyle={{height:height,width:width}}>
        <View style={{flex:1,padding:10}}>
        <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{height:40,width:40}}>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../assets/back.png')} style={{height:40,width:40,tintColor:'white'}} />
                 </TouchableOpacity>
                 </View>

            <Text style={{color:'white',fontSize:24,textAlign:'center'}}>Decay Animation</Text>
            <View style={{height:40,width:40}}>

            </View>
            </View>
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

export default Decay_animation;