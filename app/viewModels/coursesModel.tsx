import React, { useState } from "react";
import CoursesScreen from "../views/coursesScreen/coursesScreen";

interface InputProps{
    navigation:any
}

const CoursesModel=(props:InputProps)=>{
    const {navigation}=props;
    return(
        <CoursesScreen navigation={navigation}/>
    )
}

export default CoursesModel;