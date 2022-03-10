import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity,ImageBackground, Dimensions, Image } from "react-native";
import { HeaderComponent } from "../../common";
import { strings } from "../../constants";
import style from './style'

let {height,width} = Dimensions.get('window')

 const Stagger_demo = ({navigation}:any) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
   const fadeAnim = useRef(new Animated.Value(0)).current; // 0 to 1 and 1 to 0
   const fadeAnim1 = useRef(new Animated.Value(1)).current;
    
   const perform=()=>{       
    fadeAnim.setValue(0)
    fadeAnim1.setValue(1)
    Animated.stagger(2000,[
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }),
        Animated.timing(fadeAnim1, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        })
    ]).start();
    
   }
   
  return (
   
      <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={style.container}
            imageStyle={style.containerImage}>
      <HeaderComponent  navigation={navigation}  head={strings.staggerAnimation}/>
   <View style={{flex:1,justifyContent:'center'}} >
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim1
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={()=>perform()} style={{padding:10,justifyContent:'center',alignItems:'center',backgroundColor:'steelblue',borderRadius:20,}} >
          <Text style={{fontSize:18,color:'white'}} >Click me</Text>
        </TouchableOpacity>
     
        </View>
      </View>
      </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    alignItems: "center",
    backgroundColor:'black'
  },
  fadingContainer: {
    padding: 20,
    
    backgroundColor: "orangered"
  },
  fadingText: {
    color:'white',
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default Stagger_demo;