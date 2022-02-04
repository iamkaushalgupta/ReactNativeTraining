import React from "react";
import {
    Image, Text, TouchableOpacity,
    View,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native';
import styles from './style'
import {
    constants,
    selectedTheme,
    images,
    icons,
    dummyData,

} from '../../constants';
import MyCourses from "./myCourses";
import StudentReviews from "./studentReview";

interface InputProps{
    navigation:any
}

const InstructorProfileScreen = (props:InputProps)=>{
    const{
        navigation
    } =props

    return(
        <View style={styles(selectedTheme).container}>
            <View style={styles(selectedTheme).upperContainer}>
                <View style={styles(selectedTheme).innerUpperContainer}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={icons.left_arrow} style={styles(selectedTheme).headerLeftIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icons.share} style={styles(selectedTheme).headerRightIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles(selectedTheme).lowerContainer} >
                
                <ImageBackground source={images.profile} 
                style={styles(selectedTheme).profileImageView}
                imageStyle={styles(selectedTheme).profileImage}
                >
                    
                    <Image source={icons.blue_tick} style={styles(selectedTheme).blueTickImage}/>
                    </ImageBackground>
                    <Text style={styles(selectedTheme).headText}>{dummyData.instructor_profile.name}</Text>
                    <Text style={styles(selectedTheme).postText}>{dummyData.instructor_profile.post}</Text>
                    
                    <TouchableOpacity style={styles(selectedTheme).followButton}>
                        <Text style={styles(selectedTheme).followText} >{constants.keywords.follow}</Text>
                    </TouchableOpacity>

                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    >
                        <View style={styles(selectedTheme).lowerUpContainer}>
                            <View style={styles(selectedTheme).followerContainer}>
                                <Text style={styles(selectedTheme).titleText}>{dummyData.instructor_profile.followers}</Text>
                                <Text style={styles(selectedTheme).subTitleText} >{constants.keywords.Followers}</Text>
                            </View>
                            <View style={styles(selectedTheme).reviewContainer}>
                                <Text style={styles(selectedTheme).titleText}>{dummyData.instructor_profile.reviews}</Text>
                                <Text  style={styles(selectedTheme).subTitleText} >{constants.keywords.Reviews}</Text>
                            </View>
                            <View style={styles(selectedTheme).totalStudentsContainer}>
                                <Text style={styles(selectedTheme).titleText}>{dummyData.instructor_profile.totalstudents}</Text>
                                <Text  style={styles(selectedTheme).subTitleText} >{constants.keywords.TotalStudents}</Text>
                            </View>
                        </View>

                    <View style={styles(selectedTheme).aboutmeContainer}>
                        <Text style={styles(selectedTheme).headingText} >{constants.keywords.Aboutme}</Text>
                        <Text style={styles(selectedTheme).labelText}>{dummyData.instructor_profile.about}</Text>
                        </View>

                        <View style={styles(selectedTheme).mycoursesContainer}>
                            <View style={styles(selectedTheme).myCoursesUpContainer}>
                                <Text style={styles(selectedTheme).headingText}>{constants.keywords.MyCourses}</Text>
                                <TouchableOpacity style={styles(selectedTheme).seeAllButton}>
                                    <Text style={styles(selectedTheme).seeAllText}>{constants.keywords.seeAll}</Text>
                                </TouchableOpacity>
                            </View>
                            {dummyData.instructor_profile.courses.map((item,index)=>
                            <MyCourses 
                            key={index}
                            item = {item}
                             index= {index}
                              navigation = {navigation}/>
                            )

                            }

                        </View>

                        <View style={styles(selectedTheme).studentReviewContainer}>
                            <View style={styles(selectedTheme).studentReviewUpContainer}>
                            <Text style={styles(selectedTheme).headingText}>{constants.keywords.studentReviews}</Text>
                                <TouchableOpacity style={styles(selectedTheme).seeAllButton}>
                                    <Text style={styles(selectedTheme).seeAllText}>{constants.keywords.seeAll}</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={()=>{return(
                                <View style={styles(selectedTheme).studentSeprator}>
                                    </View>
                            )}}
                            data={dummyData.instructor_profile.studentReviews}
                            extraData={dummyData.instructor_profile.studentReviews}
                            keyExtractor={(item,index)=>'key'+index}
                            renderItem={({item,index})=><StudentReviews item={item} index={index} navigation={navigation}/>}
                            />
                        </View>

                        <View>
                            <Text style={styles(selectedTheme).headingText}>{constants.keywords.connectHere}</Text>
                                <View>
                                    <TouchableOpacity 
                                    style={styles(selectedTheme).socialMediaButton}>
                                        <View style={styles(selectedTheme).innerSocialMediaContainer}>
                                            <Image source={icons.twitter} style={styles(selectedTheme).socialMediaIcon} />
                                            <Text style={styles(selectedTheme).socialMediaText}>{constants.keywords.twitter}</Text>
                                        </View>
                                        <Image  source={icons.right_arrow} style={styles(selectedTheme).leftArrowIcon} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                    style={styles(selectedTheme).socialMediaButton}>
                                    
                                        <View style={styles(selectedTheme).innerSocialMediaContainer}>
                                            <Image source={icons.linkedin} style={styles(selectedTheme).socialMediaIcon} />
                                            <Text style={styles(selectedTheme).socialMediaText} >{constants.keywords.linkedIn}</Text>
                                        </View>
                                        <Image source={icons.right_arrow} style={styles(selectedTheme).leftArrowIcon} />
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </ScrollView>
        
          </View>
        
        </View>
    )
}
export default InstructorProfileScreen