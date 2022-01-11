import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },

    Button: {
        backgroundColor: COLORS.primary,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 10,
        marginVertical: 10,
    },
    ButtonText: {
        color: COLORS.white,
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 10,
    },
    ButtonContainer: {
        justifyContent: 'flex-end',
        flex: 1
    },
    midContainer: {
        justifyContent: 'center',
        flex: 2,
        alignItems: 'center'
    },

    congratulationText: {
        fontSize: 30,
        color: COLORS.black,
        fontWeight: '800',

    },
    labelText: {
        fontSize: 16,
        color: COLORS.gray,
    }

})

export default styles;