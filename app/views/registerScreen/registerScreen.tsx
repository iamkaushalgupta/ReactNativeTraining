import React from "react";
import styles from "./style";
import {
    View, Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,

} from 'react-native';
import {
    constants,
    selectedTheme,
    icons,

} from '../../constants'
import ErrorMessage from "../../config/errorMessage";

interface InputProps {
    navigation: any,
    student:boolean,
    setStudent: (item: boolean) => void
    email: React.MutableRefObject<string>,
    subMit: () => void,
    password: React.MutableRefObject<any>
    emailError: any,
    passwordError:any,
    setRefresh: (item: boolean) => void
    refersh: boolean,
    hidePassword:boolean,
    setHidePassword:(item:boolean)=>void,
    username: React.MutableRefObject<any>,
    userNameError: any
}

const LoginScreen = (props: InputProps) => {
    const { navigation,
        setStudent,
        student,
        email,
    password,
    username,
    subMit,
    emailError,
    passwordError,
    userNameError,
    setRefresh,
    refersh,
    hidePassword,
    setHidePassword,

    } = props
    return (
        <View style={styles(selectedTheme).container}>
            <Text style={styles(selectedTheme).heading}>{constants.screens.Register}</Text>
            <ScrollView>
            <View style={styles(selectedTheme).upperContainer}>
                <TouchableOpacity 
                style={[styles(selectedTheme).toggleButton,
                {backgroundColor:(student)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor5}]} 
                onPress={()=>setStudent(true)}
                >
                    <View style={[styles(selectedTheme).circleContainer,{
                        backgroundColor:(student)?selectedTheme.textColor4:selectedTheme.backgroundColor1
                    }]}>
                        {
                            student&&<Image source={icons.checked} style={styles(selectedTheme).tickIcon} resizeMode="contain"/>
                        }
                        
                    </View>
                    <View style={styles(selectedTheme).textContainer}>
                        <Text style={[styles(selectedTheme).iamText,{
                            color:(student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.iama}</Text>
                        <Text style={[styles(selectedTheme).studentTeacherText,{
                            color:(student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.student}</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={[styles(selectedTheme).toggleButton,
                    {backgroundColor:(!student)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor5}]}
                onPress={()=>setStudent(false)}>
                    <View style={[styles(selectedTheme).circleContainer,{
                         backgroundColor:(student)?selectedTheme.textColor4:selectedTheme.backgroundColor1
                    }]}>
                        {
                            !student&&<Image source={icons.checked} style={styles(selectedTheme).tickIcon} resizeMode="contain" />
                        }
                        
                    </View>
                    <View>
                        <Text style={[styles(selectedTheme).iamText,{
                            color:(!student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.iama}</Text>
                        <Text style={[styles(selectedTheme).studentTeacherText,{
                             color:(!student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.teacher}</Text>
                    </View>
                </TouchableOpacity>        

            </View>
            <View style={styles(selectedTheme).wrapperContainer}>
                <View style={styles(selectedTheme).labelContainer}>
                <Text style={styles(selectedTheme).labelText}>{constants.keywords.username}</Text>
                {(userNameError==true)&&<Text style={styles(selectedTheme).errorMessage}>{ErrorMessage.userName}</Text>}
                </View>
                <View style={styles(selectedTheme).fieldContainer}>
                <TextInput style={styles(selectedTheme).inputField} onChangeText={(item)=>username.current=item} ></TextInput>
                {(userNameError==false)&&<Image source={icons.checked} style={styles(selectedTheme).checkIcon} />}
                </View>
                <View style={styles(selectedTheme).labelContainer}>
                <Text style={styles(selectedTheme).labelText}>{constants.keywords.email}</Text>
                {(emailError==true)&&<Text style={styles(selectedTheme).errorMessage}>{ErrorMessage.email}</Text>}
                </View>
                <View style={styles(selectedTheme).fieldContainer}>
                <TextInput style={styles(selectedTheme).inputField} onChangeText={(item)=>email.current=item}></TextInput>
                {(emailError==false)&&<Image source={icons.checked} style={styles(selectedTheme).checkIcon}/>}
                </View>
                <Text style={styles(selectedTheme).labelText}>{constants.keywords.password}</Text>
                <View style={styles(selectedTheme).passwordContainer}>
                    <TextInput style={styles(selectedTheme).passwordField} 
                      secureTextEntry={hidePassword}
                    onChangeText={(item)=>password.current=item} ></TextInput>
                    <TouchableOpacity onPress={()=>setHidePassword(!hidePassword)}>
                    {(hidePassword)?<Image source={icons.eye_close} style={styles(selectedTheme).icon}/>:
                <Image source={icons.eye} style={styles(selectedTheme).icon}/>}
                    </TouchableOpacity>
                </View>
                {(passwordError==true)&&<Text style={styles(selectedTheme).errorMessage}>{ErrorMessage.passWord}</Text>}
                <TouchableOpacity style={styles(selectedTheme).button}  
                onPress={()=>{subMit(),setRefresh(refersh)}}
                >
                    <Text style={styles(selectedTheme).buttonText}>{constants.keywords.createAccount}</Text>
                </TouchableOpacity>
                <Text style={styles(selectedTheme).labelText2}>{constants.keywords.orSignUpWith}</Text>

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
                    <Text style={styles(selectedTheme).labelText2}>{constants.keywords.alreadyUser}</Text>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles(selectedTheme).navigateButtonText}>  {constants.keywords.Login}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>

        </View>
    );
}
export default LoginScreen