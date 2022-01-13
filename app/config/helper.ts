import React from "react";
import {
    LoginButton,
     AccessToken,
     LoginManager
   } from 'react-native-fbsdk-next';
   import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

const SigninWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(

      function(result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } else {
          console.log("==> Login success with permissions: " ,result.grantedPermissions?.toString());
          AccessToken.getCurrentAccessToken().then((data) => { console.log(data) })
        }
       },
       function(error) {
        console.log("==> Login fail with error: " + error);
       }
     );
  }
  const SigninWithGoogle = async () => {

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


  export {SigninWithFacebook,SigninWithGoogle};