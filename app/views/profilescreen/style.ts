import React from "react";
import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constants/theme";
import {
    COLORS,

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
            flexDirection:'row',
            backgroundColor:selectedTheme.backgroundColor2,
            padding:10,
            borderRadius:10,
            marginVertical:10,
        },
        profileImage:{
            
            height:SIZES.height*0.085,
            width:SIZES.width*0.145,
            alignItems:'center',
            justifyContent:'flex-end'
        },
        cameraIcon:{
            height:12,
            width:12,
        },
        profileButton:{
            backgroundColor:COLORS.gray30,
            borderRadius:180,
            padding:2
        },
        cameraIconContainer:{
            backgroundColor:COLORS.primary,
            padding:5,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:180,
            marginTop:-SIZES.height*0.02,
            alignSelf:'center'
            
        },
        midInnerContainer:{
            flex:1,
            paddingLeft:10,
           
        },
        TitleText:{
            ...FONTS.h2,
            color:COLORS.white
        },
        subTitleText:{
            ...FONTS.h3,
            color:COLORS.gray20
        },
        progressBar:{
            height:10,
            width:'100%',
            borderRadius:20,
            marginTop:10,
            backgroundColor:COLORS.white
        },
        progressContainer:{
            flexDirection:'row',
            justifyContent:'space-between'
        },
        becomeMemberButton:{
            backgroundColor:COLORS.primary,
            paddingVertical:5,
            paddingHorizontal:15,
            borderRadius:15,
            alignSelf:'flex-start',
            marginVertical:10,
        },
        becomeMemberText:{
            ...FONTS.h3,
            fontWeight:'800',
            color:COLORS.white
        },
        bottomContainer:{
            marginVertical:10,
            paddingHorizontal:10,
            borderWidth:1,
            borderRadius:10,
            borderColor:COLORS.gray40

        },

        detailIcon:{
            tintColor:COLORS.primary,
            height:25,
            width:25,
            resizeMode:'contain'
        },
        detailIconContainer:{
            backgroundColor:selectedTheme.backgroundColor3,
            
            padding:8,
            borderRadius:180,
            alignSelf:'flex-start'
        },
        detailItemContainer:{
            paddingVertical:10,
            borderColor:COLORS.gray40,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
            
        },
        detailInnerContainer:{
            flexDirection:'row',
            alignItems:'center',
        },
        detailTextContainer:{
            paddingLeft:10,
        },
        right_arrow:{
            height: 20,
            width: 20,
            tintColor:COLORS.gray40
        },

        labelText:{
            ...FONTS.h3,
            color:selectedTheme.textColor6
        },
        valueText:{
            ...FONTS.h3,
            color:selectedTheme.name=='dark'?COLORS.gray10:COLORS.gray85,
            
        }
        
        
    }
)

export default styles;