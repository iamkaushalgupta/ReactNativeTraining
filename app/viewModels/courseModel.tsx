import React from "react";
import { useState } from "react";
import CourseScreen from "../views/courseScreen/courseScreen";

interface InputProps{
    navigation:any
}

const CourseModel = (props:InputProps)=>{
    const {navigation} =props;
    const [selected,setSelected]=useState(0)
    return(
        <CourseScreen navigation={navigation}
        selected={selected}
        setSelected={(item:number)=>setSelected(item)}
        />
    )
}
export default CourseModel;