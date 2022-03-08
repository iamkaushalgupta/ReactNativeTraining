import { StyleSheet } from "react-native";
import { Colors } from "../../constants";



const styles  = StyleSheet.create({
    incomingMsgBox: {
        backgroundColor: Colors.white,
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 5,
        borderWidth: 0.5,
        borderColor: Colors.grey,
      },
      incomingMsgText: {color: Colors.black, fontSize: 16},
    
      sentMsgBox: {
        backgroundColor: Colors.green,
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-end',
        marginVertical: 5,
        marginHorizontal: 5,
      },
    
      sentMsgText: {color: Colors.white, fontSize: 16},

})

export default styles;