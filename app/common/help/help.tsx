import React from "react";
import { TouchableOpacity,Image } from "react-native";
import { icon } from "../../config";
import styles from "./style";
 
const Help = () => {
    return (
        <TouchableOpacity>
            <Image
                style={styles.rightlogo}
                source={icon.help}
            />
        </TouchableOpacity>
    )
}

export default Help;