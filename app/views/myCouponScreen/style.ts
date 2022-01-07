import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
    },
    
    switchButtonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
    },
    switchButton:{
        width:'48%',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:10,
    },
    switchButtonText:{
        fontSize:16,
        fontWeight:'700'
    },
    contentContainer:{
        flex:1,
    },
    
    iconContainer:{
        backgroundColor:COLORS.white,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        height:55,
        width:60
    },

    renderContainer:{
        flex:1,
        flexDirection:'row',
        backgroundColor:COLORS.lightGray1,
        marginVertical:10,  
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:10,
        borderRadius:10,

    },
    companyImage:{
        height:80,
        width:80,
        resizeMode:'contain'
    },
    nameText:{
        color:COLORS.gray,
        fontSize:18
    },
    discountText:{
        color:COLORS.black,
        fontWeight:'bold',
        fontSize:25,
        
    },
    validText:{
        color:COLORS.gray,
        fontSize:18
    }
    
})
export default styles;