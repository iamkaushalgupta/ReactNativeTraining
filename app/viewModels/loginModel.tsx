import React, {useEffect, useRef, useState} from 'react';
import LoginScreen from '../views/loginScreen/loginScreen';
import {emailValidation, usernameValidation, passwordValidation } from '../config/validation'
interface InputProps {
  navigation: any;
}
const LoginModel = (props: InputProps) => {
  const {navigation} = props;
  const [render, setRender] = useState(false);
  const email =useRef<any | null>(null);
  const password =useRef<any | null>(null);
  const emailError =useRef<any | null>(null);
  const passwordError =useRef<any | null>(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render);
    });
    return unsubscribe;
  }, [navigation, render]);

  const subMit=()=>{
    emailError.current= emailValidation(email.current)
    passwordError.current=passwordValidation(password.current)
    if(!emailError.current&&!passwordError.current)
      navigation.navigate('Walkthrough')
  }

  return <LoginScreen navigation={navigation} email={email} password={password} subMit={subMit}/>;
};
export default LoginModel;
