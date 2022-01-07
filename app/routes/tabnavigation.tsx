import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Text,View } from 'react-native';
import { COLORS, icons, string } from '../constants';
import styles from './tabnavigationstyle'
import {HomeModel,TestModel,OnboardingModel,SignInModel, SignUpModel, 
    PasswordRecoveryModel,
    OTPAuthenticationModel,
    SettingModel,
    ChangePasswordModel,
    NotificationSettingModel,
    DetailModel,
    MyCartModel,
    PaymentSuccessModel,
    NotificationTabModel,
    MyOrderModel
} from '../viewModels'

const Tab = createBottomTabNavigator();

const MyTabs=()=> {
  return (
     <Tab.Navigator screenOptions={{tabBarHideOnKeyboard:true,tabBarShowLabel:false,tabBarStyle:styles.tabBarstyle,headerShown:false}}  >
        <Tab.Screen name="Home" component={HomeModel} options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View style={[{backgroundColor:(focused)?COLORS.primary:COLORS.white,width:(focused)?"160%":'40%'},styles.tabBarContainer]}>
                   <Image style={[styles.tabBarIcon,{tintColor:(focused)?COLORS.white:COLORS.darkGray}]}
                    source={icons.home} />
                    {focused&&<Text style={[{color:(focused)?COLORS.white:COLORS.gray},styles.tabBarIconText]}>{string.keywords.home}</Text>}
                    </View>
                )
              }

        }} />
        
        
        <Tab.Screen name="Search" component={HomeModel} options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View style={[{backgroundColor:(focused)?COLORS.primary:COLORS.white,width:(focused)?"160%":'40%'},styles.tabBarContainer]}>
                    <Image style={[styles.tabBarIcon,{tintColor:(focused)?COLORS.white:COLORS.darkGray}]}
                     source={icons.search} />
                     {focused&&<Text style={[{color:(focused)?COLORS.white:COLORS.gray},styles.tabBarIconText]}>{string.keywords.search}</Text>}
                     </View>
                )
              }

        }} />
        <Tab.Screen name="Cart" component={MyCartModel} options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View style={[{backgroundColor:(focused)?COLORS.primary:COLORS.white,width:(focused)?"160%":'40%'},styles.tabBarContainer]}>
                   <Image style={[styles.tabBarIcon,{tintColor:(focused)?COLORS.white:COLORS.darkGray}]}
                    source={icons.cart} />
                    {focused&&<Text style={[{color:(focused)?COLORS.white:COLORS.gray},styles.tabBarIconText]}>{string.keywords.cart}</Text>}
                    </View>
                )
              }

        }} />
        <Tab.Screen name="Favourite" component={MyOrderModel} options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View style={[{backgroundColor:(focused)?COLORS.primary:COLORS.white,width:(focused)?"160%":'40%'},styles.tabBarContainer]}>
                   <Image style={[styles.tabBarIcon,{tintColor:(focused)?COLORS.white:COLORS.darkGray}]}
                    source={icons.favourite} />
                    {focused&&<Text style={[{color:(focused)?COLORS.white:COLORS.gray},styles.tabBarIconText]}>{string.keywords.favourite}</Text>}
                    </View>
                )
              }

        }} />    
        <Tab.Screen name="Notification" component={NotificationTabModel} options={{
            tabBarIcon: ({focused}) => {
                return (
                    <View style={[{backgroundColor:(focused)?COLORS.primary:COLORS.white,width:(focused)?"160%":'40%'},styles.tabBarContainer]}>
                   <Image style={[styles.tabBarIcon,{tintColor:(focused)?COLORS.white:COLORS.darkGray}]}
                    source={icons.notification} />
                    {focused&&<Text style={[{color:(focused)?COLORS.white:COLORS.gray},styles.tabBarIconText]}>{string.keywords.notification}</Text>}
                    </View>
                )
              }

        }} />
      </Tab.Navigator>
  );
}

export default MyTabs;