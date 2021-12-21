import React,{useState} from 'react';
import {Text , View , Image, ScrollView} from 'react-native';
import { Button } from '../../common/index';
import styles from "./style"
import { icon,string,UseOrientation } from '../../config';


const SettingScreen = (props:any) => {
    const o= UseOrientation()
       return (
        <ScrollView style={styles(o).container}>
        
            <View style={styles(o).header}>
                <Image source={{uri:icon.profileImage}} style={styles(o).profileImage} />
                <View style={styles(o).detailText}>
                <Text style={styles(o).name}>Kaushal Gupta</Text>
                <Text style={styles(o).colorText}>kaushalgupta198@gmail.com</Text>
                
                </View>
                
            </View>
            <View style={styles(o).longLine}></View>
           <Text style={styles(o).text}>{string.manageAccount}</Text>
            <View>
                <Button 
                 o={o}
                 text={string.profile}
                image={icon.profile}
                navigation={props.navigation}
                name = "Profile"
                />
                <Button 
                text={string.changePassword}
                image={icon.padlock}
                 o={o}
                 navigation={props.navigation}
                 name = "ChangePassword"
 

                />
                <Button 
                text= {string.communicationPreference}
                image={icon.communication}
                name="CommunicationPrefernces"
                navigation={props.navigation}
                 o={o}
                />
                <Button 
                text={string.changeLanguage}
                image={icon.translate}
                 o={o}
                />
                <Button 
                text={string.signOut}
                image={icon.logout}
                 o={o}
                />
            
            </View>
        </ScrollView>
    )
}

export default SettingScreen;