import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, SectionList } from "react-native";
import styles from "./style";
import { icons, images, string, COLORS } from "../../constants";
import { HeaderComponent } from "../../common";

const MyOrderScreen = ({ navigation }: any) => {
    const [history, setHistory] = useState(true)

    const RenderItem = ({ item }: any) => {
        return (
           <View style={styles.renderContainer}>
           <View style={styles.InsideRenderContainer}>
           
                <View style={styles.innerRenderContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={item.icon} style={styles.renderIcon} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                              <View style={styles.datetimeItemsContainer}>
                                <Text style={styles.dateAndItemText} >{item.datetime}</Text>
                                <Image source={icons.dot} style={styles.itemsDot}/>
                                <Text style={styles.dateAndItemText}>  {item.items} {string.keywords.items}</Text>
                              </View>

                        <View style={styles.orderContainer}>
                            <Image style ={[styles.ordersDot, {tintColor:(item.orderdelivered)?COLORS.green:COLORS.red}]} source={icons.dot}/>
                            <Text style={[{color:(item.orderdelivered)?COLORS.green:COLORS.red},styles.orderText]}>{(item.orderdelivered)?string.keywords.orderDelivered:string.keywords.orderCancel}</Text>
                        </View>
                    </View>
                </View>

            <Text style={styles.priceText}>{item.price}</Text>
            

            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.firstButton}>
                    <Text style={styles.firstButtonText}>{string.keywords.reorder}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondButton}>
                    <Text style={styles.secondButtonText}>{string.keywords.rate}</Text>
                </TouchableOpacity>
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
            heading={string.screens.MyOrder}
            secondImageNavigate={"MyAccountDetail"}
            firstImageNavigate="back" />
            <View style={styles.switchButtonContainer}>
                <TouchableOpacity style={[styles.switchButton, { backgroundColor: (history) ? COLORS.primary : COLORS.lightOrange2 }]} onPress={() => setHistory(true)}

                >
                    <Text style={[styles.switchButtonText, { color: (history) ? COLORS.white : COLORS.primary }]}>{string.keywords.history}</Text>
                </TouchableOpacity>



                <TouchableOpacity style={[styles.switchButton, { backgroundColor: (!history) ? COLORS.primary : COLORS.lightOrange2 }]} onPress={() => setHistory(false)}>
                    <Text style={[styles.switchButtonText, { color: (!history) ? COLORS.white : COLORS.primary }]}>{string.keywords.upcoming}</Text>
                </TouchableOpacity>
            </View>

            {history && <View style={styles.contentContainer}>

                
                    <SectionList
                        showsVerticalScrollIndicator={false}
                        sections={string.My_orders_history}
                        keyExtractor={(item, index) => 'Key' + index}
                        renderItem={({ item }) => <RenderItem item={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.sepratorTitleText}>{title}</Text>
                        )}
                    />
                

            </View>}

            {!history && <View style={styles.contentContainer}>
            
                    <SectionList
                        showsVerticalScrollIndicator={false}
                        sections={string.My_orders_upcoming}
                        keyExtractor={(item, index) => 'Key' + index}
                        renderItem={({ item }) => <RenderItem item={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.sepratorTitleText}>{title}</Text>
                        )}
                    />
            
            </View>}

        </View>
    )
}
export default MyOrderScreen