import React, { useEffect } from "react";
import {View,Text,Appearance} from 'react-native';
const Apperance_demo = ()=>{
    //For Android
    //The color scheme preference will map to the
    // user's Light or Dark theme preference on Android 10 (API level 29) devices and higher.

    // For IOS
    //The color scheme preference will map to the 
    //user's Light or Dark Mode preference on iOS 13 devices and higher.
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
        console.log('Dark')
    }
    else{
        console.log('Light')
    }

    useEffect(()=>{
       const abc= Appearance.addChangeListener(()=>{
            console.log('hello')       
            //called whenever the theme of the app is changed             
        })

        return ()=>abc.remove() 
    },[Appearance])

        return(
            <View>
                    <Text>Apperance</Text>
            </View>
        )
}

export default Apperance_demo;