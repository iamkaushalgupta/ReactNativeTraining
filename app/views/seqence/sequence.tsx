import React, { useEffect } from "react";
import {Text,View,Animated, ImageBackground,Dimensions, TouchableOpacity, Image} from 'react-native'
import { HeaderComponent } from "../../common";
import { strings } from "../../constants";
let {height,width} = Dimensions.get('window')
const Sequence_demo =({navigation}:any)=>{
    const animationDemo = new Animated.Value(0);
    useEffect(()=>{
        Animated.sequence([
            Animated.timing(animationDemo,{
                toValue: 285,
                duration: 2000,
               useNativeDriver: false
            }),
              Animated.timing(animationDemo, {
                toValue: 10,
                duration:2000,
                useNativeDriver: false
            }), 
        
        ]
          ).start()
    },[])
    return(
        <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={{flex:1,
            padding:10,}}
            imageStyle={{height:height,width:width}}>
        <View style={{flex:1}}>
        <HeaderComponent  navigation={navigation}  head={strings.sequenceAnimation}/>
        <Animated.View 
            style={{
            height:100,
            width:100,
            borderRadius:90,
            backgroundColor:animationDemo.interpolate({
                inputRange:[0,100,180,285,],
                outputRange:['red','green','yellow','red']
            }),

            transform: [
                { translateX: animationDemo },
                { translateY: animationDemo.interpolate({
                    inputRange:[0,80,100,180,285,],
                    outputRange:[0,200,300,200,0],    
                }) },
            {scaleX:animationDemo.interpolate({
                inputRange:[0,80,100,180,285,],
                outputRange:[1,1.2,1.5,1.2,1],
            })},
            {scaleY:animationDemo.interpolate({
                inputRange:[0,80,100,180,285,],
                outputRange:[1,1.2,1.5,1.2,1],
            })},
                {rotate: animationDemo.interpolate({
                    inputRange:[0,295],
                    outputRange:['0deg','360deg']
                })  }
              ],
              opacity:animationDemo.interpolate({
            inputRange: [0,150,295],
            outputRange: [0,1,0.5],

})
        }}
        >

        </Animated.View>
    </View>
    </ImageBackground>
    )
}
export default Sequence_demo;