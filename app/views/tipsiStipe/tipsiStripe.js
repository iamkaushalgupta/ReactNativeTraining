import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Button,
    Text,
    View
} from 'react-native';
import stripe from 'tipsi-stripe'
import styles from './style';
const TipsiStripe = () => {
    // const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(null)
    stripe.setOptions({
        publishableKey: 'pk_test_51K1qj0SDvltvguK8baVbudsacx7ezQO4rHumEmVu7m791vkWNfBYsMfDimnjEyFlmiA1ofpx4pmIR5rAsQMY29tm00WZJePwgc',
    })
    const handleCardPayPress = async () => {
        
        try {
            // setLoading(true)
            const token = await stripe.paymentRequestWithCardForm()
            console.log('Token from Card ', token)
            setToken(token)
            // setLoading(false)
        } catch (error) {
            console.log('handleCardPayPress Error ', error)
            // setLoading(false)
        }
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>
                    Card Form Example
                </Text>
                <Text style={styles.instruction}>
                    Click button to show Card Form dialog.
                </Text>
                <Button
                    title="Enter you card and pay"
                    onPress={handleCardPayPress}
                 />
                <View style={styles.token}>
                    {token &&
                    <Text style={styles.instruction}>
                        Token: {token.id}
                    </Text>
                    }
                </View>
            </SafeAreaView>
        </>
    );
};

export default TipsiStripe;