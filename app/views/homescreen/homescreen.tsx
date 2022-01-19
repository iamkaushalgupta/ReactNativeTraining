import React, { useState} from "react";
import {
    Text, View,
    TouchableOpacity, Image,
    TextInput, FlatList, ScrollView, Modal,
    TouchableWithoutFeedback
} from 'react-native';
import styles from './style'
import { HeaderComponent } from "../../common";
import { COLORS, icons, images, string } from '../../constants'
import UseOrientation from "../../config/useOrientation";
import MultiSlider from '@ptomasroos/react-native-multi-slider'

interface homeProp {
    navigation: any
}
const HomeScreen = (props: homeProp) => {
    const o = UseOrientation()
    const [selectedCategory, setSelectedCategory] = useState(1)
    const [filterOpen, setFilterOpen] = useState(false)
    const [addressArrow, setAddressArrow] = useState(false)
    const selectedData = string.tags.filter(data => data.category == selectedCategory)
    const [applyFilter, setApplyFilter] = useState(false)
    const [ratingFilter, setRatingFilter] = useState(0)
    const [deliveryTimeFilter, setDeliveryTimeFilter] = useState('')
    const [distanceFilter, setDistanceFilter] = useState([])
    const [priceFilter, setPriceFilter] = useState([])
    let filterData = string.tags
    
    const [search,setSearch]=useState({text:' ',state:false})
    const SearchData = string.tags.filter(a =>a.text.toLowerCase().match(search.text.toLowerCase())).map(a=>a);
    if (ratingFilter != 0) {
        filterData = filterData.filter(a => a.rating == ratingFilter)
    }
    if (deliveryTimeFilter != '') {
        filterData = filterData.filter(a => a.delivery_time == deliveryTimeFilter)
    }
    if (distanceFilter.length != 0) {
        filterData = filterData.filter(a => a.distance > distanceFilter[0] && a.distance < distanceFilter[1])
    }
    if (priceFilter.length != 0) {
        filterData = filterData.filter(a => a.price > priceFilter[0] && a.price < priceFilter[1])
    }


    const ClearFilter = () => {
        setApplyFilter(false)
        setRatingFilter(0)
        setDeliveryTimeFilter('')
        setDistanceFilter([])
        setPriceFilter([])
    }


    const FoodCategoryRenderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedCategory(index + 1)}
                style={[{
                    backgroundColor: (selectedCategory == item.id) ? COLORS.primary : COLORS.lightGray1
                }, styles(o).smallFoodContainer]}
            >

                <Image source={item.icon} style={styles(o).smallFoodIcon} />
                <Text style={[styles(o).whiteLabelText, { color: (selectedCategory == item.id) ? COLORS.white : COLORS.gray }]}>{item.name}</Text>
            </TouchableOpacity>)
    }
    const FoodRenderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity style={styles(o).FoodContainer} onPress={() => props.navigation.navigate("Detail")}>
                <View style={styles(o).foodRenderUpperContainer}>
                    <View style={styles(o).caloriesContainer}>
                        <Image source={icons.calories} style={styles(o).caloriesIcon} />
                        <Text style={styles(o).simpleText}>{item.calories} {string.keywords.calories}</Text>
                    </View>
                    <Image source={icons.love} style={[styles(o).loveIcon, { tintColor: (item.isFavourite) ? COLORS.red : COLORS.gray }]} />
                </View>

                <Image source={item.icon} style={styles(o).FoodIcon} />
                <Text style={styles(o).foodText}>{item.label}</Text>
                <Text style={styles(o).simpleText}>{item.text}</Text>
                <Text style={styles(o).priceText}>{item.cost}</Text>
            </TouchableOpacity>)
    }


    return (
        <View style={styles(o).container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={filterOpen}
                style={{ backgroundColor: COLORS.transparentBlack7 }}>

                <View style={styles(o).modalContainer}>
                    <TouchableWithoutFeedback onPress={() => setFilterOpen(false)} >
                        <View style={styles(o).modalUpper}></View>
                    </TouchableWithoutFeedback>
                    <ScrollView style={styles(o).modalLower} showsVerticalScrollIndicator={false}>
                        <View style={styles(o).modalLowerUpperContainer}>
                            <Text style={styles(o).modalheadText}>{string.keywords.filteryoursearch}</Text>
                            <TouchableOpacity style={styles(o).closeButton} onPress={() => setFilterOpen(false)}>
                                <Image source={icons.close} style={styles(o).closeIcon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles(o).modalText}>{string.keywords.distance}</Text>
                        <MultiSlider
                            values={[3, 10]}
                            min={1}
                            max={20}
                            step={1}
                            sliderLength={o.width * 0.9}
                            markerOffsetY={20}
                            selectedStyle={{ backgroundColor: COLORS.primary }}
                            trackStyle={{ height: 10, borderRadius: 10, backgroundColor: COLORS.lightGray1 }}
                            minMarkerOverlapDistance={50}
                            onValuesChange={(item: any) => setDistanceFilter(item)}
                            customMarker={(e) => {

                                return (
                                    <View style={styles(o).customMarkerContainer}>
                                        <View style={styles(o).customMarkerCircle}></View>
                                        <Text style={styles(o).customMarkerText}>{e.currentValue}Km</Text>
                                    </View>
                                )
                            }}
                        >
                        </MultiSlider>
                        <Text style={styles(o).modalText}>{string.keywords.deliverytime}</Text>
                        <View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={string.delivery_time}
                                extraData={string.delivery_time}
                                keyExtractor={(item, index) => 'key' + index}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={[styles(o).deliveryFlatList,{backgroundColor:(deliveryTimeFilter == item.label)?COLORS.primary:COLORS.lightGray1}]} onPress={() => setDeliveryTimeFilter(item.label)}>
                                            <Text style={[styles(o).iconText, { color: (deliveryTimeFilter == item.label) ? COLORS.golden : COLORS.gray,}
                                            ]}>{item.label}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <Text style={styles(o).modalText}>{string.keywords.pricerange}</Text>
                        <MultiSlider
                            values={[10, 50]}
                            min={1}
                            max={100}
                            step={1}
                            sliderLength={o.width * 0.9}
                            markerOffsetY={20}
                            selectedStyle={{ backgroundColor: COLORS.primary }}
                            trackStyle={{ height: 10, borderRadius: 10, backgroundColor: COLORS.lightGray1 }}
                            minMarkerOverlapDistance={50}
                            onValuesChange={(item: any) => setPriceFilter(item)}
                            customMarker={(e) => {
                                return (
                                    <View style={styles(o).customMarkerContainer}>
                                        <View style={styles(o).customMarkerCircle}></View>
                                        <Text style={styles(o).customMarkerText}>{"$"}{e.currentValue}</Text>
                                    </View>
                                )
                            }}
                        >
                        </MultiSlider>
                        <Text style={styles(o).modalText}>{string.keywords.ratings}</Text>
                        <View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={string.ratings}
                                extraData={string.ratings}
                                keyExtractor={(item, index) => 'key' + index}
                                renderItem={({ item, index }) => {

                                    return (
                                        <TouchableOpacity style={[styles(o).ratingFlatList,{backgroundColor:(ratingFilter > index)?COLORS.primary:COLORS.lightGray1}]} onPress={() => setRatingFilter(index + 1)}>
                                            <Text style={[styles(o).iconText]}>{item.label}</Text>
                                            <Image source={icons.star} style={[styles(o).iconStar, { tintColor: (ratingFilter > index) ? COLORS.golden : COLORS.gray2 }]} />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>

                        <TouchableOpacity style={styles(o).nextButton} onPress={() => { setApplyFilter(true), setFilterOpen(false) }}>
                            <Text style={styles(o).nextButtonText}>{string.keywords.applyfilter}</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

            </Modal>
           <HeaderComponent
                firstImage={icons.menu}
                secondImage={images.profile}
                navigation={props.navigation}
                heading={string.screens.home}
                secondImageNavigate={"MyAccountDetail"}
                firstImageNavigate={props.navigation.openDrawer}/>

            <View style={styles(o).searchContainer}>
                <View style={styles(o).innerSearchContainer}>
                    <Image source={icons.search} style={styles(o).searchContainerIcon} />
                    <TextInput style={styles(o).searchInput}
                    value={search.text}
                    onChangeText={(item:string)=>setSearch({text:item,state:true})}> 
                    </TextInput>
               
                </View>
                <View style={styles(o).crossIconContainer}>
                {search.state&&
                    <TouchableOpacity onPress={()=>setSearch({text:'',state:false})}>
                        <Image source={icons.close} style={styles(o).crossIcon}/>
                        </TouchableOpacity>
                    
                }
                <TouchableOpacity onPress={() => setFilterOpen(true)}>
                    <Image source={icons.filter} style={styles(o).searchContainerIcon} />
                </TouchableOpacity>
                </View>
            </View>
            {
                search.state&&
                
                <View>
                    {SearchData.length==0?
                    <Text>Search Not Found</Text>
                    :
                    
                    <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={SearchData}
                    extraData={SearchData}
                    keyExtractor={(item,index)=>'key'+index}
                    renderItem={({ item, index }) => <FoodRenderItem item={item} index={index} />}
                    />
                    }
                    </View>
            }
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles(o).colorText}>{string.keywords.deliveryto}</Text>
                <View style={styles(o).addressContainer}>
                    <Text style={styles(o).labelText}>{string.keywords.address1}</Text>
                    <TouchableOpacity onPress={() => setAddressArrow(!addressArrow)}>
                        {!addressArrow && <Image source={icons.down_arrow} style={styles(o).primaryColorIcon} />}
                        {addressArrow && <Image source={icons.left_arrow} style={styles(o).primaryColorIcon} />}
                    </TouchableOpacity>

                </View>
                {addressArrow && <Text style={styles(o).labelText}>{string.keywords.address2}</Text>}
                {!applyFilter && <View style={styles(o).flatListContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={string.categories}
                        extraData={string.categories}
                        keyExtractor={(item, index) => 'Key' + index}
                        renderItem={({ item, index }) => <FoodCategoryRenderItem item={item} index={index} />}
                    />
                </View>}
                {!applyFilter && <View style={styles(o).midContainer}>
                    <Text style={styles(o).labelText}>{string.keywords.populatnearyou}</Text>
                    <TouchableOpacity><Text style={styles(o).colorText}>{string.keywords.showall}</Text></TouchableOpacity>
                </View>}

                {!applyFilter && <View style={styles(o).flatListContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={selectedData}
                        extraData={selectedData}
                        keyExtractor={(item, index) => 'Key' + index}
                        renderItem={({ item, index }) => <FoodRenderItem item={item} index={index} />}
                    />
                </View>}
                {!applyFilter && <View style={styles(o).midContainer}>
                    <Text style={styles(o).labelText}>{string.keywords.specialFood}</Text>
                    <TouchableOpacity><Text style={styles(o).colorText}>{string.keywords.showall}</Text></TouchableOpacity>
                </View>}

                {applyFilter &&
                    <TouchableOpacity style={styles(o).clearFilterButton} onPress={() => ClearFilter()}>
                        <Text style={styles(o).clearButtonText}>{string.keywords.clearFilter}</Text>
                    </TouchableOpacity>
                }

                <View style={styles(o).flatListContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        extraData={filterData}
                        keyExtractor={(item, index) => 'Key' + index}
                        renderItem={({ item, index }) => <FoodRenderItem item={item} index={index} />}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
export default HomeScreen;