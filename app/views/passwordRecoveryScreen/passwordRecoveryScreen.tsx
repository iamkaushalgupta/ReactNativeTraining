import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderLogo, TextAndInputField } from "../../common";
import { string } from "../../constants";
import styles from "./style";
import UseOrientation from "../../config/useOrientation";

const PasswordRecoveryScreen = (props: any) => {
    const o = UseOrientation()
    return (
        <View style={styles(o).container}>
            <HeaderLogo />
            <Text style={styles(o).mainheading}>{string.keywords.passwordrecovery}</Text>
            <Text style={styles(o).labelText}>{string.keywords.pleaseenteryouremailaddresstorecoveryourpassword}</Text>
            <TextAndInputField name="Email" />

            <View style={styles(o).sendButtonContainer}>
                <TouchableOpacity style={styles(o).sendButton} onPress={() => props.navigation.navigate('OTPAuthentication')}>
                    <Text style={styles(o).sendButtonText}>{string.keywords.sendemail}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default PasswordRecoveryScreen