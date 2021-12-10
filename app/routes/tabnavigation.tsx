import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeModel, ContactModel, ProfileModel, TestModel, CourseModal,ProgressModel,SettingModal } from '../viewModels'
import { Image } from "react-native";
import Logo from "../common/logo/logo";
import { Help } from "../common";
// import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={CourseModal}
        options={{
          headerTitle: () => (<Logo />),
          headerStyle: { backgroundColor: '#000020' },
          tabBarLabelPosition:'below-icon',
          headerRight: () => (<Help />),
          tabBarIcon: () => {
            return (
              <Image style={{ width: 25, height: 25, tintColor: 'red' }}
                source={require('../assets/home.png')} />
            )
          }
        }}
      />

      <Tab.Screen
        name="Progress"
        component={ProgressModel}
        options={{
          headerTitle: () => (<Logo />),
          headerStyle: { backgroundColor: '#000020' },
          tabBarLabelPosition:'below-icon',
          headerRight: () => (<Help />),
          tabBarIcon: () => {
            return (
              <Image source={require('../assets/progress.png')}
                style={{ width: 25, height: 25 }} />
            )
          }
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={ContactModel}
        options={{
          headerTitle: () => (<Logo />),
          headerStyle: { backgroundColor: '#000020' },
          tabBarLabelPosition:'below-icon',
          headerRight: () => (<Help />),
          tabBarIcon: () => {
            return (
              <Image source={require('../assets/inbox.png')} style={{ width: 25, height: 25 }} />
            )
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingModal}
        options={{
          headerTitle: () => (<Logo />),
          headerStyle: { backgroundColor: '#000020' },
          tabBarLabelPosition:'below-icon',
          headerRight: () => (<Help />),
          tabBarIcon: () => {
            return (
              <Image source={require('../assets/settings.png')} style={{ width: 25, height: 25 }} />
            )
          }
        }}
      />
    </Tab.Navigator>

  );
}

export default MainTab;