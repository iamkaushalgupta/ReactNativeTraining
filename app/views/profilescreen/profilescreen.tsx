import React, { useEffect, useState } from "react";
import styles from "./style";
import {
    Image, Text, TouchableOpacity,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    ImageBackground,
    TextInput
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

} from '../../constants';

interface InputProps{
    navigation:any
}
import { setSelectedTheme } from "../../constants/theme";


import {useDispatch,useSelector  } from "react-redux";
const ProfileScreen=(props:InputProps)=>{
const [render,setRender]=useState(false);

    const {navigation}=props;
    
    return(
        <View style={styles(selectedTheme).container}>
            <StatusBar animated={true} 
        backgroundColor={(selectedTheme.name=='light')?COLORS.additionalColor9:COLORS.gray80 }  
        barStyle={"dark-content"}
        />
            <View style={styles(selectedTheme).headerContainer}>
            <Text style={styles(selectedTheme).headerText}>{constants.screens.profile}</Text>
            <TouchableOpacity onPress={()=>{setSelectedTheme(),setRender(!render)}}>
                <Image source={icons.sun} style={styles(selectedTheme).sunIcon}/>
            </TouchableOpacity>
            </View>
            <View style={styles(selectedTheme).midContainer}>
            

            </View>
        </View>
    );
}
export default ProfileScreen;   