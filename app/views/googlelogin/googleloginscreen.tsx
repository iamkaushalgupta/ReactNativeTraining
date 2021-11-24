import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { StyleSheet, Text, View } from 'react-native';

const GoogleLogin = () => {
  const signIn = async () => {

    GoogleSignin.configure({
      scopes: [],
      webClientId: '157811350961-04qde73up7hjfq94t3esud9afu7hr6hu.apps.googleusercontent.com',
      offlineAccess: true,
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log("userinfo", userInfo)
    } catch (error) {
      console.log(error)


    }
  };



  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20, fontSize: 17 }}> Sign in With Google Account</Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
export default GoogleLogin;
