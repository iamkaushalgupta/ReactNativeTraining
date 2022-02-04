import React from "react";
import {   Text, TouchableOpacity,
    ImageBackground,
    } from 'react-native';
import styles from './style'
import {
    selectedTheme,
} from '../../constants';

interface InputProps{
    navigation: any,
    
    item:{
        id:number,
        title:string,
        thumbnail:any,

    },
    index:number
}
const RenderItem2=(props:InputProps)=>{
    const {navigation,item,index}=props 
    return(
        <TouchableOpacity style={styles(selectedTheme).render2Container} onPress={()=>navigation.navigate('Courses')}>
        <ImageBackground source={item.thumbnail}  style={styles(selectedTheme).render2MainImage} imageStyle={{borderRadius:10}} >
        <Text style={styles(selectedTheme).render2TitleText}>{item.title}</Text>
         </ImageBackground>
         </TouchableOpacity>
        
     )
}

export default RenderItem2;