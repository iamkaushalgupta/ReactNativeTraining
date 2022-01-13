import React from "react";
import GoogleLogin from "../views/googlelogin/googleloginscreen";

interface InputProps{
    navigation: any
}

const GoogleModal=(props:InputProps)=>{
    const{navigation}=props;
    return(<GoogleLogin/>)
    
}

export default GoogleModal;