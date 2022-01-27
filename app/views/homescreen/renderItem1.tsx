import React from "react";
import {  Image, Text, TouchableOpacity,
     View,
    StatusBar, 
    ScrollView,
    FlatList} from 'react-native';
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
        <View style={styles.renderContainer1}>
            <Image source={item.thumbnail} style={styles.render1MainImage}/>
            <View style={styles.render1InnerContainer}>
                <TouchableOpacity>
                    <Image source={icons.play_1} style={styles.playIcon}/>
                </TouchableOpacity>
                <View>
                <Text style={styles.render1TitleText}>{item.title}</Text>
                <View style={styles.render1TimeContainer}>
                    <Image source={icons.time} style ={styles.timeIcon}/>
                    <Text style={styles.render1DurationText}>{item.duration}</Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default RenderItem1;