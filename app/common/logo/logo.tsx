import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { UseOrientation } from "../../config";
import styles from "./style";

export const Logo = () => {
    const o=UseOrientation()    
    return (
        <View style={styles(o).container}>
        <Image
            style={styles(o).logo}
            source={require('../../assets/header.png')}

        />
        </View>
    );
}

export default Logo;