import React, { useEffect, useState } from "react";
import styles from "./style";
import {
    Image, Text, 
    View,
} from 'react-native';
import {
    selectedTheme,
    icons,

} from '../../constants';

interface InputProps{
    navigation:any;
    item: {
        id: number;
        label: string;
        value: string;
        icon:any
    };
    maxIndex: number;
}

const DetailItem=(props:InputProps)=>{
    const {item,navigation,maxIndex}=props;
    return(
        <View style={[{borderBottomWidth:(item.id!=maxIndex)?1:0},styles(selectedTheme).detailItemContainer]} >
            <View style={styles(selectedTheme).detailInnerContainer}>
                <View style={styles(selectedTheme).detailIconContainer}>
                <Image source={item.icon} style={styles(selectedTheme).detailIcon}/>
                </View>
                <View style={styles(selectedTheme).detailTextContainer}>
                    <Text style={styles(selectedTheme).labelText} >{item.label}</Text>
                    <Text style={styles(selectedTheme).valueText}>{item.value}</Text>
                </View>
            </View>
            <Image source={icons.right_arrow} style={styles(selectedTheme).right_arrow}/>
        </View>
    )
}

export default DetailItem;