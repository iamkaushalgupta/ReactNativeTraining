import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles=()=>StyleSheet.create({
    inputText:{
        width:'95%',
        color:COLORS.black,
        paddingHorizontal:10,
        fontSize:18,
    },
    labelText:{
        color:COLORS.gray,
        fontSize:16,
        
    },
    labelContainer:{
        paddingVertical:10,
    },
    invalidText:{
        color:'red',
        fontSize:16,
    },
    icon:{
        resizeMode:'contain',
        alignSelf:'center',
        justifyContent:'center',
             
    },
    inputContainer:{
     flexDirection:'row',
     justifyContent:'space-between',
     backgroundColor:COLORS.lightGray1,
     borderRadius:10,
    paddingRight:10,
    alignItems:'center'
    },
    datePicker:{
        backgroundColor:COLORS.lightGray1,
     borderRadius:10,
        paddingRight:10,
        width:'100%'
    },
    dateIcon: {
        position: 'absolute',
      },

})

export default styles;