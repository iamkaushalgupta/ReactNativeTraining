import React from "react";
import {  Image, Text, TouchableOpacity,
     View,
} from 'react-native';
import styles from './style'
import {
    selectedTheme,
    icons,
} from '../../constants';
interface InputProp{
    navigation: any,
    
    item:{
        id:number,
        title:string,
        duration:string,
        thumbnail:any,

    },
    index:number
}

const RenderItem1 = (props:InputProp)=>{
    const {
        item,
        index,
        navigation
    } = props
    
    return(
        <View style={styles(selectedTheme).renderContainer1}>
            <Image source={item.thumbnail} style={styles(selectedTheme).render1MainImage}/>
            <View style={styles(selectedTheme).render1InnerContainer}>
                <TouchableOpacity>
                    <Image source={icons.play_1} style={styles(selectedTheme).playIcon}/>
                </TouchableOpacity>
                <View>
                <Text style={styles(selectedTheme).render1TitleText}>{item.title}</Text>
                <View style={styles(selectedTheme).render1TimeContainer}>
                    <Image source={icons.time} style ={styles(selectedTheme).timeIcon}/>
                    <Text style={styles(selectedTheme).render1DurationText}>{item.duration}</Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default RenderItem1;