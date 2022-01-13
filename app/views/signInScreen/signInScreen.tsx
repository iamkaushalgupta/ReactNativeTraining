import React from "react";
import {
    View, Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from "./style";
import UseOrientation from "../../config/useOrientation";
import {
    HeaderLogo, TextAndInputField, TextAndPasswordInput
} from "../../common";
import { string,icons } from "../../constants";
import { SigninWithFacebook,SigninWithGoogle  } from "../../config/helper";
const SignInScreen = (props: any) => {
    const o = UseOrientation()
        
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
            <TouchableOpacity onPress={()=>SigninWithGoogle()} style={styles(o).socialLoginButton}>
                    <Image source={icons.google} resizeMode="contain" style={styles(o).socialIcon}/>
                    <Text style={styles(o).loginTextColor}>{string.keywords.signinwithgoogle}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>SigninWithFacebook()} style={styles(o).socialLoginButton}>
                    <Image source={icons.facebook} resizeMode="contain" style={styles(o).socialIcon}/>
                    <Text style={styles(o).loginTextColor}>{string.keywords.signinwithfacebook}</Text>
                </TouchableOpacity>
        
        </View>
    )
}

export default SignInScreen