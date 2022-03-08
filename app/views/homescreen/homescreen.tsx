import React from "react";
import { Button, Text, View, SafeAreaView } from 'react-native';
import styles from './style'
import ChatBot from '../Chatbot/index';

interface homeProp{
    navigation: any
}
const HomeScreen = (props:homeProp) => {
 const {navigation} = props;
    return (

        <SafeAreaView>
        <ChatBot />
      </SafeAreaView>
    );
}
export default HomeScreen;