import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./style";
import { icons, images, string, COLORS } from "../../constants";
import { HeaderComponent } from "../../common";
const MyOrderScreen = ({ navigation }: any) => {
    const [available, setAvailable] = useState(true)

    const RenderItem = ({ item }: any) => {
        return (
            <View style={styles.renderContainer}>
                <View>
                    <Image source={item.icon} style={styles.companyImage} />
                </View>

                <View>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.discountText}>{item.discount}</Text>
                    <Text style={styles.validText}>{item.valid}</Text>

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderComponent
                firstImage={icons.left_arrow}
                secondImage={images.profile}
                navigation={navigation}
                heading={string.screens.MyCoupon}
                secondImageNavigate={"MyAccountDetail"}
                firstImageNavigate={navigation.goBack} />

            <View style={styles.switchButtonContainer}>
                <TouchableOpacity style={[styles.switchButton, { backgroundColor: (available) ? COLORS.primary : COLORS.lightOrange2 }]} onPress={() => setAvailable(true)}

                >
                    <Text style={[styles.switchButtonText, { color: (available) ? COLORS.white : COLORS.primary }]}>{string.keywords.available}</Text>
                </TouchableOpacity>



                <TouchableOpacity style={[styles.switchButton, { backgroundColor: (!available) ? COLORS.primary : COLORS.lightOrange2 }]} onPress={() => setAvailable(false)}>
                    <Text style={[styles.switchButtonText, { color: (!available) ? COLORS.white : COLORS.primary }]}>{string.keywords.used}</Text>
                </TouchableOpacity>
            </View>

            {available && <View style={styles.contentContainer}>


                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={string.available_coupon}
                    extraData={string.available_coupon}
                    keyExtractor={(item, index) => 'Key' + index}
                    renderItem={({ item }) => <RenderItem item={item} />}

                />


            </View>}

            {!available && <View style={styles.contentContainer}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={string.used_coupon}
                    extraData={string.used_coupon}
                    keyExtractor={(item, index) => 'Key' + index}
                    renderItem={({ item }) => <RenderItem item={item} />}

                />

            </View>}

        </View>
    )
}
export default MyOrderScreen