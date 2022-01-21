import React from "react";
import LoginScreen from "../views/loginScreen/loginScreen";

interface InputProps{
    navigation :any
}
const LoginModel = (props:InputProps)=>{
    const {navigation} =props
    return(
        <LoginScreen navigation={navigation}/>
    )
}
export default LoginModel;