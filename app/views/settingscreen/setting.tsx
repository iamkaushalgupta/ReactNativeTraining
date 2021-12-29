import React from "react";
import styles from './style';
import { View,Text, Image, TouchableOpacity, FlatList } from "react-native";
import UseOrientation from "../../config/useOrientation";
import { icons, string } from "../../constants";

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
            <View style={styles(o).upperContainer}>
                    <TouchableOpacity style={styles(o).backButton} onPress={()=>props.navigation.goBack()}>
                        <Image source={icons.left_arrow} style={styles(o).icon}/>
                        </TouchableOpacity>
                      
                    <Text style={styles(o).heading}> {string.screens.settings}</Text>
                    {<TouchableOpacity style={styles(o).backButton}>
                        <Image source={icons.left_arrow} style={styles(o).icon}/>
                        </TouchableOpacity>}
          

            </View>

        <FlatList
        style={styles(o).flatList}
        data={string.settings}
        extraData={string.settings}
        keyExtractor={(item,index)=>'Key'+index}
        renderItem={(item)=><RenderItem data={item}/>}
        />


        </View>
    );
}

export default SettingScreen;