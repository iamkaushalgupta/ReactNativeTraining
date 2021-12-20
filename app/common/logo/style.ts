import { StyleSheet, Dimensions } from "react-native";



const styles =(o:any)=> StyleSheet.create({
    logo: {
        
        resizeMode:'contain'
        
    },

    container:{
        scaleY:0.55,
        scaleX:0.5,
        marginLeft:o.isLandscape?-o.width*0.02: -o.width*0.06,
        
    }
    
})

export default styles;