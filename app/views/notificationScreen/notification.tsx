import React from "react";
import { Image, Text, View } from "react-native";
import { selectedTheme } from "../../constants";
import styles from "./style";

interface InputProps{
    item: {
        id: number;
        avatar: any;
        name: string;
        created_at: string;
        message: string;
    }
}

const Notification =(props:InputProps)=>{
    const{item}=props
    return(
        <View style={styles(selectedTheme).notificationContainer}>
            <Image source = {item.avatar} style={styles(selectedTheme).avtarImage} />
            <View style={styles(selectedTheme).notificationLeftContainer}>
                <View style={styles(selectedTheme).titleContainer} >
                <Text style={styles(selectedTheme).titleText}>{item.name}</Text>
                <Text style={styles(selectedTheme).labelText2}>{item.created_at}</Text>
                </View>
                    
                    <Text style={styles(selectedTheme).labelText} >{item.message}</Text>
            </View>
        </View>
    );

}
export default Notification