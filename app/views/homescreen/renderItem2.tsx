import React from "react";
import {  Image, Text, TouchableOpacity,
     View,
    StatusBar, 
    ScrollView,
    FlatList,
    ImageBackground} from 'react-native';
import styles from './style'
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
interface InputProp{
    navigation: any,
    
    item:{
        id:number,
        title:string,
        thumbnail:any,

    },
    index:number
}

const RenderItem2 = (props:InputProp)=>{
    const {
        item,
        index,
        navigation
    } = props
    return(
        <ImageBackground source={item.thumbnail} style={styles.render2Container}  imageStyle={{borderRadius:10}} >
            <Text style={styles.render2TitleText}>{item.title}</Text>
        </ImageBackground>
    )
}

export default RenderItem2;