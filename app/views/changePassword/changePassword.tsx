import React, { useState } from "react";
import {Image, Text, TextInput, TouchableOpacity, View,ScrollView} from 'react-native';
import styles from "./style";
import { UseOrientation } from "../../config";


const ChangePassword=(props:any)=>{
    const o=UseOrientation()
    const[switchCurrentPassword,setSwitchCurrentPassword]=useState(true)
    const[switchPassword,setSwitchPassword]=useState(true)
    const[switchConfirmPassword,setSwitchConfirmPassword]=useState(true)

    return(
        <ScrollView style={styles(o).container}>
            <Image style={styles(o).logo} source={require('../../assets/logo.png')}></Image>
            <Text style={styles(o).text}>Welcome!</Text>
            <TextInput secureTextEntry={switchCurrentPassword} style={styles(o).textinput}placeholder="Current Password"></TextInput>
            <TextInput secureTextEntry={switchPassword} style={styles(o).textinput} placeholder="Password"></TextInput>
            <TextInput secureTextEntry={switchConfirmPassword} style={styles(o).textinput} placeholder="Confirm Password"></TextInput>
            <TouchableOpacity style={styles(o).continueButton}>
                <Text style={styles(o).continueText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>(props.navigation.goBack())} style={styles(o).backButton}>
                    <Text style={styles(o).backText}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default ChangePassword;