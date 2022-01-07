import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingVertical:10,
    },
    
    firstButton:{
        borderColor:COLORS.gray2,
    
        borderRadius:10,
    },
    heading:{
        fontSize:22 ,
        fontWeight:'700',
        color:COLORS.black    
    },
    icon:{
        tintColor:COLORS.gray2,
        resizeMode:'contain',
            width:35,
            height:35,
    },
    secondImage:{
        resizeMode:'contain',
            width:40,
            height:40,
    },
    
})

export default styles;