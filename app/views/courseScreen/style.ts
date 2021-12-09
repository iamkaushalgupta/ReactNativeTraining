import React from "react";
import { StyleSheet,Dimensions } from "react-native";

const styles =(o:any)=> StyleSheet.create({


    text:{
        color:"#000020",
        fontSize:25,
       paddingVertical:o.height*0.01, 
       fontWeight:"600",
       paddingLeft: o.isLandscape? o.width*0.02:o.width*0.02
     },

     itemPhoto:{
        width: o.isLandscape? o.width*0.88:o.width*0.96,
        height:o.isLandscape? o.height*0.4:o.height*0.25,
    
     },

     courseText:{
        paddingVertical:o.height*0.01,
        fontSize: 40,
         color:"#000020",
         width:o.isLandscape? o.width*0.91:o.width*0.93,
         fontWeight:'600'
     },
     
    button:{
        backgroundColor:"#000020",
        width:o.isLandscape? o.width*0.91:o.width*0.93,
        marginTop:o.height*0.035 ,
        
    },

     container:{
            
         color:'white',
         alignItems:'center'
     },
     buttonText: { 
         color: 'white', 
         textAlign: 'center', 
         padding: 10, 
         fontSize: 15
         },

         listContainer:{
            // paddingRight:o.width*0.02

         },

         innerContainer:{
             marginHorizontal:o.width*0.022,
            
         },

         progressBar:{
            width:o.isLandscape? o.width*0.91:o.width*0.93
         }


})

export default styles;  