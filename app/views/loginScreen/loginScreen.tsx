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

interface InputProps{
    navigation:any,
    email: React.MutableRefObject<string>,
    subMit: () => void,
    password: React.MutableRefObject<any>
}

const LoginScreen = (props:InputProps)=>{
    const {navigation,
        email,
    password,
    subMit
    } =props
    const [render,setRender]=useState(false)
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
           <Text style={styles(selectedTheme).labelText}>{constants.keywords.userNameorEmail}</Text>
           <TextInput style ={styles(selectedTheme).inputField} onChangeText={(item)=>email.current=item}></TextInput>
           <Text style={styles(selectedTheme).labelText}>{constants.keywords.password}</Text>
           
           <View style={styles(selectedTheme).passwordContainer}>
           <TextInput style ={styles(selectedTheme).passwordField}
           onChangeText={(item)=>password.current=item}
           ></TextInput>
            <TouchableOpacity>
                <Image source={icons.eye} style={styles(selectedTheme).icon}/>
            </TouchableOpacity>
           </View>
           
           <TouchableOpacity style={styles(selectedTheme).button} 
           onPress={()=>{
            subMit()
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