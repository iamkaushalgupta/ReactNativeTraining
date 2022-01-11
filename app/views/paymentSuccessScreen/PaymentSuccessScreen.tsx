import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { string, images } from "../../constants";

const PaymentSuccess = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.midContainer}>
                <Image source={images.payment_success} />
                <Text style={styles.congratulationText}>{string.keywords.congratulations}</Text>
                <Text style={styles.labelText}>{string.keywords.paymentSuccesfullyMade}</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.ButtonText}>{string.keywords.done}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PaymentSuccess;