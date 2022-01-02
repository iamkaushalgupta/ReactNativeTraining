import React from "react";
import {
    View, Text, TouchableOpacity, Image
} from "react-native";
import styles from './style'
import { icons, string,images } from '../../constants'
import UseOrientation from "../../config/useOrientation";
import { TextAndPasswordInput } from "../../common";

const ChangePassword = (props: any) => {
    const o = UseOrientation()
    return (
        <View style={styles(o).container}>
            <View style={styles(o).upperContainer}>
                <TouchableOpacity style={styles(o).backButton} onPress={() => props.navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles(o).icon} />
                </TouchableOpacity>

                <Text style={styles(o).heading}> {string.screens.changepassword}</Text>
                <TouchableOpacity>
                        <Image source={images.transparent} style={styles(o).icon}/>
                        </TouchableOpacity>
            </View>

            
            <TextAndPasswordInput name="Current Password"/>
            <TextAndPasswordInput name="New Password"/>
            <TextAndPasswordInput name="Retype New Password"/>    

            <View style={styles(o).sendButtonContainer}>
            <TouchableOpacity style={styles(o).sendButton}  onPress={()=>props.navigation.navigate('Setting')}>
                        <Text style={styles(o).sendButtonText}>{string.screens.changepassword}</Text>
                    </TouchableOpacity>
                    </View>



        </View>
    )
}
export default ChangePassword;