import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constants/theme";
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

} from '../../constants';

const styles = StyleSheet.create({
     container:{
        padding:10,
         flex:1,
         backgroundColor:selectedTheme.backgroundColor1
     },
     headText:{
         ...FONTS.h1,
         paddingVertical:15,
         color:selectedTheme.textColor
     },
     renderIcon:{
         height:30,
         width:30,
         resizeMode:'contain',
        //  tintColor:
     },
     renderContainer:{   
        paddingTop:10,
        margin:'1%',
        height:120,
        width: 94/3+'%',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:,
        borderRadius:20,
        borderWidth:2,
        borderColor:selectedTheme.borderColor1
     },
     labelText:{
         ...FONTS.h3,
        textAlign:'center',
        // color:selectedTheme.textColor3,
        paddingVertical:10
     },
     button:{
         alignSelf:'center',
         width:'100%',
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:COLORS.primary,
         padding:10,
         borderRadius:20,
     },
     buttonText:{
         ...FONTS.h3,
         color:COLORS.white
     }
     
});

export default styles;