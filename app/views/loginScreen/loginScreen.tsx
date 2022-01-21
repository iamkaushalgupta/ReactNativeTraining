import React from "react";
import styles from "./style";
import {View,Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import {
    constants,
    theme,
    COLORS,
    darkTheme,
    lightTheme,
    selectedTheme,
    images,
    icons,
    dummyData,
} from '../../constants'

interface InputProps{
    navigation:any
}

const LoginScreen = (props:InputProps)=>{
    const {navigation} =props
    return(
        <View  style ={styles.container}>
        
           <ImageBackground 
           source={(selectedTheme.name=='dark')?images.bg_dark:images.bg} 
           style={styles.upperContainer}  resizeMode="stretch">
            <Text style={styles.heading}>{constants.screens.login}</Text>
            </ImageBackground>
           <View style={styles.wrapperContainer}>
           <Text style={styles.labelText}>{constants.keywords.userNameorEmail}</Text>
           <TextInput style ={styles.inputField}></TextInput>
           <Text style={styles.labelText}>{constants.keywords.password}</Text>
           
           <View style={styles.passwordContainer}>
           <TextInput style ={styles.passwordField}></TextInput>
            <TouchableOpacity>
                <Image source={icons.eye} style={styles.icon}/>
            </TouchableOpacity>
           </View>
           
           <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>{constants.keywords.LOGIN}</Text>
           </TouchableOpacity>  
           <Text style={styles.labelText2}>{constants.keywords.orloginwith}</Text>
         
            <View style={styles.socialMediaButtonsContainer}>
                <TouchableOpacity style={styles.socialMediaButton}>
                    <Image source={icons.google} style={styles.socialMediaIcon}></Image>
                    <Text style={styles.socialMediaText}>{constants.keywords.google}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialMediaButton} >
                <Image source={icons.facebook} style={styles.socialMediaIcon}></Image>
                <Text style={styles.socialMediaText}>{constants.keywords.facebook}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.innerContainer}>
            <Text style={styles.labelText2}>{constants.keywords.newUser}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <Text style={styles.navigateButtonText}>  {constants.keywords.signUpNow}</Text>
            </TouchableOpacity>
            </View>
           </View>

            
        </View>
    );
}
export default LoginScreen