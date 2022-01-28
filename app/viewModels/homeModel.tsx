import HomeScreen from "../views/homescreen/homescreen";
import React,{useState,useEffect} from "react";

interface InputProps{
    navigation: any
}
const HomeModel=(props:InputProps)=>{
const {navigation} = props

const [render,setRender]=useState(false)
React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);

const date = 'Tuesday, 25th Jan 2022'
    return(<HomeScreen navigation={navigation} date={date}/>)
}

export default HomeModel;