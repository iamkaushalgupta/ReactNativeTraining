import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles=(o:any)=>StyleSheet.create({
    container:{
        marginHorizontal:o.width*0.03,
        flex:1,
        marginVertical:o.height*0.007
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    
    icon:{
        tintColor:COLORS.gray2,
        resizeMode:'contain',
            width:40,
            height:40,
    },
    backButton:{
        borderColor:COLORS.gray2,
        borderWidth:2,
        borderRadius:10,
    },
    heading:{
        fontSize:25 ,
        fontWeight:'900',
        color:COLORS.black    
    },
    sendButton:{
        backgroundColor:COLORS.primary,
        width:'100%',
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
    },
   

})
export default styles;