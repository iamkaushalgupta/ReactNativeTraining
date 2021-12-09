import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./style";

export const Logo = () => {
    return (
        <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../../assets/header.png')}

        />
        </View>
    );
}

export default Logo;