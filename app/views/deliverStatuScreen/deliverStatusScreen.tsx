import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./style";
import { icons, string, images, COLORS } from "../../constants";
import { HeaderComponent } from "../../common";
const DeliveryStatusScreen = ({ navigation }: any) => {
    const RenderItem = (item: any) => {
        return (
            <View style={styles.renderContainer}>
                <View>
                    <Image source={icons.done} style={[{ tintColor: (item.item.done) ? COLORS.primary : COLORS.gray2 }, styles.doneIcon]} />
                    {!item.item.done && (item.index != item.data.length - 1) && <Image source={icons.dotted_line} style={styles.dottedLine} />}
                    {item.item.done && (item.index != item.data.length - 1) && <View style={styles.coloredDottedLine}>

                    </View>}


                </View>
                <View style={styles.renderInnerContainer}>
                    <Text style={styles.orderStatusText}>{item.item.orderStautus}</Text>
                    <Text style={styles.orderStatusMessage}>{item.item.text}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderComponent firstImage={icons.left_arrow} secondImage={images.transparent} navigation={navigation} heading={string.screens.DeliverySatus} secondImageNavigate={""} firstImageNavigate={navigation.goBack} />

            <Text style={styles.firstTitleText}>{string.keywords.estimatedDelivery}</Text>
            <Text style={styles.secondTitleText}>{string.keywords.estimatedDeliveryValue}</Text>

            <View style={styles.mainContainer}>
                <View style={styles.firstInnerMainContainer}>
                    <Text style={styles.trackOrderText}>{string.keywords.trackOrder}</Text>
                    <Text style={styles.trackIdText}>{string.keywords.orderId}</Text>

                </View>

                <View>
                    <FlatList
                        style={styles.flatList}
                        data={string.delivery_status}
                        extraData={string.delivery_status}
                        keyExtractor={(item, index) => "key" + index}
                        renderItem={({ item, index }) => <RenderItem item={item} index={index} data={string.delivery_status} />}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.doneText}>{string.keywords.done}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default DeliveryStatusScreen;