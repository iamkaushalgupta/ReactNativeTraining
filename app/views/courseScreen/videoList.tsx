import React from "react";
import {
    Image, Text, 
    View,

} from 'react-native';
import styles from './style'
import {
    selectedTheme,
    icons,

} from '../../constants';

interface InputProps{
    item: {
        title: string;
        duration: string;
        size: string;
        progress: string;
        is_playing: boolean;
        is_complete: boolean;
        is_lock: boolean;
        is_downloaded: boolean;
    },
    index: number
}

const VideoList=(props:InputProps)=>{
   const{item,index}=props

    return(
        <View  style={styles(selectedTheme).videoListContainer}>
           <View style={styles(selectedTheme).videoInnerListContainer}>
           {(item.is_complete)&&<Image source={icons.completed} style={styles(selectedTheme).chapterIcon}/>}
           {item.is_playing&&<Image source={icons.play_1} style={styles(selectedTheme).chapterIcon} />}
           {
           item.is_lock&&
           <View style={styles(selectedTheme).lockChapterIconContainer}>
               <Image source={icons.lock} style={styles(selectedTheme).lockChapterIcon}/>
           </View>    
            }

                <View style={styles(selectedTheme).videoListTextContainer} >
                    <Text style={styles(selectedTheme).videoTitleText}>{item.title}</Text>
                    <Text style={styles(selectedTheme).smallLabelText}>{item.duration}</Text>
                </View>

                </View>

                <View style={styles(selectedTheme).downloadContainer}>
                    <Text style={styles(selectedTheme).smallLabelText}>{item.size}</Text>
                    <Image source={icons.download} style={styles(selectedTheme).downloadedIcon} />
                </View>

        </View>
    )
}

export default VideoList;