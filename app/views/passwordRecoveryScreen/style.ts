import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles=(o:any)=>StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:o.width*0.05
    },
    mainheading:{
        color:COLORS.black,
        fontSize:25,
        fontWeight:'900',
        textAlign:'center'
    },
    labelText:{
        textAlign:'center',
        fontSize:18,
        paddingVertical:5,
    },
    sendButton:{
        backgroundColor:COLORS.primary,
        width:'100%',
        // height:'100%',
        // flex:1,
        justifyContent:'center',
        alignSelf:'flex-end',
        borderRadius:10,
        marginVertical:10,
    },
    sendButtonText:{
        color:COLORS.white,
        fontSize:20,
        textAlign:'center',
        paddingVertical:10,    
    },
    sendButtonContainer:{
        justifyContent:'flex-end',
        flex:1
    }

})

export default styles;