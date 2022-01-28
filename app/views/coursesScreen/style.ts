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
import { StyleSheet } from 'react-native';
import { FONTS, SIZES } from '../../constants/theme';

const styles = (selectedTheme:any)=>StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:selectedTheme.backgroundColor1
    },
    backgroundImage:{
        paddingLeft:10,
        flex:1/3,
    
    },
    innerUpperContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
    },
    titleText:{
        ...FONTS.h1,
        paddingLeft:20,
        color:COLORS.white
    },
    mobileImage:{
        height:"100%",
        width:'60%',
        resizeMode:'contain',
    },
    midContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
    },
    labelText:{
        ...FONTS.h3,
        color:selectedTheme.textColor3
    },
    filterButton:{
        backgroundColor:COLORS.primary,
        padding:10,
        borderRadius:10,
    },
    filterImage:{
        tintColor:selectedTheme.tintColor,
        height:20,
        width:20,
        resizeMode:'contain'
    },
    renderContainer3:{
        flexDirection:'row'
    },
    render3MainImage:{
        width:SIZES.width*0.35,
        padding:10
        
    },
    render3FavouriteButton:{
        alignSelf:'flex-end',
        padding:5,
        backgroundColor:COLORS.white,
        borderRadius:5
    },
    heartIcon:{
        height:20,
        width:20,
        resizeMode:'contain'
    },
    render3TitleText:{
        paddingHorizontal:10,
        width:SIZES.width*0.5,
        ...FONTS.h3,
        color:selectedTheme.textColor
    },
    render3InnerContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    render3InstructorText:{
        paddingLeft:10,
        ...FONTS.h4,
        color:selectedTheme.textColor3
    },
    render3DurationContainer:{
        flexDirection:'row',
        paddingLeft:5,
        alignItems:'center'
    },
    render3ClockIcon:{
        height:18,
        width:18,
        resizeMode:'contain',
        tintColor:COLORS.gray40
    },
    render3DurationText:{
        paddingLeft:5,
        ...FONTS.h4,
        color:selectedTheme.textColor3
    },
    render3InnerLowerContainer:{
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center'
    },
    render3RatingIcon:{
        height:20,
        width:20,
        resizeMode:'contain'
    },
    render3RatingContainer:{
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center'
    },
    render3ItemSeprator:{
        marginVertical:10
    },
    render3PriceText:{
        ...FONTS.h2,
        color:COLORS.primary
    },
    render3RatingText:{
        ...FONTS.h4,
        paddingLeft:5,
        color:selectedTheme.textColor
    }
})
export default styles;