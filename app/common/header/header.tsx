import React from "react";
import { View,Image, TouchableOpacity } from "react-native";
import { icon } from "../../config";
import styles from "./style";

const Header=()=>{

    return(
        <View style={styles.container}>
            <Image style={styles.logoImage}
            source={icon.header
            }
            />

        <TouchableOpacity>
            
                <Image
                    style={styles.helpImage}
                    source={icon.help}
                />
        </TouchableOpacity>
        </View>
    )
}

export default Header;