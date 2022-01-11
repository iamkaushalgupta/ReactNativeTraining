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

    contentContainer: {
        backgroundColor: COLORS.gray3,
        borderRadius: 10,
        padding: 10,
    },
    addButton: {
        backgroundColor: COLORS.primary,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,


    },
    addText: {
        fontSize: 18,
        color: COLORS.white

    }
})

export default styles;