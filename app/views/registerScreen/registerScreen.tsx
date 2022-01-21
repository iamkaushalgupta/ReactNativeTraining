import React from "react";
import styles from "./style";
import {
    View, Text,
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

interface InputProps {
    navigation: any,
    student:boolean,
    setStudent: (item: boolean) => void
}

const LoginScreen = (props: InputProps) => {
    const { navigation,
        setStudent,
        student
    } = props
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{constants.screens.Register}</Text>
            <ScrollView>
            <View style={styles.upperContainer}>
                <TouchableOpacity 
                style={[styles.toggleButton,
                {backgroundColor:(student)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor5}]} 
                onPress={()=>setStudent(true)}
                >
                    <View style={styles.circleContainer}>
                        {
                            student&&<Image source={icons.checked} style={styles.tickIcon} resizeMode="contain"/>
                        }
                        
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.iamText,{
                            color:(student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.iama}</Text>
                        <Text style={[styles.studentTeacherText,{
                            color:(student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.student}</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={[styles.toggleButton,
                    {backgroundColor:(!student)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor5}]}
                onPress={()=>setStudent(false)}>
                    <View style={styles.circleContainer}>
                        {
                            !student&&<Image source={icons.checked} style={styles.tickIcon} resizeMode="contain" />
                        }
                        
                    </View>
                    <View>
                        <Text style={[styles.iamText,{
                            color:(!student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.iama}</Text>
                        <Text style={[styles.studentTeacherText,{
                             color:(!student)?selectedTheme.textColor4:selectedTheme.textColor
                        }]}>{constants.keywords.teacher}</Text>
                    </View>
                </TouchableOpacity>        

            </View>
            <View style={styles.wrapperContainer}>
                <Text style={styles.labelText}>{constants.keywords.username}</Text>
                <TextInput style={styles.inputField}></TextInput>
                <Text style={styles.labelText}>{constants.keywords.email}</Text>
                <TextInput style={styles.inputField}></TextInput>
                <Text style={styles.labelText}>{constants.keywords.password}</Text>
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.passwordField}></TextInput>
                    <TouchableOpacity>
                        <Image source={icons.eye} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{constants.keywords.createAccount}</Text>
                </TouchableOpacity>
                <Text style={styles.labelText2}>{constants.keywords.orSignUpWith}</Text>

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
                    <Text style={styles.labelText2}>{constants.keywords.alreadyUser}</Text>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.navigateButtonText}>  {constants.keywords.Login}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>

        </View>
    );
}
export default LoginScreen