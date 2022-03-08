import React, { useRef } from "react";
import { Animated, Dimensions, Image, ImageBackground, PanResponder, StyleSheet, Text, TouchableOpacity, View } from "react-native";
let {height,width} =Dimensions.get('window')
const Event_animation = ({navigation}:any) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
      
    ],{useNativeDriver:false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
  toValue: { x: 0, y: 0 },
  useNativeDriver: false
} // Back to zero
      ).start();
    },
  });

  return (
    <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={{flex:1,
            padding:10,}}
            imageStyle={{height:height,width:width}}>
    <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{height:40,width:40}}>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../assets/back.png')} style={{height:40,width:40,tintColor:'white'}} />
                 </TouchableOpacity>
                 </View>

            <Text style={{color:'white',fontSize:24,textAlign:'center'}}>Event Animation</Text>
            <View style={{height:40,width:40}}>

            </View>
            </View>
    <View style={styles.container}>
      
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "red",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default Event_animation;