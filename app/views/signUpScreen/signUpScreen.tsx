import React from "react";
import {
    View, Text,
    TouchableOpacity
} from 'react-native';
import styles from "./style";
import UseOrientation from "../../config/useOrientation";
import {
    HeaderLogo, TextAndInputField,TextAndPasswordInput
} from "../../common";
import { string } from "../../constants";

const SignUpScreen = (props: any) => {
    const o = UseOrientation()
    return (
        <View style={styles(o).container}>
            <HeaderLogo />
            <Text style={styles(o).mainheading}>{string.keywords.gettingstarted}</Text>
            <Text style={styles(o).labelText}>{string.keywords.createanaccounttocontinue}</Text>
            <TextAndInputField name="Email"  check="email"/>
            <TextAndInputField name="Username"  check="username"/>
            <TextAndPasswordInput name="Password" />


            <TouchableOpacity style={styles(o).signinButton}>
                <Text style={styles(o).signinButtonText}>{string.keywords.signup}</Text>
            </TouchableOpacity>

            <View style={styles(o).textContainer}>
                <Text style={styles(o).labelText}>{string.keywords.alreadyhaveanaccount} </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signin')} >
                    <Text style={styles(o).colorText}>{string.keywords.signin}</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default SignUpScreen