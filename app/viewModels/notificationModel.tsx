import React from "react";
import NotificationScreen from "../views/notificationScreen/notificationScreen";

interface InputProps{
    navigation:any
}

const NotificationModel=(props:InputProps)=>{
    const {navigation}=props
    return(
        <NotificationScreen navigation={navigation} />
    )
}
export default NotificationModel;