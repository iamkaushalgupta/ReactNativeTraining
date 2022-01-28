import React from "react";
import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/theme";
import {
    constants,
    theme,
    COLORS,
    darkTheme,
    lightTheme,
    images,
    icons,
    dummyData,

} from '../../constants';

const styles=(selectedTheme:any)=>StyleSheet.create({
        container:{
            flex:1,
            padding:10,
            backgroundColor:selectedTheme.backgroundColor1
        },
        headerContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        sunIcon:{
            height:30,
            width:30,
            resizeMode:'contain'
        },
        headerText:{
            ...FONTS.h1,
            color:selectedTheme.textColor
        },
        midContainer:{
            
        },
        
    }
)

export default styles;