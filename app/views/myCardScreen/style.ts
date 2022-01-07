import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
    },


    renderContainer:{
        flexDirection:'row',
        borderRadius:10,
        borderColor:COLORS.lightGray1,
        borderWidth:2,
        alignItems:'center',
        marginVertical:5,
        padding:10,
        justifyContent:'space-between'
    },
    innerRenderContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    payIconContainer:{
        backgroundColor:COLORS.white,
      
        borderRadius:10,
        borderColor:COLORS.lightGray1,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        height:70,width:80
    },
    payIcon:{
        height:60,width:60,
        resizeMode:'contain'
    },
    cardText:{
        fontSize:18,
        fontWeight:'600',
        color:COLORS.black,
        paddingLeft:10,
    },
    
    addButton:{
        backgroundColor:COLORS.primary,
        alignItems:'center',
        paddingVertical:10,
        marginVertical:10,
        borderRadius:10,    
        
    },
    addText:{
        color:COLORS.white,
        fontSize:18,
        fontWeight:'700'
    },
    sepratorTitleText:{
        fontSize:18,
        fontWeight:'600',
        color:COLORS.black,
        paddingVertical:5,

    },
    dotContainer:{
        borderWidth:2,
        borderRadius:180,
    alignItems:'center',
    justifyContent:'center',
        height:20,
        width:20,

    
    },
    dot:{
        height:10,
        width:10,
        resizeMode:'contain',
        tintColor:COLORS.primary
    }
})

export default styles;