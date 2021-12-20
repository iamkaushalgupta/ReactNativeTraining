import React from "react";
import { StyleSheet } from "react-native";


const styles=(o:any)=>StyleSheet.create(
    {
        header:{
            flexDirection:'row',
            justifyContent:"space-between",
            marginTop:o.isLandscape?o.height*0.04:o.height*0.025,
            marginBottom:o.isLandscape?o.height*0.04:o.height*0.03,
            marginHorizontal: o.isLandscape?o.width*0.02:o.width*0.03,
        },
    
        
    icon:{
        height:o.isLandscape?o.height*0.06:o.width*0.07,
        width:o.isLandscape?o.height*0.065:o.width*0.07,
        resizeMode:"contain",
        
    },
    profileImage:{
        
        height:o.isLandscape?o.height*0.18:o.width*0.18,
        width:o.isLandscape?o.height*0.18:o.width*0.18,
        resizeMode:'contain',
        justifyContent:'center',
        alignContent:'center',
        
    
    },

        detailText:{
            marginHorizontal: o.isLandscape?o.width*0.02:o.width*0.03,
            justifyContent:'center',
            
        
        },
        name:{
            fontSize:o.isLandscape?o.height*0.05:o.width*0.05,
            fontWeight:'600',
            color:"#000020",
        
        },

        longLine:{
            width:o.width,
            backgroundColor:'grey',
            height:o.isLandscape?o.height*0.002:o.height*0.001,
            marginTop:o.isLandscape?o.height*0.04:o.height*0.02
        },

        head:{
            flexDirection:'row',
            textAlign:'center',
            marginHorizontal: o.isLandscape?o.width*0.02:o.width*0.045,
        },

        InformationContainer:{
        
             borderWidth:1,
                borderColor:'grey',
                marginHorizontal: o.isLandscape?o.width*0.02:o.width*0.06,
                marginVertical:o.isLandscape?o.height*0.04:o.height*0.02,
                paddingHorizontal: o.isLandscape?o.width*0.04:o.width*0.05
            },

        commonFirstLine:{
        
            flexDirection:'row',
            justifyContent:'space-between',    
            color:'black',
            paddingVertical:o.isLandscape?o.height*0.045:o.height*0.025
        },

        cameraImage:{
        height:o.isLandscape?o.height*0.05:o.width*0.06,
        width:o.isLandscape?o.height*0.18:o.width*0.18,
        },
        container:{
        flex:1

        },
        text:{
            color:'black',
            fontSize:o.isLandscape?o.width*0.03:o.width*0.05,
            fontWeight:'600',
            
        },
        editButton:{
            backgroundColor:'rgba(128,128,128,0.2)',
            paddingHorizontal:o.isLandscape?o.width*0.03:o.width*0.03,
            justifyContent:'center',
            
        },
        editText:{
            color:'black',
            fontWeight:'600'
        },

        inputText:{
            color:'black',
            marginBottom: o.isLandscape?o.height*0.006:o.height*0.01,
            
        },

        labelText:{
            color:'grey'
        },
        modalContainer:{
            flex:1
        },

        modalHeader:{
            backgroundColor:'rgba(1,1,1,0.7)',
            flex:0.8
        },
        modalFooter:{
            alignItems:'center',
            flex:0.2,
            flexDirection:'row',
            backgroundColor:"#000020",
            justifyContent:'space-between',
            paddingHorizontal:o.isLandscape?o.width*0.07:o.width*0.08,
            
        
        },
        modalText:{
            color:'white',
        },
        modalIconText:{
            justifyContent:'center',
            alignItems:'center'

        },
        modalIcon:{
            height:o.isLandscape?o.height*0.05:o.height*0.07,
            width:o.isLandscape?o.width*0.05:o.width*0.09,
            resizeMode:"contain",
            tintColor:'white'
        },
        iconBorder:{
            backgroundColor:'rgba(1,1,1,0.05)',
            padding:o.isLandscape?o.height*0.04:o.width*0.028,
            borderRadius:90,
        }

    }
    


    
)

export default styles;