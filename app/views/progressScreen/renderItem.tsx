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

    }
}

const RenderItem=(props:InputProps)=>{
    // console.log(props.o)
    return(
        <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles(props.o).taskText}>{props.data.item.text}</Text>
            <TouchableOpacity style={styles(props.o).detailsButton} onPress={()=>(props.data.item.url)}>
                <Text style={styles(props.o).detailsButtonText}>View Details</Text></TouchableOpacity>
                </View>
            <View style={styles(props.o).HorizontalLine}>

            </View>
       
        </ScrollView>
    )
}

export default RenderItem;