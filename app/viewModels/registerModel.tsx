import React,{useState,useRef} from "react";
import { emailValidation, passwordValidation, usernameValidation } from "../config/validation";
import RegisterScreen from "../views/registerScreen/registerScreen";
interface InputProps{
    navigation:any
}
const RegisterModel=(props:InputProps)=>{
const {navigation} =props
const [student,setStudent]=useState(true)
const [render,setRender]=useState(false)
const email =useRef<any | null>(null);
const password =useRef<any | null>(null);
const username=useRef<any | null>(null)
const emailError =useRef<any | null>(null);
const passwordError =useRef<any | null>(null);
const userNameError =useRef<any | null>(null);
const [refresh,setRefresh]=useState(false)
const [hidePassword,setHidePassword]=useState(true)

React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);

  const subMit=()=>{
    emailError.current= emailValidation(email.current)
    passwordError.current=passwordValidation(password.current)
    userNameError.current=usernameValidation(username.current)
    
    if(!emailError.current&&!passwordError.current&&!userNameError.current)
      navigation.navigate('Walkthrough')
  }


  return(
      <RegisterScreen navigation={navigation}
       student={student} 
       setStudent = {(item:boolean)=>setStudent(item)}
       email={email} password={password} username={username}
       subMit={subMit}
       emailError={emailError.current}
       passwordError={passwordError.current}
       userNameError={userNameError.current}
       refersh={refresh}
       setRefresh={(item:boolean)=>setRefresh(!item)}
       hidePassword={hidePassword}
       setHidePassword={setHidePassword}
     
       />
  );  
}

export default  RegisterModel