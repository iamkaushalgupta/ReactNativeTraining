import React from "react";
import {
    View,
    Text,
    StatusBar,
    FlatList,
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
import styles from './style'
import RenderItem from './renderItem';
interface InputProps{
    navigation:any
}

const WalkthroughScreen =(props:InputProps)=>{
    return(
        <View style={styles.container}>
        <StatusBar animated={true} 
        backgroundColor={(selectedTheme.name=='light')?COLORS.white:COLORS.gray80 }  
        barStyle={"dark-content"}
        />
        <FlatList
        horizontal
        pagingEnabled={true}
        data={constants.walkthrough}
        extraData={constants.walkthrough}
        keyExtractor={(item,index)=>'key'+index}
        renderItem={({item,index})=><RenderItem item={item} index={index}/>}
        />


        </View>
    );
}
export default WalkthroughScreen;