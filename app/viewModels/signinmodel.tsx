import React,{useState,useEffect} from "react";
import SignInScreen from "../views/signInScreen/signInScreen";
import { emailValidation,passwordValidation } from "../config/validation";
const SignInModel = ({ navigation }: any) => {
    const [email,setEmail] =useState('')
    const [emailFlag,setEmailFlag] =useState(false)
    const [passwordFlag,setpasswordFlag]=useState(true)
    const [password,setPassword]=useState('')
    useEffect(()=>{
        if(emailFlag&&passwordFlag)
        navigation.navigate('Drawer')   
    },[emailFlag,passwordFlag])
    const onSubmit=async()=>{

        await   setEmailFlag(emailValidation(email)),  
        setpasswordFlag(passwordValidation(password))
 }
    return (
        <SignInScreen 
        onChangeEmail={(item:string)=>setEmail(item)}
        emailFlag={emailFlag}
        onChangePassword={(item:string)=>setPassword(item)}
        passwordFlag={passwordFlag}
        onSubmit={onSubmit}
        navigation={navigation} />
    )
}

export default SignInModel