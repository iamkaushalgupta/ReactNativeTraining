import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = (o: any) => StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: o.width * 0.05
    },
    mainheading: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'center'
    },
    labelText: {
        textAlign: 'center',
        fontSize: 18,
        color: COLORS.gray,
        fontWeight: '600',
        paddingVertical: 10,
    },
    sendButton: {
        backgroundColor: COLORS.primary,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
    },
    sendButtonText: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: 'center',

    },
    sendButtonContainer: {
        justifyContent: 'flex-end',
        flex: 1
    }

})

export default styles;