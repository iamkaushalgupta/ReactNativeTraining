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

const RenderItem3 = (props:InputProp)=>{
    const {
        item,
        index,
        navigation
    } = props

    return(
        <View style={styles.renderContainer3}>
            <ImageBackground source={item.thumbnail} style={styles.render3MainImage} imageStyle={{borderRadius:10}}>
                    <TouchableOpacity style={styles.render3FavouriteButton}>
                        <Image source={icons.heart} style={styles.heartIcon}/>
                    </TouchableOpacity>
                    </ImageBackground>
            

            <View>
                <Text  style={styles.render3TitleText}>{item.title}</Text>
                <View style={styles.render3InnerContainer}>
                <Text style={styles.render3InstructorText}>{constants.keywords.By} {item.instructor}</Text>    
                    <View style={styles.render3DurationContainer}>
                        <Image source={icons.time} style={styles.render3ClockIcon}/>
                        <Text style={styles.render3DurationText}>{item.duration}</Text>
                    </View>
                </View>

                <View style={styles.render3InnerLowerContainer}>
                    <Text style={styles.render3PriceText}>${item.price}</Text>
                    <View style={styles.render3RatingContainer}>
                        <Image source={icons.star} style={styles.render3RatingIcon}/>
                        <Text  style={styles.render3RatingText}>{item.ratings}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default RenderItem3