import React from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import styles from "./style";


const HeaderComponent=({firstImage,heading,secondImage,secondImageNavigate,navigation}:any)=>{
    return(
    <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={firstImage} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.heading}>{heading}</Text>
                <TouchableOpacity disabled={(secondImageNavigate!="")?false:true} onPress={()=>(secondImageNavigate!="")?navigation.navigate(secondImageNavigate):""}>
                    <Image source={secondImage} style={styles.iconProfile} />
                </TouchableOpacity>
        
            </View>
    )
}
export default HeaderComponent;