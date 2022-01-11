import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
        padding:10,
    },
    renderContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
    },
    icon:{
        resizeMode:'contain',
        height:25,
        width:25,
        tintColor:COLORS.white
    },
    iconText:{
        color:COLORS.white,
        fontSize:18,
        fontWeight:'700',
        paddingHorizontal:10,
    },
    lineContainer:{
        height:2,
        width:'100%',
        backgroundColor:COLORS.white,
        marginVertical:10,
    },
    closeIcon:{
        height:25,
        width:25,
        resizeMode:'contain',
        tintColor:COLORS.white
    },
    profileIcon:{
        height:50,
        width:50,
        borderRadius:10,
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:20,
    },
    nameText:{
        color:COLORS.white,
        fontSize:18,
        fontWeight:'600',
        paddingHorizontal:10,
        
    },
    labelText:{
        color:COLORS.white2,
        fontSize:16,
        paddingHorizontal:10,
        
    }
})
export default styles;