import React from 'react'
import {View,Text} from 'react-native';
import styles from './style'
interface InputProps{
    incomingMsg :any,
    sentMsg:any,
    msg:any,
}

const Msg = (props:InputProps)=>{
    const {incomingMsg,sentMsg,msg} =props;
    
    return(
        <View>
             {incomingMsg && (
        <View style={styles.incomingMsgBox}>
          <Text style={styles.incomingMsgText}>{msg}</Text>
        </View>
      )}
      {sentMsg && (
        <Text style={styles.sentMsgBox}>
          <Text style={styles.sentMsgText}>{msg}</Text>
        </Text>
      )}
        </View>
    )
}
export default Msg;

