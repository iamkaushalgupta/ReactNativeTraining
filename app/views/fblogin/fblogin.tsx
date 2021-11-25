import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import styles from './styles';

const FbLogin = () => {

    return (
        <View style={styles.fbbtn}>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: ", error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    console.log(data)
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => console.log("Logout.")} />
        </View>
    );
}

export default FbLogin;