import { StyleSheet } from "react-native";
import {
    constants,
    theme,
    COLORS,
    darkTheme,
    lightTheme,
    selectedTheme,
    images,
    icons,
    dummyData,
} from '../../constants'
import { FONTS } from "../../constants/theme";

const styles=(selectedTheme:any)=>StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:selectedTheme.backgroundColor1,
   
    },
    upperContainer:{
         flex:0.3,
    },
    heading:{
        ...FONTS.h1 ,
        textAlign:'center',
        color:selectedTheme.textColor,
        paddingTop:20,
    },


    inputField:{
        borderBottomWidth:1,
        borderColor:COLORS.gray40,
        marginBottom:5,
    },
    passwordField:{
        marginBottom:5,
        width:'92%'
    },
    labelText:{
        ...FONTS.h3,
        color:COLORS.gray40,
        paddingVertical:5,
    },
    passwordContainer:{
        borderBottomWidth:1,
        borderColor:COLORS.gray40,
        marginBottom:5,
        flexDirection:'row',
        alignItems:'center'
    },
    wrapperContainer:{
        paddingHorizontal:30,
        flex:0.7
    },
    button:{
        marginTop:20,
        padding:10,
        borderRadius:30,
        backgroundColor:COLORS.primary,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:COLORS.white,
        ...FONTS.h3
    },
    icon:{
        resizeMode:'contain',
        height:25,
        width:25,
        tintColor:COLORS.gray40
    },
    labelText2:{
        ...FONTS.h3,
        color:COLORS.gray40,
        textAlign:'center',
        paddingVertical:5,
    },
    socialMediaButtonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    socialMediaButton:{
        padding:10,
        width:'45%',
        borderRadius:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.gray10
    },
    socialMediaIcon:{
        height:30,
        width:30,
        resizeMode:'contain'
    },
    socialMediaText:{
        ...FONTS.h3,
        color:COLORS.gray90,
        paddingLeft:5,
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    navigateButtonText:{
        color:COLORS.primary,
        ...FONTS.h3
    }
})
export default styles;