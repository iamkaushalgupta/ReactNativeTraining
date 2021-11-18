import React from "react";
import { TouchableOpacity,View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./style";

interface InputProps
{
    text: string
}

const ButtonC=(props: InputProps)=>
{
    return(
        <View>        
            <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { }}
                    >

                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>{props.text}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>

    );
}

export default ButtonC;