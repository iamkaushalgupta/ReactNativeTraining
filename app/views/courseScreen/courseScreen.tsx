import React, { useRef, useState, } from "react";
import VideoPlayer from 'react-native-video-player';
import {
    Image, Text, TouchableOpacity,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    Alert,
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
import { BackButton } from "../../components";
import { SIZES } from "../../constants/theme";
import VideoList from './videoList'
import PopularCourses from "./popularCourses";


interface InputProps {
    navigation: any,
    selected: number,
    setSelected: (item: number) => void,
}

const CourseScreen = (props: InputProps) => {
    const { navigation,
        selected,
        setSelected

    } = props

    return (
        <View style={styles(selectedTheme).container}>
            <View style={styles(selectedTheme).upperContainer}>
                <View style={styles(selectedTheme).upperHeaderContainer}>
                <BackButton navigation={navigation} />
                <View style={styles(selectedTheme).upperHeaderLeftContainer}>
                    <Image source={icons.media} style={styles(selectedTheme).mediaIcon} />
                    <Image source={icons.favourite} style={styles(selectedTheme).favoriteIcon} />
                </View>
                </View>
                <VideoPlayer
                    video={{ uri: constants.keywords.videoUrl }}
                    videoWidth={SIZES.width}
                    autoplay={false}
                    resizeMode="contain"
                    videoHeight={SIZES.height * 0.3}
                    thumbnail={{ uri: constants.keywords.thumbnailURL }}
                    showDuration
                    disableFullscreen={true}
                    pauseOnPress
                    customStyles={{
                        playButton: { backgroundColor: COLORS.primary, borderRadius: 180 },
                    }}
                />
            </View>
            <View style={styles(selectedTheme).lowerContainer}>
                <View style={styles(selectedTheme).lowerUpperContainer}>
                    <TouchableOpacity style={[styles(selectedTheme).titleButton, { borderBottomWidth: (selected == 0) ? 5 : 0 }]} onPress={() => setSelected(0)} >
                        <Text style={styles(selectedTheme).titleText}>{constants.keywords.Chapters}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles(selectedTheme).titleButton, { borderBottomWidth: (selected == 1) ? 5 : 0 }]} onPress={() => setSelected(1)} >
                        <Text style={styles(selectedTheme).titleText}>{constants.keywords.Files}</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={[styles(selectedTheme).titleButton, , { borderBottomWidth: (selected == 2) ? 5 : 0 }]} onPress={() => setSelected(2)} >
                        <Text style={styles(selectedTheme).titleText}>{constants.keywords.Discussions}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {selected == 0 &&
                        <View style={styles(selectedTheme).selectedContainer}>
                            <Text style={styles(selectedTheme).headText}>{dummyData.course_details.title}</Text>
                            <View style={styles(selectedTheme).studentTimeContainer}>
                                <Text style={styles(selectedTheme).smallLabelText} >{dummyData.course_details.number_of_students}</Text>
                                <View style={styles(selectedTheme).timeContainer}>
                                    <Image source={icons.time} style={styles(selectedTheme).timeIcon} />
                                    <Text style={styles(selectedTheme).smallLabelText} >{dummyData.course_details.duration}</Text>
                                </View>
                            </View>

                            <View style={styles(selectedTheme).instructorContainer}>
                                <View style={styles(selectedTheme).instructorLeftContainer}>
                                    <Image source={images.profile} style={styles(selectedTheme).instructorProfileImage} />
                                    <View style={styles(selectedTheme).instructorInnerContainer} >
                                        <Text style={styles(selectedTheme).instructorText} >{dummyData.course_details.instructor.name}</Text>
                                        <Text style={styles(selectedTheme).labelText}>{dummyData.course_details.instructor.title}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles(selectedTheme).followButton}>
                                    <Text style={styles(selectedTheme).followButtonText} >{constants.keywords.follow}</Text>
                                </TouchableOpacity>
                            </View>

                            {dummyData.course_details.videos.map((item, index) => {
                                return (
                                    <VideoList key={index} item={item} index={index}
                                    />)
                            })

                            }
                            <View style={styles(selectedTheme).midContainer}>
                                <Text style={styles(selectedTheme).headText}>{constants.keywords.PopularCourses}</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('Search')} style={styles(selectedTheme).seeAllButton} >
                                    <Text style={styles(selectedTheme).seeAllText}>{constants.keywords.seeAll }</Text>
                                </TouchableOpacity>
                            </View>

                            {
                                dummyData.courses_list_2.map((item, index) => {
                                    return (
                                        <PopularCourses item={item} index={index}
                                        key={index}
                                        navigation={navigation} />
                                    )
                                })
                            }
                        </View>

                    }

                </ScrollView>
            </View>
        </View>
    )
}

export default CourseScreen;