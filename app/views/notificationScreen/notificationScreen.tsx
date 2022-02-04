import React, { useEffect, useState } from "react";
import styles from "./style";
import {
     Text, 
    View,
    ImageBackground,
    SectionList
} from 'react-native';
import {
    constants,
    selectedTheme,
    images,
    dummyData,

} from '../../constants';
import { BackButton } from "../../components";
import Notification from "./notification";

interface InputProps{
    navigation:any
}

const NotificationScreen=(props:InputProps)=>{
    const {navigation}=props
    return(
            <View style={styles(selectedTheme).container}>
                     <ImageBackground source={(selectedTheme.name=='dark')?images.bg_dark:images.bg}
                      style={styles(selectedTheme).upperContainer} imageStyle={styles(selectedTheme).backgroundImage} >
                        <BackButton navigation={ navigation}/>
                        <Text style={styles(selectedTheme).headText} >{constants.screens.Notification}</Text>
                        <SectionList
                        showsVerticalScrollIndicator={false}
                        sections={dummyData.notificationByDays}
                        extraData={dummyData.notificationByDays}
                        keyExtractor={(item,index)=>'key'+index}
                        renderItem={({item,index})=><Notification item={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles(selectedTheme).labelText3}>{title}</Text>
                          )}
                        />
                        



                     </ImageBackground>

            </View>
        )
}
export default NotificationScreen