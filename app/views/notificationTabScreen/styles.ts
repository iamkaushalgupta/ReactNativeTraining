import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    notificationIconContainer: {
        backgroundColor: COLORS.primary,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 10,

    },
    notificationIcon: {
        resizeMode: 'contain',
        height: 35,
        width: 35,
    },
    innerNotificationContainer: {
        flexDirection: 'row'
    },
    notificationContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGray1,
        padding: 10,
        borderRadius: 10,
    },
    threeDots: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: COLORS.black,
        marginTop: 5,
    },
    notificationContentContainer: {
        marginLeft: 10,
        width: "75%",

    },
    notificationTitleText: {
        fontWeight: '700',
        fontSize: 18,
        color: COLORS.black
    },
    labelGrayText: {
        color: COLORS.gray,

    },
    labelBlackText: {
        color: COLORS.black
    },
    sepratorTitleText: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: '600'
    }

})

export default styles