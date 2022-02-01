import React, { useState } from "react";
import {
    Image, Text, TouchableOpacity,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native';
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
import { BackButton2 } from "../../components";
interface InputProp {
    navigation: any,
}
import CourseItem from "./coursesItem";
const CoursesScreen=(props:InputProp)=>{
    const {navigation}=props;
    return(
        <View style={styles(selectedTheme).container}>
            <ImageBackground source={images.bg_1} style={styles(selectedTheme).backgroundImage}
            imageStyle={{borderBottomLeftRadius:50}}
            >
            <BackButton2 navigation={navigation}/>

            <View style={styles(selectedTheme).innerUpperContainer}>
                <Text style={styles(selectedTheme).titleText}>{constants.keywords.MobileDesign}</Text>
            <Image source={images.mobile_image} style={styles(selectedTheme).mobileImage}/>
            </View> 
            </ImageBackground>

            

            <View style={styles(selectedTheme).wrapperContainer}>
            <View style={styles(selectedTheme).midContainer}>
                <Text style={styles(selectedTheme).labelText} >{constants.keywords.numberOfResults}</Text>
                <TouchableOpacity style={styles(selectedTheme).filterButton}>
                    <Image source={icons.filter} style={styles(selectedTheme).filterImage}/>
                </TouchableOpacity>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
                  data={dummyData.courses_list_2}
                  extraData={dummyData.courses_list_2}
                  ItemSeparatorComponent={() => {
                      return (
                          <View style={styles(selectedTheme).render3ItemSeprator}>
                          </View>
                      )
                  }}
                  keyExtractor={(item, index) => 'key' + index}
                  renderItem={({ item, index }) => <CourseItem item={item} index={index} navigation={navigation} />}
              />

        </View>
        </View>
    )
}
export default CoursesScreen;