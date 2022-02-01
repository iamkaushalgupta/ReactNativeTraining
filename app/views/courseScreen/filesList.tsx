import React from "react";
import {  Image, Text, TouchableOpacity,
     View,
    StatusBar, 
    ScrollView,
    FlatList,
    ImageBackground} from 'react-native';
import styles from './style'
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
interface InputProps{
    item: {
        id: number;
        name: string;
        author: string;
        upload_date: string;
        thumbnail: any;
    }
}

const FilesList=(props:InputProps)=>{
    const {item}=props
    return(
        <View style={styles(selectedTheme).fileListContainer}>
            <View style={styles(selectedTheme).fileListLeftContainer}>
                <Image source={item.thumbnail} style={styles(selectedTheme).filesIcon}/>
                <View>
                <Text style={styles(selectedTheme).filesNameText} >{item.name}</Text>
                <Text style={styles(selectedTheme).fileAuthorText}>{item.author}</Text>
                <Text style={styles(selectedTheme).fileUploadedText}>{item.upload_date}</Text>
                </View>

            </View>
            <Image source={icons.menu} style={styles(selectedTheme).menuIcon} />
        </View>
    )
}

export default FilesList