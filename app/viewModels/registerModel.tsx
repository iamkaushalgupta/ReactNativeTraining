import React,{useState} from "react";
import RegisterScreen from "../views/registerScreen/registerScreen";
interface InputProps{
    navigation:any
}
const RegisterModel=(props:InputProps)=>{
const {navigation} =props
const [student,setStudent]=useState(true)
const [render,setRender]=useState(false)
React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);

  return(
      <RegisterScreen navigation={navigation}
       student={student} 
       setStudent = {(item:boolean)=>setStudent(item)}/>
  );  
}

export default  RegisterModel