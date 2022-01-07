import React,{useState} from "react";
import {View,Text, TouchableOpacity, Image,TextInput, ScrollView} from 'react-native';
import { COLORS, icons, images,string } from "../../constants";
import { HeaderComponent } from "../../common";
import styles from './styles'

const CheckoutScreen=({navigation}:any)=>{
    const [select,setSelect]=useState(1)
    const RenderItem=(item:any)=>{
        return(
            <TouchableOpacity style={[styles.renderContainer,{borderColor:(item.item.id==select)?COLORS.primary:COLORS.lightGray1}]} onPress={()=>setSelect(item.item.id)} >
                <View style={styles.innerRenderContainer}>
                <View style={styles.payIconContainer}>
                    <Image source={item.item.icon} style={styles.payIcon} resizeMode="contain"/>
                </View>
                <Text style={styles.cardText}>{item.item.text}</Text>
                
                </View>
                <View style={[styles.dotContainer,{borderColor:(item.item.id==select)?COLORS.primary:COLORS.lightGray1}]}>
                    {(item.item.id==select)&&
                        <Image source={icons.simple_dot} style={styles.dot}/>
                    }
                </View>


            </TouchableOpacity>
        
        )
    }

    return(
        <View style={styles.container}>
              <HeaderComponent firstImage={icons.left_arrow} secondImage={images.transparent} navigation={navigation} heading={string.screens.Checkout} secondImageNavigate={""} />

            <ScrollView showsVerticalScrollIndicator={false}>
              <View>

            {string.MyCards.filter(oldcard=>oldcard.oldCard.includes("yes")).map( item=> {
            
            return (
                <View  key={item.id.toString()}>
                    <RenderItem item={item} />
                </View>
              )})}
           
            
           </View>

           <View>
               <Text style={styles.titleText}>{string.keywords.deliveryAddress}</Text>
                <View style={styles.deliveryAddressContainer}>
                    <Image source={icons.gps} style={styles.gpsIcon}/>
                    <Text style={styles.addressText}>{string.keywords.address}</Text>
                </View>     
           </View>


           <View>
               <Text style={styles.titleText}>{string.keywords.addCoupon}</Text>
                <View style={styles.couponContainer}>
                    <TextInput placeholder={string.keywords.couponCode} style={styles.textInput}></TextInput>
                    <TouchableOpacity style={styles.discountIconContainer}>
                            <Image source={icons.discount} style={styles.discountIcon}/>
                        </TouchableOpacity>    
                </View>     
           </View>
           </ScrollView>

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
    )
}

export default CheckoutScreen