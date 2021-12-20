import React, { useState, useEffect } from "react";
import {
    View, Text, FlatList, ScrollView, SafeAreaView,
    ActivityIndicator, Image, SectionList,
    Touchable, TouchableOpacity, StatusBar,

} from "react-native";

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
                        // pagingEnabled={true}
                        horizontal
                        //for giving space after each item of flat list
                        ItemSeparatorComponent={()=>
                        <View style={styles(o).itemSeprate}>
                            
                        </View>}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({ item }) => <ListItem item = {item} o={o} navigation={props.navigation}/>}
                    />)}
                    </View>
            </ScrollView>
        </SafeAreaView>
    );

}
export default CourseScreen;