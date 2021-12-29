import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles=()=>StyleSheet.create({
    container:{

    },
    
    inputText:{
        width:'95%'        
    },
    labelText:{
        color:COLORS.gray,
        fontSize:16,
        paddingVertical:10,     
    },
   
    icon:{
        resizeMode:'contain',
        alignSelf:'center',
        justifyContent:'center',
        tintColor:COLORS.gray    
             
    },
    inputContainer:{
     flexDirection:'row',
     justifyContent:'space-between',
        backgroundColor:'white',
    
        borderRadius:10,
    paddingRight:20
    },

    onoffButton:{
        justifyContent:'center',
        
    }

})

export default styles;