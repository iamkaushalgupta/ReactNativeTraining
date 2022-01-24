import React,{useState} from "react";
import RegisterScreen from "../views/registerScreen/registerScreen";
interface InputProps{
    navigation:any
}
const RegisterModel=(props:InputProps)=>{
const {navigation} =props
const [student,setStudent]=useState(true)
  return(
      <RegisterScreen navigation={navigation}
       student={student} 
       setStudent = {(item:boolean)=>setStudent(item)}/>
  );  
}

export default  RegisterModel