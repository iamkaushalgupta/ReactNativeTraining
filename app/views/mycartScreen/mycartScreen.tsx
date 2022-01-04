import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import styles from "./style";
import { icons, string, } from "../../constants";

const MyCartScreen = ({ navigation }: any) => {
    const RenderItem = ({ item }: any) => {
        const [number, setNumber] = useState(item.item.quanity)
        return (

            <View style={styles.renderContainer}>


                <View style={styles.renderInnerContainer}>
                    <Image source={item.item.icon} style={styles.foodIcon} />
                    <View>
                        <Text style={styles.nameText}>{item.item.name}</Text>
                        <Text style={styles.priceText}>{item.item.price}</Text>
                    </View>
                </View>
                <View style={styles.increasedecreaseContainer}>
                    <TouchableOpacity onPress={() => setNumber(number - 1)}>
                        <Image source={icons.minus} style={styles.increasedecreaseIcon} />
                    </TouchableOpacity>
                    <Text style={styles.numberText}>{number}</Text>
                    <TouchableOpacity onPress={() => setNumber(number + 1)}>
                        <Image source={icons.plus} style={styles.increasedecreaseIcon} />
                    </TouchableOpacity>
                </View>



            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles.icon} />
                </TouchableOpacity>

                <Text style={styles.heading}> {string.screens.details}</Text>
                <TouchableOpacity style={styles.cartButton}>
                    <Image source={icons.cart} style={styles.cartIcon} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.63 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={string.mycart_data}
                    extraData={string.mycart_data}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={(item) => <RenderItem item={item} />}
                />
            </View>

            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.priceLabelText}>{string.keywords.subtotal}</Text>
                        <Text style={styles.priceValueText}>{string.keywords.subtotalvalue}</Text>

                    </View>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.priceLabelText}>{string.keywords.shippingFee}</Text>
                        <Text style={styles.priceValueText}>{string.keywords.shippingfeevalue}</Text>
                    </View>

                    <View style={styles.modalSecondInnerContainer}>
                        <Text style={styles.totalText}>{string.keywords.total}</Text>
                        <Text style={styles.totalValueText}>{string.keywords.subtotalvalue}</Text>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Paymentsuccess")}>
                            <Text style={styles.ButtonText}>{string.keywords.placeyourorder}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



        </View>
    );
}

export default MyCartScreen