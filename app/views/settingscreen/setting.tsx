import React from "react";
import styles from './style';
import { View,Text, Image, TouchableOpacity, FlatList } from "react-native";
import UseOrientation from "../../config/useOrientation";
import { icons, images, string } from "../../constants";
import { HeaderComponent } from "../../common";
const SettingScreen=(props:any)=>{
    const o =UseOrientation()
    const RenderItem=(data:any)=>{
        
        return(
            <TouchableOpacity style={styles(o).renderContainer} onPress={()=>props.navigation.navigate(data.data.item.navigate)}>
                
                <Image style={styles(o).settingIcon} source={data.data.item.icon}/>
                <Text style={styles(o).settingNameText}>{data.data.item.name}</Text>
                </TouchableOpacity>
            
        )
    }
    return(
        <View style={styles(o).container}>
           <HeaderComponent 
            firstImage={icons.left_arrow}
            secondImage={images.transparent}
            navigation={props.navigation}
            heading={string.screens.settings}
            secondImageNavigate={""}
            firstImageNavigate="back" />
        <FlatList
        style={styles(o).flatList}
        showsVerticalScrollIndicator={false}
        data={string.settings}
        extraData={string.settings}
        keyExtractor={(item,index)=>'Key'+index}
        renderItem={(item)=><RenderItem data={item}/>}
        />


        </View>
    );
}

export default SettingScreen;