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
    navigation:any,
    flatref:any,
    scrollTo: (data: any) => void
}

const WalkthroughScreen =(props:InputProps)=>{
    const {navigation,flatref,scrollTo}=props;
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
        renderItem={({item,index})=><RenderItem item={item} index={index} scrollTo={(item:any)=>scrollTo(item)} maxIndex={constants.walkthrough.length-1}/>}
        ref={flatref}
        />


        </View>
    );
}
export default WalkthroughScreen;