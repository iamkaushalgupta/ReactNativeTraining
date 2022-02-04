import React, { useRef, useState, } from "react";
import {
    Image, Text, TouchableOpacity,
    View,
    ScrollView,
    FlatList,

} from 'react-native';
import styles from './style'
import VideoPlayer from 'react-native-video-player';
import {
    constants,
    COLORS,
    selectedTheme,
    images,
    icons,
    dummyData,

} from '../../constants';
import { BackButton } from "../../components";
import { SIZES } from "../../constants/theme";
import VideoList from './videoList'
import PopularCourses from "./popularCourses";
import FilesList from "./filesList";
import DiscussionList from "./discussionList";


interface InputProps {
    navigation: any,
    selected: number,
    setSelected: (item: number) => void,
    allStudents:boolean,
    setAllStudents:(item:boolean) => void,
    studentsData: {
        id: number;
        name: string;
        thumbnail: any;
    }[]
}

const CourseScreen = (props: InputProps) => {
    const { navigation,
        selected,
        setSelected,
        allStudents,
        setAllStudents,
        studentsData
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

                            <TouchableOpacity style={styles(selectedTheme).instructorContainer} onPress={()=>navigation.navigate("InstructorProfile")} >
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
                            </TouchableOpacity>

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
                    {selected==1&&
                        <View style={styles(selectedTheme).selectedContainer}>
                            <Text style={styles(selectedTheme).headText}>{constants.keywords.Students}</Text>
                                <View style={styles(selectedTheme).studentsContainer}>
                                <FlatList
                                horizontal
                                data={studentsData}
                                ItemSeparatorComponent={()=>{return(<View style={styles(selectedTheme).render3ItemSeprator}></View>)}}
                                extraData={studentsData}
                                keyExtractor={(item,index)=>'key'+index}
                                renderItem={({item,index})=>{return(
                                            <Image source={item.thumbnail}style={styles(selectedTheme).studentImage} />
                                )}}
                                    />
                                {!allStudents&&
                                <TouchableOpacity onPress={()=>setAllStudents(true)}>
                                <Text style={styles(selectedTheme).viewAllButton}>{constants.keywords.ViewAll}</Text>
                                </TouchableOpacity>
                                }   
                            </View>
                          
                            <Text style={styles(selectedTheme).headText}>{constants.keywords.Files}</Text>
                        
                                {dummyData.course_details.files.map(
                                    (item,index)=><FilesList item={item} key={index}/>)

                                }

                        
                        </View>
                    }
                    {selected==2&&
                    <View style={styles(selectedTheme).selectedContainer} >
                        {dummyData.course_details.discussions.map((item,index)=>
                        <DiscussionList item ={item} key={index} />
                        )
                            
                        }
                    </View>

                    }

                </ScrollView>
            </View>
        </View>
    )
}

export default CourseScreen;