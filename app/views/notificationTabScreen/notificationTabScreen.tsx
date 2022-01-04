import React from "react";
import styles from './styles';
import { icons,string,images } from "../../constants";
import { View,Text,TouchableOpacity,Image, SectionList } from "react-native";

const NotificationTabScreen=(props:any)=>{
    const RenderItem=({item}:any)=>{
        
        return(
            <View style={styles.notificationContainer}>
                <View style={styles.innerNotificationContainer}>
                <View style={styles.notificationIconContainer}>
               <Image source={item.icon} style={styles.notificationIcon}/>                
               </View>   

               <View style={styles.notificationContentContainer}>
                <Text style={styles.notificationTitleText}>{item.title}</Text>
                <Text style={styles.labelGrayText}>{item.text}</Text>
                <Text style={styles.labelGrayText}>{item.untilText}</Text>
                <Text style={styles.labelBlackText}>{item.timeago}</Text>
                </View>  
            </View>

            <TouchableOpacity>
                <Image style={styles.threeDots} source={icons.three_dots}/>
            </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles.icon} />
                </TouchableOpacity>

                <Text style={styles.heading}> {string.screens.notification}</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Setting")}>
                <Image source={images.profile} style={styles.iconProfile} />
                </TouchableOpacity>
            </View>

            <View>
                
                <SectionList
                sections={string.notification_tab}
                keyExtractor={(item, index) =>'Key'+  index}
                renderItem={({ item }) => <RenderItem item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sepratorTitleText}>{title}</Text>
                )}
              />   
            
               
            </View>
            
        </View>
    )
}

export default NotificationTabScreen