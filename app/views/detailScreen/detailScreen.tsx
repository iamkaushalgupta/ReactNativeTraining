import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from "./style";
import { icons, string, images, COLORS } from "../../constants";

const DetailScreen = ({ navigation }: any) => {
    const [sizeSelected, setSizeSelected] = useState(0)
    const [number, setNumber] = useState(1)
    return (

        <ScrollView style={styles.container}>
            <View style={styles.upperContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles.icon} />
                </TouchableOpacity>

                <Text style={styles.heading}> {string.screens.details}</Text>
                <TouchableOpacity style={styles.cartButton} onPress={()=>navigation.navigate('Cart')}>
                    <Image source={icons.cart} style={styles.cartIcon} />
                </TouchableOpacity>
            </View>


            <View style={styles.FoodContainer}>
                <View style={styles.foodRenderUpperContainer}>
                    <View style={styles.caloriesContainer}>
                        <Image source={icons.calories} style={styles.caloriesIcon} />
                        <Text style={styles.labelText}>{string.Detailhamburger.calories} {string.keywords.calories}</Text>
                    </View>
                    <Image source={icons.love} style={styles.loveIcon} />
                </View>

                <Image source={string.Detailhamburger.image} style={styles.FoodIcon} />
            </View>
            <Text style={styles.foodNameText}>{string.Detailhamburger.name}</Text>

            <Text style={styles.descriptionText}>{string.Detailhamburger.description}</Text>

            <View style={styles.midContainer}>
                <View style={styles.ratingContainer}>
                    <Image source={icons.star} style={styles.starIcon} />
                    <Text style={styles.starText}>{string.Detailhamburger.rating}</Text>
                </View>
                <View style={styles.normalContainer}>
                    <Image source={icons.clock} style={styles.normalIcon} />
                    <Text style={styles.normalText}>{string.Detailhamburger.time}</Text>
                </View>
                <View style={styles.normalContainer}>
                    <Image source={icons.dollar} style={styles.normalIcon} />
                    <Text style={styles.normalText}>{string.Detailhamburger.shipping}</Text>
                </View>
            </View>

            <View style={styles.sizeContainer}>
                <Text style={styles.sizeText}>{string.keywords.sizes} : </Text>
                <FlatList
                    horizontal
                    data={string.Detailhamburger.sizes}
                    extraData={string.Detailhamburger.sizes}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={[styles.sizeRenderContainer, {
                                backgroundColor: (sizeSelected == index) ? COLORS.primary : COLORS.lightGray2
                            }]} onPressIn={() => setSizeSelected(index)}>
                                <Text style={[styles.itemText, {
                                    color: (sizeSelected == index) ? COLORS.white : COLORS.gray2
                                }]}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <View style={styles.resturantContainer}>
                <Image source={images.profile} style={styles.companyIcon} />
                <View style={styles.companyNameContainer}>
                    <Text style={styles.companyText}>{string.keywords.companyName}</Text>
                    <Text style={styles.labelText}>{string.keywords.distanceApart}</Text>
                </View>

                <Image source={icons.star} style={styles.goldenStarIcon} />
                <Image source={icons.star} style={styles.goldenStarIcon} />
                <Image source={icons.star} style={styles.goldenStarIcon} />
                <Image source={icons.star} style={styles.goldenStarIcon} />
                <Image source={icons.star} style={styles.goldenStarIcon} />

            </View>
            <View style={styles.buyContainer}>
                <View style={styles.increasedecreaseContainer}>
                    <TouchableOpacity onPress={() => setNumber(number - 1)}>
                        <Image source={icons.minus} style={styles.increasedecreaseIcon} />
                    </TouchableOpacity>
                    <Text style={styles.numberText}>{number}</Text>
                    <TouchableOpacity onPress={() => setNumber(number + 1)}>
                        <Image source={icons.plus} style={styles.increasedecreaseIcon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate("Cart")}>
                    <Text style={styles.buyNowText}>{string.keywords.buyNow}</Text>
                    <Text style={styles.buyNowText}>{string.Detailhamburger.price}</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>)
}

export default DetailScreen