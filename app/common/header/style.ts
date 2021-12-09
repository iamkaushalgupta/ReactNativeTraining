import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#000020", 
        width:windowWidth, 
        height:windowHeight*0.1},

        logoImage:{
            resizeMode:'contain',
            width:windowWidth*0.35,
            height:windowHeight*0.05,
            marginTop: windowHeight*0.02 ,
        },
        
        helpImage:{
            marginTop:-windowHeight*0.05,
            marginLeft:windowWidth*0.88,
            
            resizeMode: 'contain',
            tintColor: 'white',
        }
    }
          

)

export default styles;