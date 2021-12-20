import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactModel, CourseModal,ProgressModel,SettingModal } from '../viewModels'
import { Image } from "react-native";
import Logo from "../common/logo/logo";
import { Help } from "../common";
import styles from "./tabbarstyle";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',tabBarLabelPosition:'below-icon',tabBarLabelStyle:{paddingVertical:2}, headerTitle: () => (<Logo />), headerRight: () => (<Help />), headerStyle: { backgroundColor: '#000020', },tabBarStyle:{paddingVertical:2}}}>
      
      <Tab.Screen
        name="Home"
        component={CourseModal}
        options={{
         
          
          tabBarIcon: ({focused}) => {
            return (
              <Image style={styles(focused).headerImage}
                source={require('../assets/home.png')} />
            )
          }
        }}

      />

      <Tab.Screen
        name="Progress"
        component={ProgressModel}
        options={{
          
          tabBarIcon: ({focused}) => {
            return (
              <Image style={styles(focused).headerImage} source={require('../assets/progress.png') }
                />
            )
          }
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={ContactModel}
        options={{
         
          tabBarIcon: ({focused}) => {
            return (
              <Image source={require('../assets/inbox.png')} style={styles(focused).headerImage} />
            )
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingModal}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={require('../assets/settings.png')} style={styles(focused).headerImage} />
            )
          }
        }}
      />
    </Tab.Navigator>

  );
}

export default MainTab;