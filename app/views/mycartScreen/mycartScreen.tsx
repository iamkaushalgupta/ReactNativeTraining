import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import styles from "./style";
import { icons, string, } from "../../constants";
import { SwipeListView } from 'react-native-swipe-list-view';

const MyCartScreen = ({ navigation }: any) => {
    const [data, setData] = useState(string.mycart_data)
    const [totalPrice,settotalPrice]=useState(0)
        
        // let total=0
        // data.forEach((item)=>{
        //     total=total+item.price *item.quanity
        // })
        // settotalPrice(total)
    

    const updateQuanity=(index:number, number:any)=>{
        data[index].quanity=number
    }
    const deleteRow = (data: any, rowKey: any,) => {
        const newData = [...data];
        const prevIndex = data.findIndex((item: { key: any; }) => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setData(newData);
    };

    const RenderHiddenItem = ({ item, data }: any) => {
        return (
            <View style={styles.renderHiddenItem}>
                <TouchableOpacity onPress={() => deleteRow(data, item.key)}>
                    <Image source={icons.trash} style={styles.trashIcon} />
                </TouchableOpacity>
            </View>
        )
    }

    const RenderItem = ( {item} : any) => {
        const [number, setNumber] = useState(item.item.quanity)
        const [itemPrice,setItemPrice]=useState(item.item.price*number)
        return (
            <View style={styles.renderContainer}>
                <View style={styles.renderInnerContainer}>
                    <Image source={item.item.icon} style={styles.foodIcon} />
                    <View>
                        <Text style={styles.nameText}>{item.item.name}</Text>
                        <Text style={styles.priceText}>${itemPrice}</Text>
                    </View>
                </View>
                <View style={styles.increasedecreaseContainer}>
                    <TouchableOpacity onPress={() => {setNumber(number - 1),setItemPrice(item.item.price*(number-1)),updateQuanity(item.index,number-1)}}>
                        <Image source={icons.minus} style={styles.increasedecreaseIcon} />
                    </TouchableOpacity>
                    <Text style={styles.numberText}>{number}</Text>
                    <TouchableOpacity onPress={() => {setNumber(number + 1),setItemPrice(item.item.price*(number+1)),updateQuanity(item.index,number+1)}}>
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

                <Text style={styles.heading}> {string.screens.Mycart}</Text>
                <TouchableOpacity style={styles.cartButton}>
                    <Image source={icons.cart} style={styles.cartIcon} />
                </TouchableOpacity>
            </View>


            <SwipeListView
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={(item) => <RenderItem item={item} />}
                renderHiddenItem={(item) => <RenderHiddenItem item={item} data={data} />}
                leftOpenValue={0}
                rightOpenValue={-100}
            />

            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.priceLabelText}>{string.keywords.subtotal}</Text>
                        <Text style={styles.priceValueText}>${totalPrice}</Text>

                    </View>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.priceLabelText}>{string.keywords.shippingFee}</Text>
                        <Text style={styles.priceValueText}>{string.keywords.shippingfeevalue}</Text>
                    </View>

                    <View style={styles.modalSecondInnerContainer}>
                        <Text style={styles.totalText}>{string.keywords.total}</Text>
                        <Text style={styles.totalValueText}>${"{TotalPrice()}"}</Text>
                    </View>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("MyCard")}>
                        <Text style={styles.ButtonText}>{string.keywords.placeyourorder}</Text>
                    </TouchableOpacity>

                </View>
            </View>



        </View>
    );
}

export default MyCartScreen