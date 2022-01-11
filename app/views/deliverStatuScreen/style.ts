import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    firstTitleText: {
        color: COLORS.gray,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700'
    },
    secondTitleText: {
        color: COLORS.black,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700'
    },
    mainContainer: {
        backgroundColor: COLORS.lightGray1,
        borderWidth: 2,
        borderColor: COLORS.gray3,
        borderRadius: 10,
        marginVertical: 10,
    },
    firstInnerMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: COLORS.gray3,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    renderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,


    },
    doneIcon: {
        resizeMode: 'contain',
        height: 40,
        width: 40,

    },
    orderStatusText: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: '800'
    },
    orderStatusMessage: {
        color: COLORS.gray,
        fontSize: 16,
        fontWeight: '600'
    },
    renderInnerContainer: {
        marginHorizontal: 20,

    },
    trackIdText: {
        color: COLORS.gray,
        fontSize: 18,
        fontWeight: '600'
    },
    trackOrderText: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: '800'
    },
    dottedLine: {
        height: 30,
        width: 3,
        alignSelf: 'center',
        tintColor: COLORS.gray
    },
    coloredDottedLine: {
        height: 30,
        width: 3,
        backgroundColor: COLORS.primary,
        zIndex: -1,
        alignSelf: 'center',
    },
    flatList: {
        paddingVertical: 15
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
    },
    doneText: {
        fontSize: 18,
        color: COLORS.white

    }
})

export default styles;