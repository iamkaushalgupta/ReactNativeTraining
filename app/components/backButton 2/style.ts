import { StyleSheet } from "react-native";
import { COLORS, selectedTheme } from "../../constants";
const styles =StyleSheet.create({
    container:{
        alignSelf:'flex-start',
        backgroundColor:COLORS.white,
        padding:10,
        borderRadius:180,
        alignItems:'center',
        justifyContent:'center',
        
    },
    backImage:{
        resizeMode:'contain',
        height:30,
        width:30,
        tintColor:COLORS.black
    }
})
export default styles;