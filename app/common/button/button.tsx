import React, { memo } from "react";
import { TouchableOpacity, View, Text, NativeModules } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./style";

interface InputProps {
    text: string;
    clickHandler: () => void;

}

const ButtonC = (props: InputProps) => {

    const {
        clickHandler,
        text

    } = props;


    return (
        <View>
            <TouchableOpacity
                style={styles.signIn}
                onPress={() => clickHandler()}
            >

                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

    );
}

export default memo(ButtonC);