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

} from '../../constants';
import { SIZES } from "../../constants/theme";
import { FONTS } from "../../constants/theme";


const styles=(selectedTheme:any)=> StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:selectedTheme.backgroundColor1,
       
    },
    searchContainer:{
        
        flexDirection:'row',
        alignItems:'center',
    borderRadius: 5,
    borderColor: selectedTheme.backgroundColor1,
    borderBottomWidth: 0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 3,
    },
    searchIcon:{
        resizeMode:'contain',
        height:25,
        width:25,
        marginHorizontal:10,
        tintColor:COLORS.gray40
    },
    searchInput:{
        ...FONTS.h3,
        color:COLORS.gray40,
        width:'100%',
    },
    titleText:{
        ...FONTS.h2,
        color:selectedTheme.textColor,
        paddingVertical:10,
    
    },
    render1Container:{
        backgroundColor:selectedTheme.backgroundColor8,
        padding:10,
        paddingHorizontal:15,
        borderRadius:10,
    },
    render1LabelText:{
        ...FONTS.h3,
        color:selectedTheme.textColor3
    },
    itemSeprator:{
        margin:5
    },
    render2Container:{
        flex:1,
    },
    render2TitleText:{
        ...FONTS.h2,
        color:COLORS.white,
        paddingBottom:10,
        
    },
    render2MainImage:{
        flex:1,
        margin:5,
        height:SIZES.height*0.2,
        justifyContent:'flex-end',
        padding:10
    }

})
export default styles;