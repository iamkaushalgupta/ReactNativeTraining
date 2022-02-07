import React from "react";
import {
    View,
    StatusBar,
    FlatList,
} from 'react-native';
import {
    constants,
    COLORS,
    selectedTheme,
} from '../../constants';
import styles from './style'
import RenderItem from './renderItem';
interface InputProps{
    navigation:any,
    flatref:any,
    scrollTo: (data: any) => void
}

const WalkthroughScreen =(props:InputProps)=>{
    const {navigation,flatref,scrollTo}=props;
    return(
        <View style={styles(selectedTheme).container}>
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
        renderItem={({item,index})=><RenderItem item={item} index={index} scrollTo={(item:any)=>scrollTo(item)} 
        maxIndex={constants.walkthrough.length-1}
        navigation={navigation}
        />}
        ref={flatref}
        />
        </View>
    );
}
export default WalkthroughScreen;