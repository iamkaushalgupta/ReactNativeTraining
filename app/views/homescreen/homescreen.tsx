import React from "react";
import { Button, Text, View } from 'react-native';
import styles from './style'

interface homeProp{
    navigation: any
}
const HomeScreen = (props:homeProp) => {
 const {navigation} = props;
 console.log()
    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
            <Button title="Profile" onPress={() => navigation.navigate("Profile")}></Button>
        </View>
    );
}
export default HomeScreen;