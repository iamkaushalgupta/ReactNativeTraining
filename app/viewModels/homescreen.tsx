import HomeScreen from "../views/homescreen/homescreen";
import React from "react";

interface HomeModleProps{
    navigation: any
}
const HomeModel=(props:HomeModleProps)=>{
const {navigation} = props

    return(<HomeScreen navigation={navigation}/>)
}

export default HomeModel;