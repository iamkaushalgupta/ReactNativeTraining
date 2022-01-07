import React from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './style';
import { icons, string, images } from '../../constants';
import { TextAndInputField } from '../../common';
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
            firstImageNavigate="back" />

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
                <TextAndInputField name="Card Number" />
                <TextAndInputField name="Card Holder Name" />
                <View style={styles.innerCardInputContainer}>
                    <View style={styles.smallContainer}>
                        <TextAndInputField name="Expiry Date" />
                    </View>

                    <View style={styles.smallContainer}>
                        <TextAndInputField name="CVV" />
                    </View>
                </View>
            </View>


        <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('Checkout')} >
            <Text style={styles.addText}>{string.keywords.addCard}</Text>
        </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddNewCardScreen