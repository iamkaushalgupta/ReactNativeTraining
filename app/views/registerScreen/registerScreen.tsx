import React from "react";
import styles from "./style";
import {
    View, Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar

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
        <View style={styles(selectedTheme).container}>
            <StatusBar animated={true} 
        // backgroundColor={(selectedTheme.name=='light')?COLORS.additionalColor9:COLORS.gray80 }  
        barStyle={"dark-content"}
        />            
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
                <Text style={styles(selectedTheme).labelText}>{constants.keywords.username}</Text>
                <TextInput style={styles(selectedTheme).inputField}></TextInput>
                <Text style={styles(selectedTheme).labelText}>{constants.keywords.email}</Text>
                <TextInput style={styles(selectedTheme).inputField}></TextInput>
                <Text style={styles(selectedTheme).labelText}>{constants.keywords.password}</Text>
                <View style={styles(selectedTheme).passwordContainer}>
                    <TextInput style={styles(selectedTheme).passwordField}></TextInput>
                    <TouchableOpacity>
                        <Image source={icons.eye} style={styles(selectedTheme).icon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles(selectedTheme).button}>
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