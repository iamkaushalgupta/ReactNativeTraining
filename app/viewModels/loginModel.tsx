import React,{useState} from "react";
import LoginScreen from "../views/loginScreen/loginScreen";

interface InputProps{
    navigation :any
}
const LoginModel = (props:InputProps)=>{
    const {navigation} =props
    const [render,setRender]=useState(false)
React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);

    return(
        <LoginScreen navigation={navigation}/>
    )
}
export default LoginModel;