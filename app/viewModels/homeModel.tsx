import HomeScreen from "../views/homescreen/homescreen";
import React,{useState} from "react";

interface InputProps{
    navigation: any
}
const HomeModel=(props:InputProps)=>{
const {navigation} = props
const date = 'Tuesday, 25th Jan 2022'
    return(<HomeScreen navigation={navigation} date={date}/>)
}

export default HomeModel;