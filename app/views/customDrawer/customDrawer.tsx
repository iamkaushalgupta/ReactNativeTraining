import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from "./styles";
import { string, icons, images } from '../../constants'
const CustomDrawer = (props: any) => {

    const RenderItem = (item: any) => {

        return (

            <View>
                <TouchableOpacity style={styles.renderContainer} onPress={() => props.navigation.navigate(item.item.navigation)}>
                    <Image source={item.item.icon} style={styles.icon} />
                    <Text style={styles.iconText}>{item.item.screenName}</Text>

                </TouchableOpacity>
                {(item.index == 4) && <View style={styles.lineContainer}>

                </View>
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                <Image source={icons.close} style={styles.closeIcon} />

            </TouchableOpacity>

            <View style={styles.upperContainer}>
                <Image source={images.profile} style={styles.profileIcon} />
                <View>
                    <Text style={styles.nameText}>{string.keywords.name}</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("MyAccountDetail")}><Text style={styles.labelText}>{string.keywords.ViewYourProfile}</Text></TouchableOpacity>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={string.drawer_content}
                extraData={string.drawer_content}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
            />
        </View>
    )
}
export default CustomDrawer;