import React from 'react';
import {Text , View , Image, ScrollView} from 'react-native';
import { Button } from '../../common/index';
import { UseOrientation } from '../../config';
import styles from "./style"

const SettingScreen = () => {

    const o= UseOrientation()
    return (
        <ScrollView style={styles(o).container}>
            <View style={styles(o).header}>
                <Image source={require('../../assets/user_avatar.png')} style={styles(o).profileImage} />
                <View style={styles(o).detailText}>
                <Text style={styles(o).name}>Kaushal Gupta</Text>
                <Text>kaushalgupta198@gmail.com</Text>
                
                </View>
                
            </View>


            <View style={styles(o).longLine}></View>


           <Text style={styles(o).text}>MANAGE ACCOUNT</Text>

            <View>
                <Button 
                 o={o}
                 text="Profile"
                image={require('../../assets/profile.png')}
                />
                <Button 
                text="Change Password"
                image={require('../../assets/padlock.png')}
                 o={o}
                />
                <Button 
                text= "Communication Preferences"
                image={require('../../assets/communication.png')}
                 o={o}
                />
                <Button 
                text="Change Language"
                image={require('../../assets/translate.png')}
                 o={o}
                />
                <Button 
                text="Sign Out"
                image={require('../../assets/logout.png')}
                 o={o}
                />
            
            </View>
        </ScrollView>
    )
}

export default SettingScreen;