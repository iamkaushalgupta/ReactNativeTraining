import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from "./style";
import { icons } from "../../constants";
import validation from "../../config/validation";
const TextAndInputField = (props: any) => {
    return (
        <View>
            <View style={styles().labelContainer}>
                <Text style={styles().labelText}>{props.name}</Text>
            </View>
            <View style={styles().inputContainer}>
                <TextInput numberOfLines={1} style={styles().inputText}
                 onChangeText={(text) => {props.onChangeText(text)}}
                 keyboardType={props.type} >
                </TextInput>
                {(props.error)  && <Image source={icons.check} style={styles().icon} />}
                
            </View>
        </View>
    );

}

export default TextAndInputField;