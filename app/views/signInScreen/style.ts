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
    }
    ,
    labelText:{
        textAlign:'center',
        fontSize:18,
        paddingVertical:5,
    },
    signinButton:{
        backgroundColor:COLORS.primary,
        width:'100%',
        
        justifyContent:'center',
        borderRadius:10,
        marginVertical:10,
    },
    signinButtonText:{
        color:COLORS.white,
        fontSize:20,
        textAlign:'center',
        paddingVertical:10,    
    },
    labelForgetText:{
        alignSelf:'flex-end',
        fontSize:15,
        color:COLORS.gray,
        marginVertical:5,
    },
    colorText:{
        color:COLORS.primary,
        fontSize:18,
        fontWeight:'600',
        padding:5,
    },
    bottomContainer:{
        justifyContent:'flex-end'
    }
})
export default styles