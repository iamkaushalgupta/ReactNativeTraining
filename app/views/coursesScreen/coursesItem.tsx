import React from "react";
import {  Image, Text, TouchableOpacity,
     View,
    ImageBackground} from 'react-native';
import styles from './style'
import {
    constants,
    selectedTheme,
    icons,

} from '../../constants';
interface InputProp{
    navigation: any,
    item:{
        id: number;
        title: string; 
        duration: string;
         instructor: string;
          ratings: number;
           price: number;
            is_favourite: boolean; 
            thumbnail: any;
    },
    index:number
}

const CourseItem = (props:InputProp)=>{
    const {
        item,
        index,
        navigation
    } = props

    return(
        <TouchableOpacity style={styles(selectedTheme).renderContainer3} onPress={()=>navigation.navigate("Course")} >
            <ImageBackground source={item.thumbnail} style={styles(selectedTheme).render3MainImage} imageStyle={{borderRadius:10}}>
                    <TouchableOpacity style={styles(selectedTheme).render3FavouriteButton}>
                        <Image source={icons.heart} style={styles(selectedTheme).heartIcon}/>
                    </TouchableOpacity>
                    </ImageBackground>
            

            <View>
                <Text  style={styles(selectedTheme).render3TitleText}>{item.title}</Text>
                <View style={styles(selectedTheme).render3InnerContainer}>
                <Text style={styles(selectedTheme).render3InstructorText}>{constants.keywords.By} {item.instructor}</Text>    
                    <View style={styles(selectedTheme).render3DurationContainer}>
                        <Image source={icons.time} style={styles(selectedTheme).render3ClockIcon}/>
                        <Text style={styles(selectedTheme).render3DurationText}>{item.duration}</Text>
                    </View>
                </View>

                <View style={styles(selectedTheme).render3InnerLowerContainer}>
                    <Text style={styles(selectedTheme).render3PriceText}>${item.price}</Text>
                    <View style={styles(selectedTheme).render3RatingContainer}>
                        <Image source={icons.star} style={styles(selectedTheme).render3RatingIcon}/>
                        <Text  style={styles(selectedTheme).render3RatingText}>{item.ratings}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default CourseItem