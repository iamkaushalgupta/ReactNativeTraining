import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions, Image } from "react-native";
import { HeaderComponent } from "../../common";
import { strings } from "../../constants";

let {height,width} = Dimensions.get('window')
const Parellel_demo = ({navigation}:any) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
   const fadeAnim = useRef(new Animated.Value(0)).current; // 0 to 1 and 1 to 0
   const fadeAnim1 = useRef(new Animated.Value(1)).current;
    
   const perform=()=>{
       
    fadeAnim.setValue(0)
    fadeAnim1.setValue(1)
    Animated.parallel([
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
        style={{flex:1,
            padding:10,}}
            imageStyle={{height:height,width:width}}>
<HeaderComponent  navigation={navigation}  head={strings.ParallelAnimation}/>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            marginTop:20,
            justifyContent:'center'
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
        <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,backgroundColor:'steelblue',borderRadius:20,alignItems:'center',justifyContent:'center'}} onPress={()=>perform()} >
          <Text style={{color:'white',fontSize:18,alignItems:'center',justifyContent:'center'}} >Click me</Text>
        </TouchableOpacity>
        </View>
      </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'black'
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "red"
  },
  fadingText: {
    fontSize: 28,
    color:'white'
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default Parellel_demo;