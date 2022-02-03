import React, { useEffect, useState } from "react";
import styles from "./style";
import {
    Image, Text, TouchableOpacity,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    ImageBackground,
    TextInput
} from 'react-native';
import { ProgressBar } from 'react-native-paper'
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

interface InputProps {
    navigation: any;
    setRender: (item: boolean) => void;
    render: boolean;
}
import { setSelectedTheme } from "../../constants/theme";
import DetailItem from "./detailItem";

const ProfileScreen = (props: InputProps) => {

    const { navigation, setRender, render } = props;

    return (
        <View style={styles(selectedTheme).container}>
            <StatusBar animated={true}
                backgroundColor={(selectedTheme.name == 'light') ? COLORS.additionalColor9 : COLORS.gray80}
                barStyle={"dark-content"}
            />
            <View style={styles(selectedTheme).headerContainer}>
                <Text style={styles(selectedTheme).headerText}>{constants.screens.profile}</Text>
                <TouchableOpacity onPress={() => { setSelectedTheme(), setRender(!render) }}>
                    <Image source={icons.sun} style={styles(selectedTheme).sunIcon} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles(selectedTheme).midContainer}>
                    <View>
                        <TouchableOpacity>
                            <View style={styles(selectedTheme).profileButton}>
                                <ImageBackground source={dummyData.personal_details[1].value} style={styles(selectedTheme).profileImage}
                                    imageStyle={{ borderRadius: 180 }}
                                >
                                </ImageBackground>
                            </View>
                            <View style={styles(selectedTheme).cameraIconContainer}>
                                <Image source={icons.camera} style={styles(selectedTheme).cameraIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles(selectedTheme).midInnerContainer}>
                        <Text style={styles(selectedTheme).TitleText}>{dummyData.personal_details[0].value}</Text>
                        <Text style={styles(selectedTheme).subTitleText}>{dummyData.personal_details[2].value}</Text>
                        <ProgressBar color={COLORS.primary} progress={0.58} style={styles(selectedTheme).progressBar} />
                        <View style={styles(selectedTheme).progressContainer}>
                            <Text style={styles(selectedTheme).subTitleText}>{constants.keywords.OverallProgress}</Text>
                            <Text style={styles(selectedTheme).subTitleText}>{"58%"}</Text>
                        </View>

                        <TouchableOpacity style={styles(selectedTheme).becomeMemberButton} onPress={()=>navigation.navigate('MemberShip')} >
                            <Text style={styles(selectedTheme).becomeMemberText}>{constants.keywords.BecomeMember}</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={styles(selectedTheme).bottomContainer}>
                    {dummyData.Profile_details.map((item) =>
                        <DetailItem item={item}
                            key={item.id}
                            maxIndex={dummyData.Profile_details.length - 1}
                            navigation={navigation} />)

                    }
                </View>
                <View style={styles(selectedTheme).bottomContainer}>
                    <View style={[styles(selectedTheme).detailItemContainer, { borderBottomWidth: 1 }]} >
                        <View style={styles(selectedTheme).detailInnerContainer}>
                            <View style={styles(selectedTheme).detailIconContainer}>
                                <Image source={icons.star} style={styles(selectedTheme).detailIcon} />
                            </View>
                            <View style={styles(selectedTheme).detailTextContainer}>
                                <Text style={styles(selectedTheme).valueText} >{constants.keywords.pages}</Text>
                            </View>
                        </View>
                        <Image source={icons.right_arrow} style={styles(selectedTheme).right_arrow} />
                    </View>
                    <View style={[styles(selectedTheme).detailItemContainer, { borderBottomWidth: 1 }]} >
                        <View style={styles(selectedTheme).detailInnerContainer}>
                            <View style={styles(selectedTheme).detailIconContainer}>
                                <Image source={icons.new_icon} style={styles(selectedTheme).detailIcon} />
                            </View>
                            <View style={styles(selectedTheme).detailTextContainer}>
                                <Text style={styles(selectedTheme).valueText} >{constants.keywords.newCourseNotification}</Text>
                            </View>
                        </View>
                        <Image source={icons.right_arrow} style={styles(selectedTheme).right_arrow} />
                    </View>
                    <View style={[styles(selectedTheme).detailItemContainer]} >
                        <View style={styles(selectedTheme).detailInnerContainer}>
                            <View style={styles(selectedTheme).detailIconContainer}>
                                <Image source={icons.time} style={styles(selectedTheme).detailIcon} />
                            </View>
                            <View style={styles(selectedTheme).detailTextContainer}>
                                <Text style={styles(selectedTheme).valueText} >{constants.keywords.studyeReminder}</Text>
                            </View>
                        </View>
                        <Image source={icons.right_arrow} style={styles(selectedTheme).right_arrow} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default ProfileScreen;   