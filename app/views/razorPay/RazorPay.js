import React from 'react';
import { Button, StyleSheet, View, Alert, Text } from 'react-native';
import styles from './styles';

import RazorpayCheckout from 'react-native-razorpay';

const RazorPay = () => {
    const Payment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_A9obGaBO2vVdwl',
            amount: '5000',
            name: 'foo',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software'
            },
            theme: { color: '#F37254' }
        }
        RazorpayCheckout.open(options).then((data) => {

            Alert.alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {

            Alert.alert(`Error: ${error.code} | ${error.description}`);
        });
    }
    return (

        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>Welcome to Rozar Pay</Text>
                <Button
                    onPress={Payment}
                    title="Press Me"
                />
            </View>
        </View>
    );
}

export default RazorPay;