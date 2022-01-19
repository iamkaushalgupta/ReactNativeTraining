import React,{useState,useEffect} from "react";
import SignUpScreen from "../views/signUpScreen/signUpScreen";
import { emailValidation, usernameValidation, passwordValidation } from "../config/validation";
const SignUpModel = ({ navigation }: any) => {
    const [email,setEmail] =useState('')
    const [emailFlag,setEmailFlag] =useState(false)
    const [usernameFlag,setusernameFlag]=useState(false)
    const [username,setUserName]=useState('')
    const [passwordFlag,setpasswordFlag]=useState(false)
    const [password,setPassword]=useState('')

    useEffect(()=>{
        if(usernameFlag&&passwordFlag &&usernameFlag)
        navigation.navigate('Drawer')   
    },[usernameFlag,passwordFlag,usernameFlag])

    const onSubmit=async()=>{
           await setusernameFlag(usernameValidation(username)),setEmailFlag(emailValidation(email)),  setpasswordFlag(passwordValidation(password))
 
    }
    return (
        <SignUpScreen navigation={navigation}
          onChangeEmail={(item:string)=>setEmail(item)}
           emailFlag={emailFlag}
           onChangeUserName={(item:string)=>setUserName(item)}
           usernameFlag={usernameFlag}
           onChangePassword={(item:string)=>setPassword(item)}
           passwordFlag={passwordFlag}
           onSubmit={onSubmit}
        />
    )
}

export default SignUpModel