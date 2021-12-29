import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles=(o:any)=>StyleSheet.create({

    container:{
        marginHorizontal:o.width*0.03,
        flex:1,
        marginVertical:o.height*0.007
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    
    icon:{
        tintColor:COLORS.gray2,
        resizeMode:'contain',
            width:40,
            height:40,
    },
    backButton:{
        borderColor:COLORS.gray2,
        borderWidth:2,
        borderRadius:10,
    },
    heading:{
        fontSize:25 ,
        fontWeight:'900',
        color:COLORS.black    
    },
    settingIcon:{
        tintColor:COLORS.primary,
        resizeMode:'contain',
            width:o.width*0.05,
            height:o.height*0.03,
            marginHorizontal:20,
    },
    settingNameText:{
        fontSize:18,
        
        fontWeight:'600',
        color:COLORS.black
    },
    renderContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"rgb(235,235,235)",
        paddingVertical: 10,
        justifyContent:'space-between'
    },
    upperRenderContainer:{
        marginVertical:10,
      
    },
    innerRenderContainer:{
        flexDirection:'row'
    },
    flatList:{
        marginTop:20
    }
})

export default styles;