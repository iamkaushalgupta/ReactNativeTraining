import React, { useEffect, useRef } from "react";
import {View, Animated, Text, ImageBackground, Dimensions } from 'react-native';

let {height,width} =Dimensions.get('window')
const Interpolation_demo = ()=>{
    const animationDemo = new Animated.Value(0)
    
    useEffect(()=>{
        Animated.timing(animationDemo,{
    duration: 2000,
    toValue: 295,
    useNativeDriver: false,

}).start()
    },[])

    let backgroundColorD = () => {
                 return animationDemo.interpolate({
                        inputRange:[0,100,180,285,],
                        outputRange:['red','green','yellow','blue']
                    })
                
    }
    return(
        <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={{flex:1,
            padding:10,}}
            imageStyle={{height:height,width:width}}>

        <View style={{flex:1,padding:10,}}>
               <Text style={{color:'white',fontSize:24,textAlign:'center'}}>InterPolation Animation</Text>
                               <Animated.View 
                style={{
                    height:100,
                    width:100,
                    borderRadius:90,
                    backgroundColor: backgroundColorD(),
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

export default Interpolation_demo