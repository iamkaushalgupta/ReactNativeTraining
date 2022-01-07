import React, { useState } from "react";
import {View,Text,TouchableOpacity,Image, SectionList, ScrollView, FlatList} from 'react-native';
import styles from "./style";
import { icons,string,images,COLORS } from "../../constants";

const MyCardScreen = ({navigation}:any)=>{
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
              <View style={styles.upperContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.heading}> {string.screens.MyCards}</Text>
                <TouchableOpacity>
                    <Image source={images.transparent} style={styles.iconProfile} />
                </TouchableOpacity>

            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
            {string.MyCards.filter(oldcard=>oldcard.oldCard.includes("yes")).map( item=> {
            
            return (
                <View  key={item.id.toString()}>
                    <RenderItem item={item} />
                </View>
              )})}
           
            
           </View> 
            
            <Text style={styles.sepratorTitleText}>Add New Card</Text>
            
            <View>
            {string.MyCards.filter(oldcard=>oldcard.oldCard.includes("no")).map( item=> {
            
            return (
                <View key={item.id.toString()}>
                    <RenderItem item={item}/>
               </View>
              )})}
           
            
           </View> 
            
           </ScrollView>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addText}>{string.keywords.add}</Text>
                </TouchableOpacity>

        </View>        
    )
}

export default MyCardScreen;