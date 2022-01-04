import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingVertical:10,
        flex:0.07,
        // backgroundColor:'red'
    },
    
    icon:{
        tintColor:COLORS.gray2,
        resizeMode:'contain',
            width:35,
            height:35,
    },
    
    backButton:{
        borderColor:COLORS.gray2,
        borderWidth:2,
        borderRadius:10,
    },heading:{
        fontSize:25 ,
        fontWeight:'900',
        color:COLORS.black    
    },
    cartIcon:{
        resizeMode:'contain',
        height:25,
        width:25,
        tintColor:COLORS.black
    },
    cartButton:{
        backgroundColor:COLORS.pink,
        padding:10,
        borderRadius:10
    },
    increasedecreaseContainer:{
        backgroundColor:COLORS.white,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        width:'30%',
        borderRadius:10,
    },
    increasedecreaseIcon:{
        resizeMode:'contain',
        height:20,
        width:20,
        tintColor:COLORS.primary   
    },
    numberText:{
       
        fontSize:18,
        color:COLORS.black
    },
    renderContainer:{
        flexDirection:'row',
        backgroundColor:COLORS.lightGray1,
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        paddingRight:10,
        borderRadius:10,

    },
    foodIcon:{
        height:80,
        width:100,
        resizeMode:'contain',
        marginTop:15,
    },
    nameText:{
        fontSize:20,
        color:COLORS.black,
        fontWeight:'600'
    },
    renderInnerContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    priceText:{
        color:COLORS.primary,
        fontWeight:'600',
        fontSize:18,
    },
    modalContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingHorizontal:10,
        paddingTop:20,
  
    },
    modal:{
        flex:0.35,
        marginHorizontal:-10,
    },
    
    modalInnerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:15,
    },
    priceLabelText:{
        fontSize:16,
        color:COLORS.black,
        fontWeight:'600'
    },
    priceValueText:{
        fontWeight:'900',
        color:COLORS.black,
        fontSize:16,
    },
    modalSecondInnerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:1,
        borderColor:COLORS.lightGray1,
        paddingTop:20,
        
    
    },
    totalText:{
        color:COLORS.black,
        fontSize:22,
        fontWeight:'600'
    },

    totalValueText:{
        color:COLORS.black,
        fontSize:22,
        fontWeight:'600'
    },
    Button:{
        backgroundColor:COLORS.primary,
        width:'100%',
        justifyContent:'center',
        borderRadius:10,
        marginVertical:10,
    },
    ButtonText:{
        color:COLORS.white,
        fontSize:20,
        textAlign:'center',
        paddingVertical:5,    
    },
    ButtonContainer:{
        
    },



})

export  default styles;