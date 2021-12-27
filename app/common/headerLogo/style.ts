import { StyleSheet } from "react-native";


const styles=(o:any)=>StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        resizeMode:'contain',
        height:o.height*0.15,
        width:o.width*0.5,
        justifyContent:'center',
        alignSelf:'center',
        
        
    }

})

export default styles;