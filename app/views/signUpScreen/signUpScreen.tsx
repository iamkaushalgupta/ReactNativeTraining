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
import validation from "../../config/validation";
import { ScrollView } from "react-native-gesture-handler";

const SignUpScreen = (props: any) => {
    const o = UseOrientation()
    const [pass,setPass]=useState(false)
    const [emailerror,setEmailError] =useState('')
    const [emailFlag,setEmailFlag] =useState(false)
    const [usernameFlag,setusernameFlag]=useState(false)
    const [usernameError,setUserNameError]=useState('')
    const handleText = async (type: any, item: any) => {
        switch (type) {
          case 'email':
           await setPass(!validation('email',item)),setEmailError(''),setEmailFlag(validation('email',item))
            break;
            case 'username':
                await setPass(!validation('username',item)),setUserNameError(''),setusernameFlag(validation('username',item))    
              default:
            break;
        }
      };
      const handleSubmit=()=>{
        if(pass)
        {
            setEmailError('')
            setUserNameError('')
            props.navigation.navigate('Drawer')
        }

        else{
            if(emailFlag)
                setEmailError("Invalid Email")
            
            if(usernameFlag)
                setUserNameError('Invalid Username')
        }
    }

      

    return (
        <View style={styles(o).container}>
            <HeaderLogo />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles(o).mainheading}>{string.keywords.gettingstarted}</Text>
            <Text style={styles(o).labelText}>{string.keywords.createanaccounttocontinue}</Text>
            <TextAndInputField name="Email"  check="email" onChangeText={(item:any)=>handleText("email",item)} error={emailerror}/>
            <TextAndInputField name="Username"  check="username" onChangeText={(item:any)=>handleText("username",item)} error={usernameError}/>
            <TextAndPasswordInput name="Password" />
            </ScrollView>

            <TouchableOpacity style={styles(o).signinButton}
            onPress={()=>{handleSubmit()}}
            >
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