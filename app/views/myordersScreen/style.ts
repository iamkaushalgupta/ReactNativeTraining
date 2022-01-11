import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },

    backButton: {
        borderColor: COLORS.gray2,
        borderWidth: 2,
        borderRadius: 10,
    },
    heading: {
        fontSize: 25,
        fontWeight: '900',
        color: COLORS.black
    },
    icon: {
        tintColor: COLORS.gray2,
        resizeMode: 'contain',
        width: 35,
        height: 35,
    },
    iconProfile: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    switchButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    switchButton: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
    },
    firstButton: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: COLORS.primary
    },
    secondButton: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightOrange2
    },
    switchButtonText: {
        fontSize: 16,
        fontWeight: '700'
    },
    firstButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.white,
    },
    secondButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.primary,
    },
    contentContainer: {
        flex: 1,
    },
    sepratorTitleText: {
        color: COLORS.gray,
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 10,
    },
    iconContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 55,
        width: 60
    },
    renderIcon: {
        resizeMode: 'contain',
        height: 30, width: 30,
    },
    renderContainer: {
        backgroundColor: COLORS.lightGray1,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
    },
    InsideRenderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    innerRenderContainer: {
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 20,
        color: COLORS.black,
        fontWeight: '800'
    },
    datetimeItemsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateAndItemText: {
        color: COLORS.gray
    },
    orderContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        marginLeft: 10
    },
    priceText: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: '800'
    },
    ordersDot: {
        height: 12,
        width: 12,
    },
    itemsDot: {
        height: 8,
        width: 8,
        tintColor: COLORS.gray,
        marginLeft: 10,
    },
    orderText: {
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 5,
    }

})
export default styles;