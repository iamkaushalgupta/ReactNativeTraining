import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },

    cardStyleContainer: {
        backgroundColor: COLORS.primary,
        height: '30%',
        width: "100%",
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 10,
    },
    cardIcon: {
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        height: 40,
        width: 40,
        tintColor: COLORS.black,

    },
    innerCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardLabelText: {
        color: COLORS.white,
        fontWeight: '800',
        fontSize: 16,
    },

    cardInputContainer: {
        flex: 1
    },
    smallContainer: {
        flex: 0.48
    },
    innerCardInputContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        
    },
    addButton: {
        backgroundColor: COLORS.primary,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,



    },
    addText: {
        fontSize: 18,
        color: COLORS.white,
        padding: 10,
    }


})
export default styles