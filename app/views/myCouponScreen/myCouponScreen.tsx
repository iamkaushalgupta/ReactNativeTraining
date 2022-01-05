import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./style";
import { icons, images, string, COLORS } from "../../constants";

const MyOrderScreen = ({ navigation }: any) => {
    const [available, setAvailable] = useState(true)

    const RenderItem = ({ item }: any) => {
        return (
           <View style={styles.renderContainer}>
               <View>
                    <Image source={item.icon} style={styles.companyImage}/>
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
            <View style={styles.upperContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.heading}> {string.screens.MyCoupon}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
                    <Image source={images.profile} style={styles.iconProfile} />
                </TouchableOpacity>



            </View>

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