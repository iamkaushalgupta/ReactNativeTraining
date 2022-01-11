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
    }
    ,
    labelText: {
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 5,
        color: COLORS.gray,
        fontWeight: '600',
    },
    signinButton: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    signinButtonText: {
        color: COLORS.white,
        fontSize: 18,
        textAlign: 'center',

    },
    labelForgetText: {
        alignSelf: 'flex-end',
        fontSize: 15,
        color: COLORS.gray,
        marginVertical: 5,
    },
    colorText: {
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 5,
        color: COLORS.primary,
        fontWeight: '600',
    },
    bottomContainer: {
        justifyContent: 'flex-end'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
export default styles