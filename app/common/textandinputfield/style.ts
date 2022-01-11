import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = () => StyleSheet.create({
    inputText: {
        width: '95%',
        paddingHorizontal: 10,
        color: COLORS.black,
        fontSize: 18,
    },
    labelText: {
        color: COLORS.gray,
        fontSize: 16,

    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    invalidText: {
        color: 'red',
        fontSize: 16,
    },
    icon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGray1,
        borderRadius: 10,
        paddingRight: 10
    }

})

export default styles;