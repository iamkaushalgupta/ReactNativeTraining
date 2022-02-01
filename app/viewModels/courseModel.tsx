import React,{useEffect, useState} from "react";
import { dummyData } from "../constants";
import CourseScreen from "../views/courseScreen/courseScreen";

interface InputProps{
    navigation:any
}

const CourseModel = (props:InputProps)=>{
    const {navigation} =props;
    const [selected,setSelected]=useState(0)
    const [allStudents,setAllStudents]=useState(false)
    const [studentsData,setStudentsData]=useState(dummyData.course_details.students.slice(0,dummyData.course_details.students.length-1))

    useEffect(()=>{
        if(allStudents==true)
        setStudentsData(dummyData.course_details.students)
    },[allStudents])

    return(
        <CourseScreen navigation={navigation}
        selected={selected}
        setSelected={(item:number)=>setSelected(item)}
        allStudents={allStudents}
        setAllStudents ={(item:boolean)=>setAllStudents(item)}
        studentsData={studentsData}
        />
    )
}
export default CourseModel;