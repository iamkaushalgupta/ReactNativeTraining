import React,{useState} from "react";
import {View, Text, TouchableOpacity,Image, FlatList,Switch} from 'react-native';
import styles from "./style";
import { COLORS, icons,string,images } from "../../constants";
import UseOrientation from "../../config/useOrientation";
import { HeaderComponent } from "../../common";
const NotificationSettingScreen=(props:any)=>{
   const o=UseOrientation()
    const RenderItem=(data:any)=>{
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        return(
        <View style={styles(o).upperRenderContainer}>
            <View style={styles(o).renderContainer}>
                <View style={styles(o).innerRenderContainer}>
                <Image style={styles(o).settingIcon} source={data.data.item.icon}/>
                <View>
                    <Text style={styles(o).settingNameText}>{data.data.item.name}</Text>
                    <Text>{data.data.item.text}</Text>
                    </View>    
                    </View>
                    <Switch
        trackColor={{ false: COLORS.white, true: COLORS.white }}
        thumbColor={isEnabled ? COLORS.primary :COLORS.gray }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        
        value={isEnabled}
      />

            </View>
        </View>
        
        )
    } 
   return(    
        <View style={styles(o).container}>
            <HeaderComponent 
            firstImage={icons.left_arrow}
            secondImage={images.transparent}
            navigation={props.navigation}
            heading={string.screens.notification}
            secondImageNavigate={""}
            firstImageNavigate="back" />
        
        <FlatList
         style={styles(o).flatList}   
data={string.notification_setting}
        extraData={string.notification_setting}
        keyExtractor={(item,index)=>'Key'+index}
        renderItem={(item)=><RenderItem data={item}/>}
        />
    </View>
    
    )
}

export default NotificationSettingScreen;