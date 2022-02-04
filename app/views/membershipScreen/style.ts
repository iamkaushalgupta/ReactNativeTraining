import { StyleSheet } from "react-native";
import {
    COLORS,

} from '../../constants'
import { FONTS, SIZES } from "../../constants/theme";

const styles=(selectedTheme:any)=>StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary
        
    },
    upperContainer:{
        flex:0.3,
        padding:10,
    },
    innerUpperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10

    },
    bottomContainer:{
        flex:0.7    ,
        backgroundColor:selectedTheme.backgroundColor1,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        padding:10,
    },
    headerLeftIcon:{
        height:40,
        width:40,
        tintColor:selectedTheme.tintColor,
        resizeMode:'contain'
    },
    headerRightIcon:{
        height:30,
        width:30,
   
    },
    headingText:{
        ...FONTS.h2,
        color:COLORS.white,
        
    },
    headText:{
        ...FONTS.largeTitle,
        color:COLORS.white,
        paddingVertical:20,
    },
    titleText:{
        ...FONTS.h2,
        color:selectedTheme.textColor
    },
    plansContainer:{
        height:SIZES.height*0.25,
        padding:10,
        borderWidth:2,
        width:96/2+'%',
        margin:'1%',
        borderRadius:10,
        borderColor:selectedTheme.lineDivider
    },
    plansUpperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    plansMidContainer:{
        flexDirection:'row',
        alignItems:'flex-end',
        paddingVertical:10,
    },
    priceText:{
        ...FONTS.h1,
        color:selectedTheme.textColor
    },
    monthText:{
        ...FONTS.h3,
        color:selectedTheme.textColor3
    },
    labelText:{
        ...FONTS.h3,
        color:selectedTheme.textColor3
    },
    checkedIcon:{
        height:30,
        width:30,
        resizeMode:'contain'
    },
    checkedIconContainer:{
        height:40,
        width:40,
        padding:5,
        borderRadius:90,
        borderWidth:2,
        borderColor:selectedTheme.lineDivider,
        alignItems:'center',
        justifyContent:'center'
    },
    bestOfferContainer:{
        backgroundColor:COLORS.primary2,
        paddingHorizontal:10,
        paddingVertical:5,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        marginRight:-10,
    },
    bestofferText:{
        color:COLORS.white,
        ...FONTS.h3
    }

})

export default styles;