import React, { memo } from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./style";


interface InputProps {
    placeholder: string
    value: string
    onChangeText: (t: string) => void
    Switch: boolean
    setSwitch: (t: boolean) => void


}

const InputText = (props: InputProps) => {
    return (
        <View>
            <View style={styles.textinput}>
                <TextInput
                    placeholder={props.placeholder}
                    onChangeText={(text) =>{ props.onChangeText(text),
                    props.setSwitch(false)
                    }} />
            </View>
            {props.Switch && <Text style={styles.errorText}>{props.value} is invalid</Text>}
        </View>

    );
}

export default memo(InputText);