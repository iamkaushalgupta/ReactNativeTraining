import React from "react";
import { Button, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import styles from './style'
import ChatBot from '../Chatbot/index';

interface homeProp{
    navigation: any
}
const HomeScreen = (props:homeProp) => {
 const {navigation} = props;
    return (

        <SafeAreaView>
          {/* <Text style={styles.headText}>Chat Bot</Text> */}
        <ChatBot />
        
      </SafeAreaView>
    );
}
export default HomeScreen;