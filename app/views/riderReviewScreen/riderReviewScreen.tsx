import React, { useState } from "react";
import styles from "./style";
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { icons, string, images, COLORS } from "../../constants";
import { HeaderComponent } from "../../common";

const RiderReviewScreen = ({ navigation }: any) => {
    const [tipSelected, setTipSelected] = useState(1)
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <HeaderComponent
                firstImage={icons.left_arrow}
                secondImage={images.profile}
                navigation={navigation}
                heading={string.screens.riderReview}
                secondImageNavigate={"MyAccountDetail"}
                firstImageNavigate={navigation.goBack} />
            <ScrollView>
                <View style={styles.midContainer}>
                    <Image style={styles.riderImage} source={string.RiderReview.icon} resizeMode="contain" />
                    <Text style={styles.nameText}>{string.RiderReview.name}</Text>
                    <Text style={styles.deliveryPersonText}>{string.RiderReview.deliveryPerson}</Text>
                    <View style={styles.orderStatusContainer}>
                        <Image source={icons.dot} style={styles.orderStatusIcon} />
                        <Text style={styles.orderStatusText}>{string.RiderReview.orderStatus}</Text>
                    </View>
                    <Text style={styles.reviewText}>{string.keywords.pleaseratedeliveryservice}</Text>
                    <View style={styles.ratingContainer}>
                        <Image source={icons.star} style={styles.goldenStarIcon} />
                        <Image source={icons.star} style={styles.goldenStarIcon} />
                        <Image source={icons.star} style={styles.goldenStarIcon} />
                        <Image source={icons.star} style={styles.goldenStarIcon} />
                        <Image source={icons.star} style={styles.grayStarIcon} />
                    </View>
                </View>


                <View>
                    <Text style={styles.addTipText}>{string.keywords.addTips}</Text>
                    <FlatList

                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={string.RiderReview.tips}
                        extraData={string.Detailhamburger.sizes}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.tipRenderContainer, {
                                    backgroundColor: (tipSelected == index) ? COLORS.primary : COLORS.lightGray2
                                }]} onPressIn={() => setTipSelected(index)}>
                                    <Text style={[styles.itemText, {
                                        color: (tipSelected == index) ? COLORS.white : COLORS.gray2
                                    }]}>{item}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <TextInput
                    multiline={true}
                    style={styles.textInput} placeholder="Add a comment"></TextInput>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.ButtonText}>{string.keywords.submitReview}</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default RiderReviewScreen;