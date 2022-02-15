import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";


const SimpleComponent = (props:any) => {
    
    
    return (
        <View style={[styles.container,props.containerStyle]}>
            <Text style={[styles.heading,props.headingStyle]}>{props.heading}</Text>
            <TouchableOpacity style={[styles.button,props.buttonStyle]} onPress={()=>props.onPress()}  >
                <Text style={[styles.buttonText,props.buttonTextStyle]}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SimpleComponent;