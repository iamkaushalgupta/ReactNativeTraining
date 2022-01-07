import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";


const styles=(o:any)=>StyleSheet.create({

    container:{
        marginHorizontal:o.width*0.03,
        flex:1,
        marginVertical:o.height*0.007
    },
    
    renderContainer:{
        backgroundColor:"rgb(235,235,235)",
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:COLORS.gray2,
        paddingVertical:20,
    },
    
    settingIcon:{
        tintColor:COLORS.primary,
        resizeMode:'contain',
            width:o.width*0.05,
            height:o.height*0.03,
            marginHorizontal:20,
    },
    
    flatList:{
        marginVertical:10,
    },
    settingNameText:{
        fontSize:18,
        
        fontWeight:'600',
        color:COLORS.black
    }       

})

export default styles;