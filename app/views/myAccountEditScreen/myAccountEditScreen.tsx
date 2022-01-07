import React,{useState} from "react";
import { View,Text,TouchableOpacity,Image, ScrollView } from "react-native";
import { TextAndInputField,TextAndDateInputField } from "../../common";
import { icons,string,images } from "../../constants";
import styles from "./style";


const MyAccountEditScreen=({navigation}:any)=>{

    return(
        <View style={styles.container}>
           <View style={styles.upperContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.heading}> {string.screens.MyAccount}</Text>
                <TouchableOpacity>
                    <Image source={images.transparent} style={styles.iconProfile} />
                </TouchableOpacity>
        
            </View>

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