import React from "react";
import {
    View, Text, TouchableOpacity, Image
} from "react-native";
import styles from './style'
import { icons, string,images } from '../../constants'
import UseOrientation from "../../config/useOrientation";
import { TextAndPasswordInput } from "../../common";
import { HeaderComponent } from "../../common";
const ChangePassword = (props: any) => {
    const o = UseOrientation()
    return (
        <View style={styles(o).container}>
           <HeaderComponent 
            firstImage={icons.left_arrow}
            secondImage={images.transparent}
            navigation={props.navigation}
            heading={string.screens.changepassword}
            secondImageNavigate={""}
            firstImageNavigate="back" />

            
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