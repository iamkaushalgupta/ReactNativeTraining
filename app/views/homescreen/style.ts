import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";


const styles = (o: any) => StyleSheet.create(
    {
        container: {
            paddingHorizontal: 10,
            flex: 1,
            marginVertical: o.height * 0.007,

        },
        searchContainerIcon: {
            tintColor: COLORS.black,
            resizeMode: 'contain',
            width: 25,
            height: 25,
        },

        backButton: {
            borderColor: COLORS.gray2,
            borderWidth: 2,
            borderRadius: 10,
        },
        searchContainer: {
            backgroundColor: COLORS.lightGray1,
            borderRadius: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginVertical: 10,

        },
        innerSearchContainer: {
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
        },

        searchInput: {

            flex: 1
        },
        colorText: {
            color: COLORS.primary,
            fontWeight: '700',
            fontSize: 18,
            marginVertical: 5,
        },
        addressContainer: {
            flexDirection: 'row',
            alignItems: 'center'

        },
        primaryColorIcon: {
            resizeMode: 'contain',
            width: 20,
            height: 18,
            alignSelf: 'flex-end',
            marginTop: 5
        },
        labelText: {
            fontSize: 18,
            color: COLORS.black,
            fontWeight: '700',
            marginVertical: 5,
            alignSelf: 'center'
        },
        smallFoodIcon: {
            resizeMode: 'contain',
            width: 40,
            height: 40,
            marginTop: 10,
        },
        smallFoodContainer: {

            flexDirection: 'row',
            height: 60,
            width: 160,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginRight: 10,
        },
        FoodContainer: {
            width: 230,
            borderRadius: 10,
            marginRight: 10,
            backgroundColor: COLORS.lightGray1,
            paddingBottom: 10,
        },
        foodRenderUpperContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        whiteLabelText: {
            fontSize: 18,
            fontWeight: '800',

        },
        flatListContainer: {
            marginVertical: 20,

        },
        midContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        simpleText: {
            textAlign: 'center',
            alignSelf: 'center',
            color: COLORS.gray

        },
        FoodIcon: {
            resizeMode: 'contain',
            width: 140,
            height: 140,
            alignSelf: 'center'
        },

        loveIcon: {
            resizeMode: 'contain',
            width: 25,
            height: 25,
            alignSelf: 'center',
        
            marginRight: 5,
        },
        priceText: {
            alignSelf: 'center',
            textAlign: 'center',
            color: COLORS.black,
            fontSize: 22,
            fontWeight: '800'
            ,
        },
        caloriesIcon: {
            resizeMode: 'contain',
            width: 40,
            height: 40,
            alignSelf: 'center',
            marginTop: 10,

        },
        caloriesContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        modalContainer: {
            flex: 1,
            backgroundColor: COLORS.transparentBlack7
        },
        modalUpper: {
            flex: 0.1,

        },
        modalLower: {
            flex: 0.9,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 20,
            paddingTop: 20,

        },
        closeIcon: {
            resizeMode: 'contain',
            width: 20,
            height: 20,
            tintColor: COLORS.gray2

        },
        closeButton: {
            borderColor: COLORS.gray2,
            borderWidth: 2,
            padding: 8,
            borderRadius: 10,
        },
        modalLowerUpperContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        modalheadText: {
            color: COLORS.black,
            fontWeight: '800',
            fontSize: 20,
        },
        modalText: {
            color: COLORS.black,
            fontWeight: '800',
            fontSize: 18,
            paddingTop: 20,
        },
        customMarkerContainer: {
            height: 60,
            alignItems: 'center',
            justifyContent: 'center'
        },
        customMarkerCircle: {
            height: 30,
            width: 30,
            borderRadius: 15,
            borderWidth: 4,
            borderColor: COLORS.white,
            backgroundColor: COLORS.primary


        },
        customMarkerText: {
            marginTop: 5,
        },
        iconText: {
            color: COLORS.gray,
            fontSize: 16,
            fontWeight: '800'
        },
        iconStar: {
            tintColor: COLORS.gray2,
            resizeMode: 'contain',
            width: 20,
            height: 20,
            marginHorizontal: 5,
        },
        nextButton: {
            backgroundColor: COLORS.primary,
            width: '100%',

            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 10,
            margin: 10,

        },
        nextButtonText: {
            color: COLORS.white,
            fontSize: 20,

        },
        deliveryFlatList: {
            backgroundColor: COLORS.lightGray1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingVertical: 10,
            marginRight: 10,
            marginTop: 10,
        },
        ratingFlatList: {
            backgroundColor: COLORS.lightGray1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginRight: 10,
            marginTop: 10,
            flexDirection: 'row'
        },
        tagsFlatList: {
            backgroundColor: COLORS.lightGray1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingVertical: 10,
            marginRight: 10,
            marginTop: 10,
        }

    })

export default styles;