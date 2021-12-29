import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import { HeaderLogo, TextAndInputField } from "../../common";
import { string } from "../../constants";
import styles from "./style";
import UseOrientation from "../../config/useOrientation";
// import OtpInputs from 'react-native-otp-inputs';
import OTPTextView from 'react-native-otp-textinput';
const OTPAuthenticationScreen=(props)=>{
    const o=UseOrientation()
    return(
    <View style={styles(o).container}>
            <HeaderLogo/>
            <Text style={styles(o).mainheading}>{string.keywords.otpauthentication}</Text>
                <Text style={styles(o).labelText}>{string.keywords.anauthenticationcodehasbeensenttoregesiteredemailid}</Text>
                <OTPTextView
                style={styles(o).textInput}
          inputCount={4}
          keyboardType="numeric"
        />
            <View style={styles(o).sendButtonContainer}>
            <TouchableOpacity style={styles(o).sendButton}>
                        <Text style={styles(o).sendButtonText}>{string.keywords.continue}</Text>
                    </TouchableOpacity>
                    </View> 

            <Text style={styles(o).labelText}>{string.keywords.bysigningupyouagreetoour}</Text>
            <TouchableOpacity>
                <Text style={styles(o).colorLabelText}>{string.keywords.termsandcondition}</Text>
            </TouchableOpacity>
    </View>
)

}

export default OTPAuthenticationScreen