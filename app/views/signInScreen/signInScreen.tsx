import React from "react";
import {View,Text,
TouchableOpacity} from 'react-native';
import styles from "./style";
import UseOrientation from "../../config/useOrientation";
import { HeaderLogo,TextAndInputField,
} from "../../common";
import { string } from "../../constants";

const SignInScreen=()=>{
    const o=UseOrientation()
    return(
        <View style={styles(o).container}>
            <HeaderLogo/>
                <Text style={styles(o).mainheading}>{string.keywords.letssignyouin}</Text>
                <Text style={styles(o).labelText}>{string.keywords.welcomebackyouvebeenmissed}</Text>
                <TextAndInputField name="Email"/>
                <TextAndInputField name="Password"/>
                <TouchableOpacity>
              
                <Text style={styles(o).labelForgetText}>{string.keywords.forgetpassword}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles(o).signinButton}>
                        <Text style={styles(o).signinButtonText}>{string.keywords.signin}</Text>
                    </TouchableOpacity>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles(o).labelText}>{string.keywords.donthaveanaccount} </Text>
                    <TouchableOpacity >
                        <Text style={styles(o).colorText}>{string.keywords.signup}</Text>
                    </TouchableOpacity>
             
                </View>

        
        </View>
    )
}

export default SignInScreen