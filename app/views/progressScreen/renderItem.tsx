import React from 'react';
import { View,Text,TouchableOpacity,ScrollView } from 'react-native';
import styles from './style';

type InputProps={
    data:any,

    o:{
        fontScale: number,
        height:number,
        width:number,
        isLandscape:boolean,
        scale:number,

    },
    navigation:any
}

const RenderItem=(props:InputProps)=>{
    const{navigation}=props
  
    return(
        <ScrollView>
            <View style={styles(props.o).renderContainer}>
            <Text style={styles(props.o).taskText}>{props.data.item.text}</Text>
            <TouchableOpacity style={styles(props.o).detailsButton} onPress={()=>(navigation.navigate('Test2by4'))}>
                <Text style={styles(props.o).detailsButtonText}>View Details</Text></TouchableOpacity>
                </View>
            <View style={styles(props.o).HorizontalLine}>
            </View>
       
        </ScrollView>
    )
}

export default RenderItem;