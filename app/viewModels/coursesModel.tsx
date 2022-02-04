import React, { useState } from "react";
import CoursesScreen from "../views/coursesScreen/coursesScreen";

interface InputProps{
    navigation:any
}

const CoursesModel=(props:InputProps)=>{
    const {navigation}=props;
    const [filerOpen,setFilterOpen]=useState(false)
    const [classType,setClassType]=useState(-1)
    const [classLevel,setClassLevel]=useState(-1)
    const [created,setCreated]=useState(-1)

    const reset=()=>{
        setClassType(-1),
        setClassLevel(-1),
        setCreated(-1)
    }
    return(
        <CoursesScreen navigation={navigation} filterOpen={filerOpen}
         setFilterOpen={(item:boolean)=>setFilterOpen(item)}
         classType={classType}
         setClassType={(item:number)=>setClassType(item)}
         classLevel={classLevel}
         setClassLevel={(item:number)=>setClassLevel(item)}
         created={created}
        setCreated={(item:number)=>setCreated(item)}
        reset ={()=>reset()}
         />
    )
}

export default CoursesModel;