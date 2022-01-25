import React from "react";
import styles from "./style";
import {
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Image
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
import { BackButton } from "../../components";

interface InputProps{
 item:{
     icon:any,
     label:string,
     id:number

 }
 index:number,
 navigation:any,
 category:number,
 setCategory:(n: number) => void
}

const RenderItem=(props:InputProps)=>{
    const {item,index,category,setCategory}=props
    return(
        <TouchableOpacity onPress={()=>setCategory(index)} style={[styles.renderContainer,{
            backgroundColor:(category==index)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor5
        }]}>
            <Image source={item.icon} style={[styles.renderIcon,{tintColor:(index==category)?COLORS.white:selectedTheme.tintColor}]} />
            <Text style={[styles.labelText,{color:(index==category)?COLORS.white:selectedTheme.textColor3}]}>{item.label.replace(' ','\n')}</Text>
        </TouchableOpacity>
    )
}
export default RenderItem