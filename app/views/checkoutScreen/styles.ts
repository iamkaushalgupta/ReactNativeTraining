import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    renderContainer: {
        flexDirection: 'row',
        borderRadius: 10,

        borderWidth: 2,
        alignItems: 'center',
        marginVertical: 5,
        padding: 10,
        justifyContent: 'space-between'
    },
    innerRenderContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    payIconContainer: {
        backgroundColor: COLORS.white,

        borderRadius: 10,
        borderColor: COLORS.lightGray1,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70, width: 80
    },
    payIcon: {
        height: 60, width: 60,
        resizeMode: 'contain'
    },
    cardText: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.black,
        paddingLeft: 10,
    },
    dotContainer: {
        borderWidth: 2,
        borderRadius: 180,
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 20,


    },
    dot: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        tintColor: COLORS.primary
    },
    deliveryAddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.lightGray1,
        padding: 20,
        borderRadius: 10,

    },
    gpsIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    addressText: {
        color: COLORS.black,
        fontSize: 16,
        paddingHorizontal: 20,
    },
    titleText: {
        fontSize: 18,
        color: COLORS.black,
        paddingVertical: 10,
    },

    discountIcon: {
        resizeMode: 'contain',
        tintColor: COLORS.white,
        height: 20,
        width: 20,
    },
    discountIconContainer: {
        backgroundColor: COLORS.primary,

        marginBottom: -8,
        justifyContent: 'center',
        padding: 10,
        width: '10%',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        height: '100%'
    },
    couponContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: COLORS.lightGray1,
        borderRadius: 10,
        width: '100%',
        height: "30%",
    },
    textInput: {
        color: COLORS.black,
        width: '90%'
    },

    modal: {
        marginHorizontal: -10,
    },

    modalInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
    },
    priceLabelText: {
        fontSize: 16,
        color: COLORS.black,
        fontWeight: '600'
    },
    priceValueText: {
        fontWeight: '900',
        color: COLORS.black,
        fontSize: 16,
    },
    modalSecondInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: COLORS.lightGray1,
        paddingTop: 20,


    },
    totalText: {
        color: COLORS.black,
        fontSize: 22,
        fontWeight: '600'
    },

    totalValueText: {
        color: COLORS.black,
        fontSize: 22,
        fontWeight: '600'
    },
    Button: {
        backgroundColor: COLORS.primary,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    ButtonText: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 5,
    },
    ButtonContainer: {

    },
    modalContainer: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 20,

    },

})

export default styles;