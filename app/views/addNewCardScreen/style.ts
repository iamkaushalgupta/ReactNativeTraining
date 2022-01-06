import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingVertical:10,
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
    icon:{
        tintColor:COLORS.gray2,
        resizeMode:'contain',
            width:35,
            height:35,
    },
    iconProfile:{
        resizeMode:'contain',
            width:40,
            height:40,
    },
    cardStyleContainer:{
        backgroundColor:COLORS.primary,
        height:'30%',
        width:"100%",
        borderRadius:10,
        justifyContent:'space-between',
        padding: 10,
    },
    cardIcon:{
        alignSelf:'flex-end',
        resizeMode:'contain',
        height:40,
        width:40,
        tintColor:COLORS.black,
        
    },
    innerCardContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    cardLabelText:{
        color:COLORS.white,
        fontWeight:'800',
        fontSize:16,
    },

    cardInputContainer:{
        flex:1
    },
    smallContainer:{
        flex:0.48
    },
    innerCardInputContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between'
    },
    addButton:{
        backgroundColor:COLORS.primary,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:5,
        
        // position:'absolute'
        
    },
    addText:{
        fontSize:18,
        color:COLORS.white
        
    }


})
export default styles