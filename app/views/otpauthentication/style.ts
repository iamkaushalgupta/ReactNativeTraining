import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = (o: any) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: o.width * 0.05
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
        paddingVertical: 5,
        color: COLORS.gray,
        fontWeight: '600',
    },
    sendButton: {
        backgroundColor: COLORS.primary,
        width: '100%',
        // height:'100%',
        // flex:1,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 10,
        marginVertical: 10,
    },
    sendButtonText: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10,
    },
    sendButtonContainer: {
        justifyContent: 'flex-end',
        flex: 1
    },
    textInput: {
        marginVertical: 20,
        width: 50,
        borderColor: COLORS.gray3,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray1,
        color: COLORS.black,
        textAlign: 'center',
        fontSize: 18
    },
    colorLabelText: {
        textAlign: 'center',
        fontSize: 18,
        paddingBottom: 5,
        color: COLORS.primary,
        fontWeight: '600',

    }

})

export default styles;