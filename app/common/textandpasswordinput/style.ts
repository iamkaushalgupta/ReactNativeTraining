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
      
    },
    invalidText: {
        color: 'red',
        fontSize: 16,
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
        backgroundColor:COLORS.lightGray1,
    
        borderRadius:10,
    paddingRight:20
    },

    onoffButton:{
        justifyContent:'center',
        
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:10,
     
    },

})

export default styles;