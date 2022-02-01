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
import { SIZES } from "../../constants/theme";

interface InputProps{
    item: {
        id: number;
        profile: any;
        name: string;
        no_of_comments: string;
        no_of_likes: string;
        posted_on: string;
        comment: string;
        replies: {
            id: number;
            profile: any;
            name: string;
            posted_on: string;
            comment: string;
        }[];
    }
}

const DiscussionList =(props:InputProps)=>{
    const {item} =props
    return(
        <View>
            <View style={styles(selectedTheme).discussionContainer} >
            <Image source={item.profile} style={styles(selectedTheme).instructorProfileImage}/> 
            <View style={styles(selectedTheme).discussionLeftContainer} >
                <Text style={styles(selectedTheme).discussionNameText} >{item.name}</Text>
                <Text style={styles(selectedTheme).discussionCommentText}>{item.comment}</Text>
                
                <View style={styles(selectedTheme).discussionLeftBottomContainer}>
                  <View style={styles(selectedTheme).smallIconContainer}>  
                      <Image source={icons.comment} style={styles(selectedTheme).discussionCommentIcon} />
                    <Text style={styles(selectedTheme).discussionCommentText} >{item.no_of_comments}</Text>
                </View>
                <View style={styles(selectedTheme).smallIconContainer}>
                <Image source={icons.favourite} style={styles(selectedTheme).discussionLikesIcon} />
                    <Text style={styles(selectedTheme).discussionCommentText} >{item.no_of_likes}</Text>
                </View>
                <View>
                    <Text style={styles(selectedTheme).discussionCommentText} >{item.posted_on}</Text>
                </View>
                </View>
                </View>
                </View>
                {item.replies.map((item,index)=>{return(
                    <View key={index}>
                    <View  style={styles(selectedTheme).nestedDiscussionContainer}>
                            <Image source={item.profile} style={styles(selectedTheme).instructorProfileImage}/> 
            <View style={styles(selectedTheme).discussionLeftContainer} >
                <Text style={styles(selectedTheme).discussionNameText} >{item.name}</Text>
                <Text style={styles(selectedTheme).discussionCommentText}>{item.comment}</Text>
            </View>
                        
                        </View>

                <View style={styles(selectedTheme).nesteddiscussionLeftBottomContainer}>
                  <View style={styles(selectedTheme).smallIconContainer}>  
                      <Image source={icons.reply} style={styles(selectedTheme).discussionCommentIcon} />
                    <Text style={styles(selectedTheme).discussionCommentText} >{constants.keywords.reply}</Text>
                </View>
                <View style={styles(selectedTheme).smallIconContainer}>
                <Image source={icons.favourite} style={styles(selectedTheme).discussionLikesIcon} />
                    <Text style={styles(selectedTheme).discussionCommentText} >{constants.keywords.likes}</Text>
                </View>
                <View>
                    <Text style={styles(selectedTheme).discussionCommentText} >{item.posted_on}</Text>
                </View>
                </View>

                </View >       
                        )
                })

                }      
        </View>
    )
}

export default DiscussionList;