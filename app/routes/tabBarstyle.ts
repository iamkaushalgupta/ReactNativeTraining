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
}from '../constants'
import { FONTS } from "../constants/theme";

const styles = StyleSheet.create({
    tabBarStyle:{
        backgroundColor:selectedTheme.backgroundColor2,
        height:'12%',
    },
    tabBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: '100%',
        borderRadius: 20,
        width:'100%'
    },
    tabBarIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        tintColor:COLORS.white
    },
    tabBarIconText: {
       ...FONTS.h3,
       paddingTop:5,
       color:COLORS.white
    }


})

export default styles;