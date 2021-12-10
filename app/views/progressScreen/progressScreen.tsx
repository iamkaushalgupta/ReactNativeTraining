import React from 'react';
import { View,Text,FlatList,ScrollView } from 'react-native';
import RenderItem from './renderItem';
import { UseOrientation } from '../../config';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

type InputProps={
   
data:Array<any>
}

const ProgressScreen=(props:InputProps)=>{

    const o=UseOrientation()
   
    return(
        
    <View style={styles(o).container}>
        <Text style={styles(o).firstHeading}>Graduation Requirements</Text>
        <Text style={styles(o).secondHeading}>Graduation Requirements</Text>
      
        <View style={styles(o).flatlistContainer}>
        <FlatList
        data={props.data}
        renderItem={(item)=>(<RenderItem data={item} o={o}/>)}          
        />
        </View>
    </View>
    
    
    
    )
}

export default ProgressScreen