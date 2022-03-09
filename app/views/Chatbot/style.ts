import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
const styles = StyleSheet.create({
    typeMsgContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        // bottom: 5,
      },
    
      typeMsgBox: {
        borderWidth: 0.8,
        borderColor: Colors.grey,
        padding: 10,
        width: '80%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
    
      sendBtn: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      sendTxt: {color: Colors.white},
    
})
export default styles;