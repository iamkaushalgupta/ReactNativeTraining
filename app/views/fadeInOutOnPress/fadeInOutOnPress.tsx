import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity, ImageBackground,Dimensions } from "react-native";
let {height,width} = Dimensions.get('window')
const FadeInOutOnPress = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 5000,
    useNativeDriver: true
}).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 3000,
    useNativeDriver: true
}).start();
  };

  return (
        <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={{flex:1,
            padding:10,}}
            imageStyle={{height:height,width:width}}>

      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>

        <TouchableOpacity onPress={()=>fadeIn()} style={{padding:10,backgroundColor:'lightpink',alignItems:'center',justifyContent:'center'}} >
          <Text style={{color:'black',fontSize:18,}} >Fade In View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>fadeOut()} style={{padding:10,backgroundColor:'lightpink',alignItems:'center',justifyContent:'center'}} >
          <Text style={{color:'black',fontSize:18,}} >Fade Out View</Text>
        </TouchableOpacity>
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
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign:'center'
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default FadeInOutOnPress;