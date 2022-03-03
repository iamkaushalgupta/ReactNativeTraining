import React from "react";
import { Button, Text, View } from 'react-native';
import HomeMapScreen from "../homeMapScreen/homeMapScreen";
import styles from './style'

interface homeProp{
    navigation: any
}
const HomeScreen = (props:homeProp) => {
 const {navigation} = props;
 console.log()
    return (
        <View style={styles.container}>
            <HomeMapScreen/>
            <Text>
                Home Screen
            </Text>

        </View>
    );
}
export default HomeScreen;