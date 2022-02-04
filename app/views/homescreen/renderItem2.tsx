import React from "react";
import {   Text, 
    ImageBackground} from 'react-native';
import styles from './style'
import {
    selectedTheme,

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
        <ImageBackground source={item.thumbnail} style={styles(selectedTheme).render2Container}  imageStyle={{borderRadius:10}} >
            <Text style={styles(selectedTheme).render2TitleText}>{item.title}</Text>
        </ImageBackground>
    )
}

export default RenderItem2;