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
import { FONTS,SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:selectedTheme.backgroundColor1,
    },
    renderContainer:{
        flex:1,
  
    },
    renderImage:{
        resizeMode:'contain',
        width:SIZES.width,
        height:SIZES.height*0.5
    },
    nextButton:{

        alignSelf:'flex-end',
        backgroundColor:COLORS.primary,
        padding:10,
        paddingHorizontal:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
    },
    buttonText:{
        ...FONTS.h2,
        color:COLORS.white
    },
    titleText:{
        color:selectedTheme.textColor,
        ...FONTS.largeTitle,
        width:SIZES.width*0.9,
        paddingHorizontal:20,
    },
    subtitleText:{
        color:selectedTheme.textColor,
        ...FONTS.h3,
        width:SIZES.width*0.9,
        paddingHorizontal:20,
    }
   
})

export default styles;