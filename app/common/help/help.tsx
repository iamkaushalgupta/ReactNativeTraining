import React from "react";
import { TouchableOpacity,Image } from "react-native";
import styles from "./style";
 
const Help = () => {
    return (
        <TouchableOpacity>
            <Image
                style={styles.rightlogo}
                source={require('../../assets/help.png')}
            />
        </TouchableOpacity>
    )
}

export default Help;