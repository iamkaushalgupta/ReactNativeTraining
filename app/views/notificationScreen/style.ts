import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constants/theme";

const styles =(selectedTheme:any)=>StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:selectedTheme.backgroundColor1
       
    },
    upperContainer:{
        flex:1,
        resizeMode:'contain',
        padding:10,
    },
    backgroundImage:{
        height:SIZES.height*0.28,
        width:SIZES.width*1.1
        
    },
    headText:{
        ...FONTS.h1,
        color:selectedTheme.textColor,
        paddingTop:20,
    },
    notificationContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:selectedTheme.lineDivider,
        paddingVertical:10,
    },
    avtarImage:{
        height:SIZES.height*0.1,
        width:SIZES.width*0.16,
        borderRadius:90,
    },
    labelText:{
        ...FONTS.h4,
        color:selectedTheme.textColor3
    },
    labelText2:{
        ...FONTS.h4,
        color:selectedTheme.textColor3,
        paddingLeft:10,
    },
    labelText3:{
        ...FONTS.h4,
        color:selectedTheme.textColor3,
        paddingVertical:10,
    },
    titleText:{
        ...FONTS.h3,
        color:selectedTheme.textColor
    },
    notificationLeftContainer:{
        flex:1,
        paddingLeft:10,
    },
    titleContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5,
    }
})
export default styles;