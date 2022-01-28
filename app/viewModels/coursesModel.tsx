import React, { useState } from "react";
import CourseScreen from "../views/coursesScreen/coursesScreen";

interface InputProps{
    navigation:any
}

const CourseModel=(props:InputProps)=>{
    const {navigation}=props;
    return(
        <CourseScreen navigation={navigation}/>
    )
}

export default CourseModel;