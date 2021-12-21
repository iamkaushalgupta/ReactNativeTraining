import React, { useState } from "react";
import {Text,View,TouchableOpacity,Image,Switch} from 'react-native';
import { icon, UseOrientation } from "../../config";
import styles from "./styles";

const CommunicationPrefernces=(props:any)=>{

    const[voiceMessageState,setVoiceMessageState]=useState(false);
    const [smsState,setSmsState]=useState(false)
    const[whatsappState,setWhatsappState]=useState(false)

    const RenderItem=(Input:any)=>{
        return(
            <View style={styles(o).commonContainer}>
                    <View >
                          <Text style={styles(o).text}>{Input.text}</Text>
                    </View>
                    <View style={styles(o).innerContainer}>
                    <Text style={styles(o).activeInactiveText}>{!Input.isEnabled?"Inactive":"Active"}</Text>
                    <Switch style={styles(o).button}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor='white'
         onValueChange={(item)=>Input.setState(item)}
        value={Input.isEnabled}
      />
      </View>
   

            </View>
        )
    }

    const o=UseOrientation()
    return(
        <View style={styles(o).container}>
                        <View style={styles(o).header}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <Image
                                    style={styles(o).icon}
                                    source={icon.left_arrow}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    style={styles(o).icon}
                                    source={icon.help}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles(o).heading}>Communication Prefernces</Text>
                            <RenderItem text="Voice Messages" isEnabled ={voiceMessageState} setState={setVoiceMessageState}/>
                            <RenderItem text="SMS" isEnabled={smsState} setState={setSmsState}/>
                            <RenderItem text="WhatsApp"isEnabled={whatsappState} setState={setWhatsappState}/>

                        </View>
        </View>
 
 )

}

export default CommunicationPrefernces