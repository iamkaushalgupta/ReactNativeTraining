import React, { useState } from "react";
import {
    Image, Text, TouchableOpacity,
    View,
    StatusBar,
    FlatList,
    ImageBackground
} from 'react-native';
import styles from './style'
import {
    constants,
    COLORS,
    selectedTheme,
    images,
    icons,
    dummyData,

} from '../../constants';
interface InputProp {
    navigation: any,
    date: any
}
import RenderItem1 from "./renderItem1";
import RenderItem2 from "./renderItem2";
import RenderItem3 from "./renderItem3";
const HomeScreen = (props: InputProp) => {
    const { navigation,
        date

    } = props;
    return (
        <View style={styles(selectedTheme).container}>
             <StatusBar animated={true}
                backgroundColor={(selectedTheme.name == 'light') ? COLORS.additionalColor9 : COLORS.gray80}
                barStyle={"dark-content"}
            />
            <View style={styles(selectedTheme).header}>
                <View>
                    <Text style={styles(selectedTheme).headerNameText}>{constants.keywords.Hello}, {dummyData.personal_details[0].value}!</Text>
                    <Text style={styles(selectedTheme).headerDateText}>{date}</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
                    <Image source={icons.notification} style={styles(selectedTheme).notificationIcon} />
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => {
                        return (
                            <>
                                <ImageBackground 
                                source={images.featured_bg_image}
                                style={styles(selectedTheme).imageBackground}
                                imageStyle={{borderRadius:10}}
                                >
                                    <Text style={styles(selectedTheme).howToText}>{constants.keywords.HOWTO}</Text>
                                    <Text style={styles(selectedTheme).brandText}>{constants.keywords.MakeYourBandVisible}</Text>
                                    <Text style={styles(selectedTheme).bytText}>{constants.keywords.By} {constants.keywords.KaushalGupta}</Text>
                                    
                                    <Image source={images.start_learning} style={styles(selectedTheme).startLearningImage}/>

                                    <TouchableOpacity style={styles(selectedTheme).startLearningButton}>
                                        <Text style={styles(selectedTheme).startLearningText}>{constants.keywords.startLearning}</Text>
                                    </TouchableOpacity>
           
                                </ImageBackground>

                                <View style={styles(selectedTheme).render1FlatList}>
                                    <FlatList
                                        horizontal
                                        ItemSeparatorComponent={() => {
                                            return (
                                                <View style={styles(selectedTheme).render1ItemSeprator}>
                                                </View>
                                            )
                                        }}
                                        showsHorizontalScrollIndicator={false}
                                        data={dummyData.courses_list_1}
                                        extraData={dummyData.courses_list_1}
                                        keyExtractor={(item, index) => 'key' + index}
                                        renderItem={({ item, index }) => <RenderItem1 item={item} index={index} navigation={navigation} />
                                        }
                                    />
                                </View>

                                <View>
                                    <View style={styles(selectedTheme).render2FlatlistInnerContainer}>
                                        <Text style={styles(selectedTheme).titleText} >{constants.keywords.Categories}</Text>
                                        <TouchableOpacity style={styles(selectedTheme).seeAllButton} onPress={() => navigation.navigate('Search')}>
                                            <Text style={styles(selectedTheme).seeAllButtonText}>{constants.keywords.seeAll}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <FlatList
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        ItemSeparatorComponent={() => {
                                            return (
                                                <View style={styles(selectedTheme).render1ItemSeprator}>
                                                </View>
                                            )
                                        }}
                                        data={dummyData.categories}
                                        extraData={dummyData.categories}
                                        keyExtractor={(item, index) => 'key' + index}
                                        renderItem={({ item, index }) => <RenderItem2 item={item} index={index} navigation={navigation} />}
                                    />
                                </View>
                                <View style={styles(selectedTheme).render3FlatlistInnerContainer}>
                                    <Text style={styles(selectedTheme).titleText} >{constants.keywords.PopularCourses}</Text>
                                    <TouchableOpacity style={styles(selectedTheme).seeAllButton} onPress={() => navigation.navigate('Search')}>
                                        <Text style={styles(selectedTheme).seeAllButtonText}>{constants.keywords.seeAll}</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    }}
                    data={dummyData.courses_list_2}
                    extraData={dummyData.courses_list_2}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles(selectedTheme).render3ItemSeprator}>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({ item, index }) => <RenderItem3 item={item} index={index} navigation={navigation} />}
                />
            </View>

        </View>
    );
}
export default HomeScreen;