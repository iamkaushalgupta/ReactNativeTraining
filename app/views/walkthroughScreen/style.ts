import { StyleSheet } from "react-native";
import {
    COLORS,

} from '../../constants'
import { FONTS,SIZES } from "../../constants/theme";

const styles =(selectedTheme:any)=> StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:selectedTheme.backgroundColor1,
    },
    renderContainer:{
        flex:1,
        justifyContent:'flex-end'
    },
    
    renderImage:{
        resizeMode:'contain',
        width:SIZES.width,
        height:SIZES.height*0.5,

       
        
    },
    nextButton:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20,
        alignSelf:'flex-end',
        backgroundColor:COLORS.primary,
        padding:15,
        paddingRight:25,
        paddingHorizontal:20,
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30,
    },
    buttonText:{
        ...FONTS.h2,
        color:COLORS.white
    },
    titleText:{
        color:selectedTheme.textColor,
        ...FONTS.largeTitle,
        width:SIZES.width*0.9,
        paddingLeft:20,
        
    },
    subtitleText:{
        color:selectedTheme.textColor6,
        ...FONTS.h3,
        width:SIZES.width*0.95,
        paddingLeft:20,
    }
   
})

export default styles;