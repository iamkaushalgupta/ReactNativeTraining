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
interface InputProp{
    item: {
        id: number;
        name: string;
        ago: string;
        thumbnail: any;
        review: string;
    },
    index: number,
    navigation: any
}

const StudentReviews = (props:InputProp)=>{
    const {
        item,
        index,
        navigation
    } = props
    return(
        <View style={styles(selectedTheme).renderStudentContainer}>
            <Image source={item.thumbnail} style={styles(selectedTheme).studentImage}/>
            <View style={styles(selectedTheme).renderLeftStudentContainer}>
                <Text style={styles(selectedTheme).labelText}>{item.review}</Text>
                <Text style={styles(selectedTheme).labelText2}>{item.ago}</Text>
            </View>
        </View>
    )

}
export default StudentReviews;