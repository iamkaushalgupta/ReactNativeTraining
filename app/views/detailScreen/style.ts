import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles=StyleSheet.create({

        container:{
            flex:1,
            paddingHorizontal:10
        },
        upperContainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'space-between',
            paddingVertical:10,
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
        FoodContainer:{
            width:'100%',
            borderRadius:10,
           marginRight:10,
           backgroundColor:COLORS.lightGray1,
            paddingBottom:10,
        },foodRenderUpperContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
        },caloriesContainer:{
            flexDirection:'row',
            alignItems:'center'
        },caloriesIcon:{
            resizeMode:'contain',
                width:40,
                height:40,
                alignSelf:'center',
                marginTop:10,
               
        },loveIcon:{
            resizeMode:'contain',
                width:25,
                height:25,
                alignSelf:'center',
                tintColor:COLORS.red,
                marginRight:5,
        },FoodIcon:{
            resizeMode:'contain',
                width:180,
                height:180,
                alignSelf:'center'
            },

        descriptionText:{
            textAlign:'justify',
            color:COLORS.darkGray,
            fontWeight:'800'
        },
        foodNameText:{
            fontWeight:'900',
            color:COLORS.black,
            fontSize:30,
            paddingVertical:10,
        },
        midContainer:{
            flexDirection:'row',
            marginTop:20
        },
        starIcon:{
            resizeMode:'contain',
            height:20,
            width:20,
            tintColor:COLORS.white
        },
        ratingContainer:{
            padding:10,
            flexDirection:'row',
            backgroundColor:COLORS.primary,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
        },
        normalIcon:{
            resizeMode:'contain',
            height:20,
            width:20,
            tintColor:COLORS.black
        },
        normalContainer:{
            flexDirection:'row',
            
            alignItems:'center',
            justifyContent:'center',
            marginHorizontal:10,

        },
        starText:{
            color:COLORS.white,
            fontSize:16,
            paddingLeft:8,
            fontWeight:'600'
        },
        normalText:{
            color:COLORS.black,
            fontSize:16,
            paddingLeft:8,
            fontWeight:'600'
        },
        sizeContainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:20,    
        },
        sizeRenderContainer:{
            padding:15,
            borderRadius:10,
            borderWidth:1,
            marginHorizontal:10,

            borderColor:COLORS.gray2
        },
        sizeText:{
            color:COLORS.black,
            fontWeight:'800',
            fontSize:18,
        },
        itemText:{
            fontSize:18,
            fontWeight:'600',
           
        },
        resturantContainer:{
            borderTopWidth:2,
            borderBottomWidth:2,
            borderColor:COLORS.lightGray1,
            flexDirection:'row',
            alignItems:'center',
            paddingVertical:10,
            marginTop:20,
        },
        companyIcon:{
            resizeMode:'contain',
            height:40,
            width:40,
        
        },

        goldenStarIcon:{
            tintColor:COLORS.golden,
            resizeMode:'contain',
            height:25,
            width:25,
            marginHorizontal:2
        },
        companyNameContainer:{
            marginHorizontal:10,
        },
        buyContainer:{
            flexDirection:'row',
            alignItems:'center',
            marginVertical:10,
           
        },
        
        increasedecreaseContainer:{
            backgroundColor:COLORS.lightGray1,
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
        companyText:{
            color:COLORS.black,
            fontWeight:'600',
            fontSize:15
        },
        buyButton:{
            marginLeft:10,
            backgroundColor:COLORS.primary,
            flex:1,
            padding:10,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row'
        },
        buyNowText:{
            color:COLORS.white,
            fontWeight:'800',
            fontSize:18,
        }



})

export default styles