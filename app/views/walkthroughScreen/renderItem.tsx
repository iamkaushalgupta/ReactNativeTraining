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
    scrollTo: (item: any) => void,
    maxIndex: number
}
const RenderItem = (props:InputProps)=>{
    const {item,index,scrollTo,maxIndex} =props;
    return(
        <View style={styles.renderContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.subtitleText}>{item.sub_title}</Text>
            
            <Image source ={item.image} style={styles.renderImage} resizeMode="contain"/>
            
            <TouchableOpacity style={styles.nextButton}onPress={() => (index!=maxIndex)?scrollTo(index + 1):null}>
                <Text style={styles.buttonText}>{(index!=maxIndex)?constants.keywords.next:constants.keywords.letsgetstarted}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem