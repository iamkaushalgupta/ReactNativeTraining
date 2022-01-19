import React,{useState} from "react";
import {
    View, Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import styles from "./style";
import UseOrientation from "../../config/useOrientation";
import {
    HeaderLogo, TextAndInputField,TextAndPasswordInput
} from "../../common";
import { string } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import ErrorMessage from '../../config/errorMessages'
interface InputProps{
    navigation:any,
    onChangeEmail:(item: string) => void,
    emailFlag: boolean,
    onChangeUserName: (item: string) => void,
    usernameFlag:boolean
    onChangePassword:(item: string)=> void,
    passwordFlag:boolean,
    onSubmit: () => void
}

const SignUpScreen = (props: InputProps) => {
    const o = UseOrientation()
     return (
        <View style={styles(o).container}>
            <HeaderLogo />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles(o).mainheading}>{string.keywords.gettingstarted}</Text>
            <Text style={styles(o).labelText}>{string.keywords.createanaccounttocontinue}</Text>    
            <TextAndInputField name="Email"  
             onChangeText={(item:any)=>props.onChangeEmail(item)}
             error={props.emailFlag}
          
            />
            
            <TextAndInputField 
            name="Username"
            onChangeText={(item:any)=>props.onChangeUserName(item)} 
            error={props.emailFlag}
            />
            
            <TextAndPasswordInput
            name="Password"
            onChangeText={(item:any)=>props.onChangePassword(item)} 
            errorText={(!props.passwordFlag)?ErrorMessage.password:''}
            />

    
            <TouchableOpacity style={styles(o).signinButton}
            onPress={()=>{props.onSubmit()}}
            >
            
            <Text style={styles(o).signinButtonText}>{string.keywords.signup}</Text>
            </TouchableOpacity>

            <View style={styles(o).textContainer}>
                <Text style={styles(o).labelText}>{string.keywords.alreadyhaveanaccount} </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signin')} >
                    <Text style={styles(o).colorText}>{string.keywords.signin}</Text>
                </TouchableOpacity>
            
            </View>

            </ScrollView>

        </View>
    )
}

export default SignUpScreen