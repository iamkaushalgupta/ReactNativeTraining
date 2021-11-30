import React, { useEffect } from 'react';
import { View, Text, Button } from "react-native";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationController from './notificationController';


const Pushnotification = () => {

    useEffect(() => {
        
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
        });

        return unsubscribe;
    }, []);


    // const checkToken = async () => {
    //     const fcmToken = await messaging().getToken();

    // }



    return (
        <View>
            <Text>Push Notification Demo </Text>
            <NotificationController/>
        </View>
    )
}
export default Pushnotification;
