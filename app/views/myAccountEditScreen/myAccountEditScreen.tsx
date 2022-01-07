import React,{useState} from "react";
import { View,Text,TouchableOpacity,Image, ScrollView } from "react-native";
import { TextAndInputField,TextAndDateInputField,HeaderComponent } from "../../common";
import { icons,string,images } from "../../constants";
import styles from "./style";


const MyAccountEditScreen=({navigation}:any)=>{

    return(
        <View style={styles.container}>
            <HeaderComponent firstImage={icons.left_arrow} secondImage={images.transparent} navigation={navigation} heading={string.screens.MyAccount} secondImageNavigate={""} />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
                <TextAndInputField name="Full Name" type ="default"/>
                <TextAndInputField name="Phone Number" type="phone-pad"/>
                <TextAndInputField name="ID Card" type ="default"/>
                    <TextAndDateInputField name="Date of Birth"/>
                <TextAndInputField name="Gender" type ="default"/>
                <TextAndInputField name="Email" type="email-address"/>
                <TextAndInputField name="Address" type ="default"/>  
            </View>
            </ScrollView>


            <TouchableOpacity style={styles.addButton} >
            <Text style={styles.addText}>{string.keywords.save}</Text>
        </TouchableOpacity>
        </View>
    )
}
export default MyAccountEditScreen