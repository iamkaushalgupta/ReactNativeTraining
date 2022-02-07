import React, { useState } from "react";
import styles from "./style";
import {View,Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar

} from 'react-native';
import {
    constants,
    COLORS,
    selectedTheme,
    images,
    icons,
} from '../../constants'
import ErrorMessage from "../../config/errorMessage";

interface InputProps{
    navigation:any,
    email: React.MutableRefObject<string>,
    subMit: () => void,
    password: React.MutableRefObject<any>
    emailError: any,
    passwordError:any,
    setRefresh: (item: boolean) => void
    refersh: boolean,
    hidePassword:boolean,
    setHidePassword:(item:boolean)=>void
}

const LoginScreen = (props:InputProps)=>{
    const {navigation,
        email,
    password,
    subMit,
    emailError,
    passwordError,
    setRefresh,
    refersh,
    hidePassword,
    setHidePassword
    } =props
    return(
        <View  style ={styles(selectedTheme).container}>
        <StatusBar animated={true} 
        backgroundColor={(selectedTheme.name=='light')?COLORS.additionalColor9:COLORS.gray80 }  
        barStyle={"dark-content"}
        />
    
        
           <ImageBackground 
           source={(selectedTheme.name=='dark')?images.bg_dark:images.bg} 
           style={styles(selectedTheme).upperContainer}  resizeMode="stretch">
            <Text style={styles(selectedTheme).heading}>{constants.screens.login}</Text>
            </ImageBackground>
           <View style={styles(selectedTheme).wrapperContainer}>
           <View style={styles(selectedTheme).labelContainer}>
           <Text style={styles(selectedTheme).labelText}>{constants.keywords.userNameorEmail}</Text>
           {(emailError==true)&&<Text style={styles(selectedTheme).errorMessage}>{ErrorMessage.email}</Text>}
           </View>
           <TextInput style ={styles(selectedTheme).inputField} onChangeText={(item)=>email.current=item}></TextInput>
           <Text style={styles(selectedTheme).labelText}>{constants.keywords.password}</Text>
           
           <View style={styles(selectedTheme).passwordContainer}>
           <TextInput style ={styles(selectedTheme).passwordField}
           onChangeText={(item)=>password.current=item}
            secureTextEntry={hidePassword}
           ></TextInput>
            <TouchableOpacity onPress={()=>setHidePassword(!hidePassword)}>
                {(hidePassword)?<Image source={icons.eye_close} style={styles(selectedTheme).icon}/>:
                <Image source={icons.eye} style={styles(selectedTheme).icon}/>}
            </TouchableOpacity>
           </View>
         { (passwordError==true)&&<Text style={styles(selectedTheme).errorMessage}>{ErrorMessage.passWord}</Text>}
           
           <TouchableOpacity style={styles(selectedTheme).button} 
           onPress={()=>{
            subMit(),
            setRefresh(refersh)
        }}
               >
               <Text style={styles(selectedTheme).buttonText}>{constants.keywords.LOGIN}</Text>
           </TouchableOpacity>  
           <Text style={styles(selectedTheme).labelText2}>{constants.keywords.orloginwith}</Text>
         
            <View style={styles(selectedTheme).socialMediaButtonsContainer}>
                <TouchableOpacity style={styles(selectedTheme).socialMediaButton}>
                    <Image source={icons.google} style={styles(selectedTheme).socialMediaIcon}></Image>
                    <Text style={styles(selectedTheme).socialMediaText}>{constants.keywords.google}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles(selectedTheme).socialMediaButton} >
                <Image source={icons.facebook} style={styles(selectedTheme).socialMediaIcon}></Image>
                <Text style={styles(selectedTheme).socialMediaText}>{constants.keywords.facebook}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles(selectedTheme).innerContainer}>
            <Text style={styles(selectedTheme).labelText2}>{constants.keywords.newUser}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <Text style={styles(selectedTheme).navigateButtonText}>  {constants.keywords.signUpNow}</Text>
            </TouchableOpacity>
            </View>
           </View>

            
        </View>
    );
}
export default LoginScreen