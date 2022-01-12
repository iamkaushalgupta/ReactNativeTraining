import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { TextAndInputField, TextAndDateInputField, HeaderComponent } from "../../common";
import { icons, string, images } from "../../constants";
import styles from "./style";


const MyAccountEditScreen = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <HeaderComponent firstImage={icons.left_arrow} secondImage={images.transparent} navigation={navigation} heading={string.screens.MyAccount} secondImageNavigate={""} firstImageNavigate={navigation.goBack} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <TextAndInputField name="Full Name" type="default" check="name"/>
                    <TextAndInputField name="Phone Number" type="phone-pad"  check="contact"/>
                    <TextAndInputField name="ID Card" type="default" check = "idCard"/>
                    <TextAndDateInputField name="Date of Birth" mindate={new Date(new Date().setFullYear(new Date().getFullYear() -10))} maxdate={new Date()}/>
                    <TextAndInputField name="Gender" type="default" check="gender" />
                    <TextAndInputField name="Email" type="email-address" check="email" />
                    <TextAndInputField name="Address" type="default" />
                </View>
            </ScrollView>


            <TouchableOpacity style={styles.addButton} >
                <Text style={styles.addText}>{string.keywords.save}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default MyAccountEditScreen