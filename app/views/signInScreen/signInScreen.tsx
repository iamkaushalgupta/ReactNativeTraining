import React, { useState } from "react";
import {
    View, Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import styles from "./style";
import UseOrientation from "../../config/useOrientation";
import {
    HeaderLogo, TextAndInputField, TextAndPasswordInput
} from "../../common";
import { string,icons } from "../../constants";
import { SigninWithFacebook,SigninWithGoogle  } from "../../config/helper";
import validation from '../../config/validation'
const SignInScreen = (props: any) => {
    const o = UseOrientation()
    const [pass,setPass]=useState(false)
    const [emailerror,setEmailError] =useState('')
    const handleSubmit=()=>{
        if(pass)
        {
            setEmailError('')
        }

        else{
            setEmailError("Invalid Email")
        }
    }
    const handleText = async (type: any, item: any) => {
        let res
        switch (type) {
          case 'email':
           await setPass(!validation('email',item)),setEmailError('')
            break;    
              default:
            break;
        }
      };
    return (
        <View style={styles(o).container}>
            <HeaderLogo />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles(o).mainheading}>{string.keywords.letssignyouin}</Text>
            <Text style={styles(o).labelText}>{string.keywords.welcomebackyouvebeenmissed}</Text>
            <TextAndInputField name="Email" check="email" onChangeText={(item: any)=>{handleText("email",item)}} error={emailerror}/>
            <TextAndPasswordInput name = "Password"/>
            <TouchableOpacity onPress={() => props.navigation.navigate('PasswordRecovery')}>
                <Text style={styles(o).labelForgetText}>{string.keywords.forgetpassword}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles(o).signinButton} 
            onPress={()=>{handleSubmit(),(pass)?props.navigation.navigate("Drawer"):undefined}}
            >
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
                </ScrollView>
        </View>
    )
}

export default SignInScreen