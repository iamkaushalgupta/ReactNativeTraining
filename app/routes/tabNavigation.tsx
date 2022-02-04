import React,{useState} from "react";
import {
    View,
    Text,
    Image
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeModel, 
     ProfileModel,
      SearchModel
    } from '../viewModels'

import {
    constants,
    COLORS,
    selectedTheme,

}from '../constants'
import styles from "./tabBarstyle";


const Tab = createBottomTabNavigator();
const Tabnav =({navigation}:any)=>{
    const [render,setRender]=useState(false)
React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);
    return(
        <Tab.Navigator screenOptions={{headerShown:false,
        tabBarHideOnKeyboard: true, 
        tabBarShowLabel: false, tabBarStyle:styles(selectedTheme).tabBarStyle,
    
    }}
    initialRouteName="Home"
        >
            <Tab.Screen name = 'Home' component={HomeModel} 
            options={{
                tabBarIcon:({focused})=>{
                       return(
                               <View style={[{ backgroundColor: (focused) ? COLORS.primary : selectedTheme.backgroundColor2}, 
                               styles(selectedTheme).tabBarContainer]}>
                                  <Image source={constants.bottom_tabs[0].icon} style={styles(selectedTheme).tabBarIcon}/>
                                    <Text style={styles(selectedTheme).tabBarIconText} >{constants.bottom_tabs[0].label}</Text>        
                               </View>
                           ) 
                }
            }}              
            />
            <Tab.Screen name = 'Search' component={SearchModel}
            options={{
                tabBarIcon:({focused})=>{
                       return(
                               <View style={[{ backgroundColor: (focused) ? COLORS.primary : selectedTheme.backgroundColor2}, styles(selectedTheme).tabBarContainer]}>
                                  <Image source={constants.bottom_tabs[1].icon} style={styles(selectedTheme).tabBarIcon}/>
                                    <Text style={styles(selectedTheme).tabBarIconText} >{constants.bottom_tabs[1].label}</Text>        
                               </View>
                           ) 
                }
            }}              
            />
            <Tab.Screen name = 'Profile' component={ProfileModel}
            options={{
                tabBarIcon:({focused})=>{
                       return(
                               <View style={[{ backgroundColor: (focused) ? COLORS.primary : selectedTheme.backgroundColor2}, styles(selectedTheme).tabBarContainer]}>
                                  <Image source={constants.bottom_tabs[2].icon} style={styles(selectedTheme).tabBarIcon}/>
                                    <Text style={styles(selectedTheme).tabBarIconText} >{constants.bottom_tabs[2].label}</Text>        
                               </View>
                           ) 
                }
            }}              
            
            />
        </Tab.Navigator>
    )

}

export default Tabnav