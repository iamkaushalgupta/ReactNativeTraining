import React from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './style';
import { icons, string, images } from '../../constants';
import { TextAndInputField,TextAndDateInputField } from '../../common';
import { HeaderComponent } from '../../common';
const AddNewCardScreen = ({ navigation }: any) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <HeaderComponent
                firstImage={icons.left_arrow}
                secondImage={images.transparent}
                navigation={navigation}
                heading={string.screens.addNewCard}
                secondImageNavigate={""}
                firstImageNavigate={navigation.goBack} />

            <View style={styles.cardStyleContainer}>
                <Image source={icons.apple} style={styles.cardIcon} />
                <View>
                    <Text style={styles.cardLabelText}>{string.keywords.name}</Text>
                    <View style={styles.innerCardContainer}>
                        <Text style={styles.cardLabelText}>{string.keywords.CardNumber}</Text>
                        <Text style={styles.cardLabelText}>{string.keywords.date}</Text>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardInputContainer}>
                    <TextAndInputField name="Card Number" check="cardnumber" />
                    <TextAndInputField name="Card Holder Name" check="name" />
                    <View style={styles.innerCardInputContainer}>
                        <View style={styles.smallContainer}>
                            <TextAndDateInputField name="Expiry Date" mindate={(new Date())} maxdate={new Date(new Date().setFullYear(new Date().getFullYear() + 20))}/>
                        </View>

                        <View style={styles.smallContainer}>
                            <TextAndInputField name="CVV" check="cvv"/>
                        </View>
                    </View>
                </View>


                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Checkout')} >
                    <Text style={styles.addText}>{string.keywords.addCard}</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddNewCardScreen