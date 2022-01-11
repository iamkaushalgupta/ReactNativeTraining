import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";


const HeaderComponent = ({ firstImage, heading, secondImage, secondImageNavigate, navigation, firstImageNavigate }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity disabled={(firstImageNavigate != "") ? false : true} style={[styles.firstButton, { borderWidth: (firstImage != "") ? 2 : 0 }]} onPress={() => firstImageNavigate()}>
                <Image source={firstImage} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.heading}>{heading}</Text>
            <TouchableOpacity disabled={(secondImageNavigate != "") ? false : true} onPress={() => (secondImageNavigate != "") ? navigation.navigate(secondImageNavigate) : ""}>
                <Image source={secondImage} style={styles.secondImage} />
            </TouchableOpacity>

        </View>
    )
}
export default HeaderComponent;