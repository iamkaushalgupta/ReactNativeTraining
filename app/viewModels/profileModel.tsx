import ProfileScreen from "../views/profilescreen/profilescreen";
import React, { useState } from "react";

interface InputProps{
    navigation:any
}

const ProfileModel=(props:InputProps)=>{
    const {navigation}=props
    const [render,setRender]=useState(false)
React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);

    return(<ProfileScreen navigation={navigation} setRender={(item:boolean)=>setRender(item)} render={render} />)
}

export default ProfileModel;