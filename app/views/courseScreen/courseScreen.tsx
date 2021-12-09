import React, { useState, useEffect } from "react";
import {
    View, Text, FlatList, ScrollView, SafeAreaView,
    ActivityIndicator, Image, SectionList,
    Touchable, TouchableOpacity, StatusBar,

} from "react-native";

import { Header } from "../../common";
import { ProgressBar, Colors } from 'react-native-paper';
import styles from './style';
import ListItem from "./listItem";
import { UseOrientation } from "../../config";

interface InputProps {
    isLoading: boolean,
    data: any
}

const CourseScreen = (props: any) => {
    const { isLoading, data } = props
    const o = UseOrientation()
   
    return (
        <SafeAreaView style={styles(o).container}>
            <ScrollView>
                <View style={styles(o).innerContainer}>
                {isLoading ? <ActivityIndicator /> :
                    (<FlatList
                        horizontal
                        //for giving space after each item of flat list
                        // ItemSeparatorComponent={()=>
                        // <View style={{width:10}}>
                            
                        // </View>}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({ item }) => <ListItem item = {item} o={o}/>}
                    />)}
                    </View>
            </ScrollView>
        </SafeAreaView>
    );

}
export default CourseScreen;