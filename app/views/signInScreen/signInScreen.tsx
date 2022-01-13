import React from "react";
import {
    View, Text,
    TouchableOpacity
} from 'react-native';
import styles from "./style";
import UseOrientation from "../../config/useOrientation";
import {
    HeaderLogo, TextAndInputField, TextAndPasswordInput
} from "../../common";
import { string } from "../../constants";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

const SignInScreen = (props: any) => {
    const o = UseOrientation()
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
        <View style={styles(o).container}>
            <HeaderLogo />
            <Text style={styles(o).mainheading}>{string.keywords.letssignyouin}</Text>
            <Text style={styles(o).labelText}>{string.keywords.welcomebackyouvebeenmissed}</Text>
            <TextAndInputField name="Email" check="email" />
            <TextAndPasswordInput name = "Password"/>
            <TouchableOpacity onPress={() => props.navigation.navigate('PasswordRecovery')}>
                <Text style={styles(o).labelForgetText}>{string.keywords.forgetpassword}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles(o).signinButton} 
            onPress={() => props.navigation.navigate("Drawer")}>
                <Text style={styles(o).signinButtonText}>{string.keywords.signin}</Text>
            </TouchableOpacity>
            <View style={styles(o).textContainer}>
                <Text style={styles(o).labelText}>{string.keywords.donthaveanaccount} </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={styles(o).colorText}>{string.keywords.signup}</Text>
                </TouchableOpacity>
            </View>
            <GoogleSigninButton
                style={styles(o).googleButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => signIn()}
      />


        </View>
    )
}

export default SignInScreen