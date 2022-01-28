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
    navigation:any,
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
    const {item,
        index,scrollTo
        ,maxIndex,
        navigation
    } =props;
    return(
        <View style={styles(selectedTheme).renderContainer}>
            <Text style={styles(selectedTheme).titleText}>{item.title}</Text>
            <Text style={styles(selectedTheme).subtitleText}>{item.sub_title}</Text>
            
            <Image source ={item.image} style={styles(selectedTheme).renderImage} resizeMode="contain"/>
            
            <TouchableOpacity style={styles(selectedTheme).nextButton}onPress={() => (index!=maxIndex)?scrollTo(index + 1):navigation.navigate('Category')}>
                <Text style={styles(selectedTheme).buttonText}>{(index!=maxIndex)?constants.keywords.next:constants.keywords.letsgetstarted}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem