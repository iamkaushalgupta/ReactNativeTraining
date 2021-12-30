import React, { useState } from "react";
import {  Text, View,TouchableOpacity,Image, TextInput, FlatList,ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './style'
import {COLORS, icons, images, string} from '../../constants'
import UseOrientation from "../../config/useOrientation";

interface homeProp{
    navigation: any
}
const HomeScreen = (props:homeProp) => {
    const o = UseOrientation()
    const [selectedCategory, setSelectedCategory]=useState(1)
    const [filterOpen,setFilterOpen]=useState(false)

    const FoodCategoryRenderItem=({item,index}:any)=>{
        return(
            <TouchableOpacity
                onPressIn={()=>setSelectedCategory(index+1)}    
                style={[{
                    backgroundColor:(selectedCategory==item.id)?COLORS.primary:COLORS.lightGray1
                }, styles(o).smallFoodContainer]}
            >
                    
                    <Image source={item.icon} style={styles(o).smallFoodIcon}/>
                    <Text style={[styles(o).whiteLabelText,{color:(selectedCategory==item.id)?COLORS.white:COLORS.gray}]}>{item.label}</Text>
            </TouchableOpacity>)
            
        
        }
        const FoodRenderItem=({item,index}:any)=>{
            return(
                <TouchableOpacity style={ styles(o).FoodContainer}>
                        <View style={styles(o).foodRenderUpperContainer}>
                            <View style={styles(o).caloriesContainer}>
                            <Image source={icons.calories} style={styles(o).caloriesIcon}/>
                            <Text>{item.calories} {string.keywords.calories}</Text>
                            </View>
                            <Image source={icons.love} style={styles(o).loveIcon}/>
                        </View>

                        <Image source={item.icon} style={styles(o).FoodIcon}/>
                        <Text style={styles(o).labelText}>{item.label}</Text>
                        <Text style={styles(o).simpleText}>{item.text}</Text>
                        <Text style={styles(o).priceText}>{item.cost}</Text>
                </TouchableOpacity>)
                
            
            }


    return (
        <ScrollView style={styles(o).container} showsVerticalScrollIndicator={false}>
            <Modal
            visible={filterOpen}
            
            transparent={true}
            >
                <View style={styles(o).modalContainer}>
                    {/* <TouchableWithoutFeedback onPress={()=>setFilterOpen(false)} style={{flex:0.2}}/> */}
                     <View style={{backgroundColor:'white',flex:1}}>

                     </View>
                </View>

            </Modal>
            <View style={styles(o).upperContainer}>
                    <TouchableOpacity style={styles(o).backButton} onPress={()=>props.navigation.goBack()}>
                        <Image source={icons.left_arrow} style={styles(o).icon}/>
                        </TouchableOpacity>
                      
                    <Text style={styles(o).heading}> {string.screens.home}</Text>
                        <Image source={images.profile} style={styles(o).iconProfile}/>
                 </View>
        

                <View style={styles(o).searchContainer}>
                <View style={styles(o).innerSearchContainer}>
                 <Image source={icons.search} style={styles(o).searchContainerIcon}/>
                    
                 <TextInput style={styles(o).searchInput}> </TextInput>
                 </View>
                        <TouchableOpacity onPress={()=> setFilterOpen(true)}>
                        <Image source={icons.filter} style={styles(o).searchContainerIcon}/>
                        </TouchableOpacity>
                </View>

                <Text style={styles(o).colorText}>{string.keywords.deliveryto}</Text>
                    <View style={styles(o).addressContainer}>
                    <Text style={styles(o).labelText}>{string.keywords.address}</Text>
                    <TouchableOpacity>
                        <Image source={icons.down_arrow} style={styles(o).primaryColorIcon}/>
                    </TouchableOpacity>
                    </View>

            <View style={styles(o).flatListContainer}>
                    <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                
                     data={string.tags}
                    extraData={string.tags}
                    keyExtractor={(item,index)=>'Key'+index}
                    renderItem={({item,index})=><FoodCategoryRenderItem item={item} index={index}/>}
                    />
                </View>
                    <View style={styles(o).midContainer}>
                        <Text style={styles(o).labelText}>{string.keywords.populatnearyou}</Text>
                        <TouchableOpacity><Text style={styles(o).colorText}>{string.keywords.showall}</Text></TouchableOpacity>
                    </View>
                
                <View style={styles(o).flatListContainer}>
                    <FlatList
                        horizontal
                         showsHorizontalScrollIndicator={false}
                         data={string.tags}
                         extraData={string.tags}
                         keyExtractor={(item,index)=>'Key'+index}
                         
                         renderItem={({item,index})=><FoodRenderItem item={item} index={index}/>}
                    />
                </View>
                <View style={styles(o).midContainer}>
                        <Text style={styles(o).labelText}>{string.keywords.populatnearyou}</Text>
                        <TouchableOpacity><Text style={styles(o).colorText}>{string.keywords.showall}</Text></TouchableOpacity>
                    </View>
                
                <View style={styles(o).flatListContainer}>
                    <FlatList
                        horizontal
                         showsHorizontalScrollIndicator={false}
                         data={string.tags}
                         extraData={string.tags}
                         keyExtractor={(item,index)=>'Key'+index}
                         
                         renderItem={({item,index})=><FoodRenderItem item={item} index={index}/>}
                    />
                </View>

        </ScrollView>
    );
}
export default HomeScreen;