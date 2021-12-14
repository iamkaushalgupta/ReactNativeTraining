import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";


const Button = (props:any) => {
        return (
            <View style={styles(props.o).container}>
                <TouchableOpacity style={styles(props.o).Button} onPress={()=>(props.navigation.navigate(props.name))}>
                <View style={styles(props.o).block} >                    
                    <Image source={props.image} style={styles(props.o).icon}/>
                    <Text style={styles(props.o).iconName}>{props.text}</Text>
                    </View>
                    <Image source={require('../../assets/right_arrow.png')} style={styles(props.o).arrow} />
                </TouchableOpacity>
                <View style={styles(props.o).line}></View>
            </View>
    )
}

export default Button ;
