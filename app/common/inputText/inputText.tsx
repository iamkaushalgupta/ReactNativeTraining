import React from "react";
import { TextInput,View } from "react-native";
import styles from "./style";

interface InputProps
{
    placeholder: string
}

const InputText=(props: InputProps)=>
{
    return(
        <View style={styles.textinput}>
            <TextInput placeholder={props.placeholder}/>
        </View>
    );
}

export default InputText;