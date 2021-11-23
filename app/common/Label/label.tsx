import React from "react";
import styles from "./style";
import { Text, View } from 'react-native';

const Label = (props: any) => {
    return (
        <View>
            <Text style={styles.text_footer}>{props.text}</Text>
        </View>);
}

export default Label;