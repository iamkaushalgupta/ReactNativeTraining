import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styles from './styles';

const MobileNo = (props: { onSubmit: (arg0: string) => void; }) => {

    const [phoneNumber, setPhoneNumber] = useState<any | null>(null);

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Enter Phone Number</Text>
            <TextInput
                autoFocus
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
            />
            <Button title="Phone Number Sign In" onPress={() => props.onSubmit(phoneNumber)} />
        </View>
    );
}

export default MobileNo;