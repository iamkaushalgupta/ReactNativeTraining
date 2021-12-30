import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles=(o:any)=>StyleSheet.create(
    {
        container:{
            marginHorizontal:o.width*0.03,
            flex:1,
            marginVertical:o.height*0.007
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
        iconProfile:{
            
            resizeMode:'contain',
                width:40,
                height:40,
        },
        searchContainerIcon:{
            tintColor:COLORS.black,
            resizeMode:'contain',
                width:25,
                height:25,
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

        searchContainer:{
            backgroundColor:COLORS.lightGray1,
            borderRadius:10,
            justifyContent:'space-between',
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:10,
            marginVertical:10,
          
        },
        innerSearchContainer:{
            flexDirection:'row',
            flex:1,
            alignItems:'center',
        },

        searchInput:{
            
            flex:1  
        },
        colorText:{
            color:COLORS.primary,
            fontWeight:'700',
            fontSize:20,
            marginVertical:5,
        },
        addressContainer:{
            flexDirection:'row',
            alignItems:'center'    
            
        },
        primaryColorIcon:{
            resizeMode:'contain',
                width:20,
                height:18,
                alignSelf:'flex-end',
                marginTop:5
        },
        labelText:{
            fontSize:18,
            color:COLORS.black,
            fontWeight:'900',
            marginVertical:5,
            alignSelf:'center'
        },
        smallFoodIcon:{
            resizeMode:'contain',
                width:40,
                height:40,
                marginTop:10,
        },
        smallFoodContainer:{
            
            flexDirection:'row',
            height:60,
            width:160,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
           marginRight:10,
        },
        FoodContainer:{
            width:230,
            borderRadius:10,
           marginRight:10,
           backgroundColor:COLORS.lightGray1,
            paddingBottom:10,
        },
        foodRenderUpperContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
        },

        whiteLabelText:{
            fontSize:18,
            fontWeight:'900',
            
        },
        flatListContainer:{
            marginVertical:20,
            
        },
        midContainer:{
            flexDirection:'row',
            justifyContent:'space-between'
        },
        simpleText:{
            textAlign:'center',
            alignSelf:'center'
        },
        FoodIcon:{
            resizeMode:'contain',
                width:140,
                height:140,
                alignSelf:'center'
            },

        loveIcon:{
            resizeMode:'contain',
                width:25,
                height:25,
                alignSelf:'center',
                tintColor:COLORS.red,
                marginRight:5,
        },
        priceText:{
            alignSelf:'center',
            textAlign:'center',
            color:COLORS.black,
            fontSize:22,
            fontWeight:'800'
        ,},
        caloriesIcon:{
            resizeMode:'contain',
                width:40,
                height:40,
                alignSelf:'center',
                marginTop:10,
               
        },
        caloriesContainer:{
            flexDirection:'row',
            alignItems:'center'
        },
        modalContainer:{
            flex:1
        }
    }
)

export default styles;