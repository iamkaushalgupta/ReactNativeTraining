import React from "react";
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
import styles from './style'
import {
    View,
    Text,
    StatusBar,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

interface InputProps{
    item:{
        id:number,
        image:any,
        sub_title:string,
        title:string
    },
    index:number,
}
const RenderItem = (props:InputProps)=>{
    const {item,index} =props;
    return(
        <View style={styles.renderContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.subtitleText}>{item.sub_title}</Text>
            <Image source ={item.image} style={styles.renderImage}/>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.buttonText}>{constants.keywords.next}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem