import React from "react";
import InstructorProfileScreen from "../views/instructorProfileScreen/instructorProfileScreen";

interface InputProps{
    navigation:any
}

const InstructorProfileModel = (props:InputProps)=>{
    const{navigation}=props
    
    return(
        <InstructorProfileScreen navigation={navigation}/>
    )

}
export default InstructorProfileModel