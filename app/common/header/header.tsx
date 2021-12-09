import React from "react";
import { View,Image, TouchableOpacity } from "react-native";
import styles from "./style";

const Header=()=>{

    return(
        <View style={styles.container}>
            <Image style={styles.logoImage}
            source={require('../../assets/header.png')
            }
            />

        <TouchableOpacity>
            
                <Image
                    style={styles.helpImage}
                    source={require('../../assets/help.png')}
                />
        </TouchableOpacity>
        </View>
    )
}

export default Header;