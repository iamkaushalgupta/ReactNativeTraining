import React from "react";
import {
    Image, Text, TouchableOpacity,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    ImageBackground,
    TextInput
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
import RenderItem1 from './renderItem1'
import RenderItem2 from './renderItem2'
interface InputProps {
    navigation: any
}
const SearchScreen = (props: InputProps) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image source={icons.search} style={styles.searchIcon} />
                <TextInput placeholder={constants.keywords.searchfortopiccoursesandeducators}
                    style={styles.searchInput} placeholderTextColor={COLORS.gray40}></TextInput>
            </View>

            <FlatList
            showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Text style={styles.titleText}>{constants.keywords.TopSearches}</Text>
                            <View>
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    ItemSeparatorComponent={() => {
                                        return (
                                            <View style={styles.itemSeprator} />
                                        )
                                    }}
                                    data={dummyData.top_searches}
                                    extraData={dummyData.top_searches}
                                    keyExtractor={(item, index) => 'key' + index}
                                    renderItem={({ item, index }) => <RenderItem1 index={index} item={item} navigation={navigation} />}
                                />
                            </View>
                            <Text style={styles.titleText}>{constants.keywords.BrowseCategories}</Text>
                        </>
                    )
                }}
                data={dummyData.categories}
                extraData={dummyData.categories}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item, index }) => <RenderItem2 item={item}
                    index={index} navigation={navigation} />}
            />

        </View>
    )
}

export default SearchScreen;