import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from "./style";
import { icons } from "../../constants";

const TextAndPasswordInput = (props: any) => {
    const [onoff, setOnOff] = useState(true)
    return (
        <View>
             <View style={styles().labelContainer}>
            <Text style={styles().labelText}>{props.name}</Text>
      
            </View>
            <View style={styles().inputContainer}>
                <TextInput numberOfLines={1} style={styles().inputText}
                secureTextEntry={onoff}
                onChangeText={(item)=>props.onChangeText(item)}
                >
                </TextInput>

               <TouchableOpacity onPress={()=>setOnOff(!onoff)} style={styles().onoffButton}> 
                   {onoff && <Image source={icons.eye_off} style={styles().icon} />}
                    {!onoff && <Image source={icons.eye_on} style={styles().icon} />}
                </TouchableOpacity>
            </View>
            <Text style={styles().invalidText}>{props.errorText}</Text>
        </View>
    );

}

export default TextAndPasswordInput;