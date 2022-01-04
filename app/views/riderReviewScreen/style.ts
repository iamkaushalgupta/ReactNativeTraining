import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,

    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingVertical:10,
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
    icon:{
        tintColor:COLORS.gray2,
        resizeMode:'contain',
            width:35,
            height:35,
    },
    iconProfile:{
        
        resizeMode:'contain',
            width:40,
            height:40,
    },
    midContainer:{
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        flex:0.5
      
    },
    riderImage:{
        height:120,
        width:150,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    
    },
    nameText:{
        fontSize:25,
        color:COLORS.black,
        fontWeight:'900',
        
    },
    deliveryPersonText:{
        fontSize:18,
        color:COLORS.black,
        fontWeight:'700'
    },
    orderStatusContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    orderStatusText:{
        color:COLORS.green,
        fontSize:18,
        fontWeight:'800',
        paddingLeft:5,
    },
    orderStatusIcon:{
        tintColor:COLORS.green,
        height:15,
        width:15,
        marginTop:2,
    },
    reviewText:{
        paddingTop:20,
        color:COLORS.black,
        fontWeight:'800',
        fontSize:18
    },
    goldenStarIcon:{
        tintColor:COLORS.orange,
        resizeMode:'contain',
        height:30,
        width:30,
        marginHorizontal:5
    },
    grayStarIcon:{
        tintColor:COLORS.lightOrange3,
        resizeMode:'contain',
        height:30,
        width:30,
        marginHorizontal:5
    },

    ratingContainer:{
        flexDirection:'row',
        marginVertical:10
    },
    tipRenderContainer:{
        
        borderRadius:10,
        borderWidth:1,
        marginRight:15,
        borderColor:COLORS.gray2,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:70
    },
    itemText:{
        fontSize:18,
        fontWeight:'600',
       
    },
    addTipText:{
        color:COLORS.black,
        fontWeight:'600',
        paddingVertical:10,
        fontSize:18
    },
    textInput:{
        backgroundColor:COLORS.lightGray1,
        textAlignVertical:'top',
        marginVertical:10,
        height:100,
    },
    Button:{
        backgroundColor:COLORS.primary,
        width:'100%',
        borderRadius:10,
    },
    ButtonText:{
        color:COLORS.white,
        fontSize:20,
        textAlign:'center',
        padding:5   
    },
    ButtonContainer:{
    
    }
})

export default styles;