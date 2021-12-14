import { StyleSheet } from "react-native";

const styles=(o:any)=>StyleSheet.create({

    container:{
        
        marginHorizontal:o.isLandscape?o.width*0.08: o.width*0.08,
         
    },
    logo:{
        alignSelf:'center',
      
        height:o.isLandscape?o.height*0.08: o.height*0.045,
        marginVertical:o.isLandscape?o.height*0.03: o.height*0.045,
        resizeMode:'contain'

    },

    text:{
        alignSelf:'center',
        color:'black',
        marginVertical:o.isLandscape?o.height*0.01: o.height*0.005,
        fontWeight:'500',
        fontSize:o.isLandscape?o.width*0.055: o.width*0.08,
    },

    textinput:{
        paddingHorizontal:o.isLandscape?o.width*0.025: o.width*0.04,
        borderWidth:2,
        borderColor:'lightslategrey',
        marginVertical:o.isLandscape?o.height*0.02: o.height*0.016,
        height: o.isLandscape?o.height*0.1: o.height*0.06
    },

    continueButton:{
        backgroundColor:"#000020",
        height: o.isLandscape?o.height*0.08: o.height*0.06
    },

    continueText:{
        color:'white',
        fontSize:o.isLandscape?o.width*0.025: o.width*0.05,
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center',
        paddingVertical:o.isLandscape?o.height*0.008: o.height*0.008
    },
    backButton:{
       marginVertical:o.isLandscape?o.height*0.02: o.height*0.02,
       borderColor:'rgb(227, 62, 11)',
       borderWidth:2,
        height: o.isLandscape?o.height*0.08: o.height*0.06
    },
    backText:{

        color:'rgb(227, 62, 11)',
        fontSize:o.isLandscape?o.width*0.025: o.width*0.05,
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center',
        paddingVertical:o.isLandscape?o.height*0.008: o.height*0.008

    }

})

export default styles