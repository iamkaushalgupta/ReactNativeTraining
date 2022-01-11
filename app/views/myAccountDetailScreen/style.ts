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
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.black
    },
    icon: {
        tintColor: COLORS.gray2,
        resizeMode: 'contain',
        width: 35,
        height: 35,
    },
    editButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

    },

    editButtonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: '700'
    },
    renderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.gray2,
        borderRadius: 10,
    },
    renderTitleText: {
        color: COLORS.gray,
        paddingVertical: 10,
        fontWeight: '700',
        fontSize: 16,
    },
    renderValueText: {
        color: COLORS.black,
        paddingVertical: 10,
        fontWeight: '700',
        fontSize: 16,
    },
    flatListContainer: {
        backgroundColor: COLORS.lightGray1,
        borderRadius: 10,
        marginVertical: 10,
    }

})

export default styles;