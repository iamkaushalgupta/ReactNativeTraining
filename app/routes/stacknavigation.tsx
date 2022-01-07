import React from "react";
import {HomeModel, ContactModel, ProfileModel,TestModel,OnboardingModel,SignInModel, SignUpModel, 
    PasswordRecoveryModel,
    OTPAuthenticationModel,
    SettingModel,
    ChangePasswordModel,
    NotificationSettingModel,
    DetailModel,
    MyCartModel,
    PaymentSuccessModel,
    RiderReviewModel,
    MyOrderModel,
    MyCouponModel,
    MyCardModel,
    AddNewCardModel,
    MyAccountEditModel
} from '../viewModels'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tabnavigation';

type RootStackParamList ={
    Home: undefined;
    Profile:undefined;
    Contact:undefined;
    Demo: undefined;
    Onboarding:undefined;
    Signin:undefined;
    Signup:undefined;
    PasswordRecovery:undefined;
    OTPAuthentication:undefined;
    Setting:undefined;
    Changepassword:undefined;
    NotificationSetting:undefined;
    Detail:undefined;
    Cart:undefined;
    Paymentsuccess:undefined;
    Tab:undefined;
    RiderReview:undefined;
    MyOrder:undefined;
    MyCoupon:undefined;
    MyCard:undefined;
    AddNewCard:undefined;
    MyAccountEdit:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const MainStack =()=>
{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="MyAccountEdit" screenOptions={{headerShown:false}}>
            
        <Stack.Screen name ="RiderReview" component={RiderReviewModel}></Stack.Screen>
            <Stack.Screen name ="Demo" component={TestModel}></Stack.Screen>
            <Stack.Screen name= "Profile" component={ProfileModel}></Stack.Screen>
            <Stack.Screen name = "Contact" component ={ContactModel}></Stack.Screen>
            <Stack.Screen name = "Onboarding" component ={OnboardingModel}></Stack.Screen>
            <Stack.Screen name = "Signin" component ={SignInModel}></Stack.Screen>
            <Stack.Screen name = "Signup" component ={SignUpModel}></Stack.Screen>
            <Stack.Screen name = "PasswordRecovery" component ={PasswordRecoveryModel}></Stack.Screen>
            <Stack.Screen name = "OTPAuthentication" component ={OTPAuthenticationModel}></Stack.Screen>
            <Stack.Screen name = "Setting" component ={SettingModel}></Stack.Screen>
            <Stack.Screen name = "Changepassword" component ={ChangePasswordModel}></Stack.Screen>
            <Stack.Screen name = "NotificationSetting" component ={NotificationSettingModel}></Stack.Screen>
            <Stack.Screen name = "Detail" component ={DetailModel}></Stack.Screen>
            
            <Stack.Screen name = "Paymentsuccess" component ={PaymentSuccessModel}></Stack.Screen>
            <Stack.Screen name = "Tab" component ={MyTabs}></Stack.Screen>  
            <Stack.Screen name = "MyOrder" component ={MyOrderModel}></Stack.Screen>
            <Stack.Screen name = "MyCoupon" component ={MyCouponModel}></Stack.Screen>
            <Stack.Screen name = "MyCard" component ={MyCardModel}></Stack.Screen>
            <Stack.Screen name = "AddNewCard" component ={AddNewCardModel}></Stack.Screen>
            <Stack.Screen name = "MyAccountEdit" component ={MyAccountEditModel}></Stack.Screen>
            
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainStack;