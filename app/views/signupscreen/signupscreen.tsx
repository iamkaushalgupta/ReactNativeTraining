import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { InputText,Label , ButtonC} from '../../common';

const SignUpScreen = () => {
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.text}> Welcome!!!</Text>
                <Text style={styles.secondText}>Register Now</Text>
            </View>


            <View style={styles.footer}>
                <View style={styles.innerContainer}>
                    <Label text="Name"/>

                    <InputText placeholder="Your Name" />
                    <Label text ="Email"/>
                    <InputText placeholder="Your Email" />
                    <Label text = "Contact"/>
                    <InputText placeholder="Your Contact" />
                    <Label text="Password"/>
                    <InputText placeholder="Your Password" />
                    <ButtonC text="Sign Up"/>              
                </View>


            </View>
        </View>
    );
}
export default SignUpScreen;