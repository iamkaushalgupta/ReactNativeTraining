import React, { useState } from "react";
import {View,Text,TextInput, TouchableOpacity, Image} from 'react-native';
import styles from "./style";
import { icons } from "../../constants";

const TextAndInputField=(props:any)=>{
    const [onoff,setOnOff]=useState(false)
    const validation=(name:string,value:string)=>{
        if(name=='Email')
        {
            if(value!='kaushalgupta198@gmail.com')
                setOnOff(true)
            else 
                setOnOff(false)
        }

        if(name=='Password')
        {
            if(value!='123456789')
            setOnOff(true)
            else 
                setOnOff(false)
        }
    }

    return(
        <View>
                <View style={styles().labelContainer}>
                <Text style={styles().labelText}>{props.name}</Text>
                {
                    onoff&&
                    <Text style={styles().invalidText}>Invalid {props.name}</Text>
                }
                </View>  

                <View style={styles().inputContainer}>
                <TextInput numberOfLines={1} style={styles().inputText} onChangeText={(text)=>(validation(props.name,text))} keyboardType={props.type} >
                           
                           
                            </TextInput>

                    {!onoff&& <Image  source={icons.check} style={styles().icon}/>}
                   {onoff&& <Image  source={icons.close} style={styles().icon}/>}

                </View>
        </View>
    );

}

export default TextAndInputField;