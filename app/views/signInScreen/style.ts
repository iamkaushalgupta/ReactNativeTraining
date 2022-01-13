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

    signinButton: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    signinButtonText: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: 'center',

    },
    labelForgetText: {
        alignSelf: 'flex-end',
        fontSize: 15,
        color: COLORS.gray,
        marginVertical: 5,
    },
    colorText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: '600',
        paddingVertical: 5,
    },
    labelText: {
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 5,
        color: COLORS.gray,
        fontWeight: '600',
    },
    bottomContainer: {
        justifyContent: 'flex-end'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    

    socialLoginButton:{
        width:'100%',
        backgroundColor:COLORS.blue,
        marginVertical:10,
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
      
    },
    socialIcon:{
        height:25,
        width:25,
        resizeMode:'contain'
    },
    loginTextColor:{
        color:COLORS.white,
        fontSize:16,
        paddingLeft:15,
    }
})
export default styles