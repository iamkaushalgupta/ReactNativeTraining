import React from "react";
import {   Text, TouchableOpacity,
} from 'react-native';
import styles from './style'
import {
    selectedTheme,

} from '../../constants';

interface InputProps{
    navigation:any
    item:{
        id:number,
        label:string
    },
    index:number
}
const RenderItem1=(props:InputProps)=>{
    const {navigation,item,index}=props 
    return(
         <TouchableOpacity style={styles(selectedTheme).render1Container}>
             <Text style={styles(selectedTheme).render1LabelText}>{item.label}</Text>
         </TouchableOpacity>
     )
}

export default RenderItem1;