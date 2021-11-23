import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { InputText, Label, ButtonC } from '../../common';

interface SignIprops {
    wrongName: boolean,
    wrongEmail: boolean,
    wrongContact: boolean
    wrongPassword: boolean
    name: string
    email: string
    contact: string
    password: string
    setNameResult: (t: boolean) => void;
    setEmailResult: (t: boolean) => void;
    setContactResult: (t: boolean) => void;
    setPasswordResult: (t: boolean) => void;
    setName: (t: string) => void;
    setEmail: (t: string) => void;
    setContact: (t: string) => void;
    setPassword: (t: string) => void;
    clickHandler: () => void;

}

const SignUpScreen = (props: SignIprops) => {
    const {
        wrongName,
        wrongEmail,
        wrongContact,
        wrongPassword,
        name,
        email,
        contact,
        password,
        setNameResult,
        setEmailResult,
        setContactResult,
        setPasswordResult,
        setName,
        setEmail,
        setContact,
        setPassword,
        clickHandler,
    } = props;

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.text}> Welcome!!!</Text>
                    <Text style={styles.secondText}>Register Now</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.innerContainer}>
                        <Label text="Name" />
                        <InputText
                            placeholder="Your Name"
                            value={name}
                            onChangeText={(name) => setName(name)}
                            secureTextEntry={false}
                            Switch={wrongName}
                            setSwitch={(wrongName) => setNameResult(wrongName)} />

                        <Label text="Email" />
                        <InputText
                            placeholder="Your Email"
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            secureTextEntry={false}
                            Switch={wrongEmail}
                            setSwitch={(wrongEmail) => setEmailResult(wrongEmail)} />

                        <Label text="Contact" />
                        <InputText placeholder="Your Contact" value={contact}
                            onChangeText={(contact) => setContact(contact)} Switch={wrongContact}
                            secureTextEntry={false}
                            setSwitch={(wrongContact) => setContactResult(wrongContact)} />

                        <Label text="Password" />
                        <InputText placeholder="Your Password" value={password}
                            onChangeText={(password) => setPassword(password)} Switch={wrongPassword}
                            secureTextEntry={true}
                            setSwitch={(wrongPassword) => setPasswordResult(wrongPassword)} />

                        <ButtonC text="Sign Up"
                            clickHandler={clickHandler}
                        />
                    </View>


                </View>

            </View>
        </ScrollView>
    );
}
export default SignUpScreen;