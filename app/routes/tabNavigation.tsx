import React from "react";
import {
    View,
    Text,
    Image
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeModel, 
    ContactModel,
     ProfileModel,
     LoginModel,
     RegisterModel,
      WalkthroughModel, 
      CategoryModel
    } from '../viewModels'

import {
    constants,
    theme,
    COLORS,
    darkTheme,
    lightTheme,
    selectedTheme,
    images,
    icons,
    dummyData,
}from '../constants'
import styles from "./tabBarstyle";


const Tab = createBottomTabNavigator();
const Tabnav =({navigation}:any)=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false,
        tabBarHideOnKeyboard: true, 
        tabBarShowLabel: false, tabBarStyle:styles.tabBarStyle,
    
    }}
    
        >
            <Tab.Screen name = 'Home' component={HomeModel} 
            options={{
                tabBarIcon:({focused})=>{
                       return(
                               <View style={[{ backgroundColor: (focused) ? COLORS.primary : selectedTheme.backgroundColor2}, 
                               styles.tabBarContainer]}>
                                  <Image source={constants.bottom_tabs[0].icon} style={styles.tabBarIcon}/>
                                    <Text style={styles.tabBarIconText} >{constants.bottom_tabs[0].label}</Text>        
                               </View>
                           ) 
                }
            }}              
            />
            <Tab.Screen name = 'Search' component={HomeModel}
            options={{
                tabBarIcon:({focused})=>{
                       return(
                               <View style={[{ backgroundColor: (focused) ? COLORS.primary : selectedTheme.backgroundColor2}, styles.tabBarContainer]}>
                                  <Image source={constants.bottom_tabs[1].icon} style={styles.tabBarIcon}/>
                                    <Text style={styles.tabBarIconText} >{constants.bottom_tabs[1].label}</Text>        
                               </View>
                           ) 
                }
            }}              
            />
            <Tab.Screen name = 'Profile' component={ProfileModel}
            options={{
                tabBarIcon:({focused})=>{
                       return(
                               <View style={[{ backgroundColor: (focused) ? COLORS.primary : selectedTheme.backgroundColor2}, styles.tabBarContainer]}>
                                  <Image source={constants.bottom_tabs[2].icon} style={styles.tabBarIcon}/>
                                    <Text style={styles.tabBarIconText} >{constants.bottom_tabs[2].label}</Text>        
                               </View>
                           ) 
                }
            }}              
            
            />
        </Tab.Navigator>
    )

}

export default Tabnav