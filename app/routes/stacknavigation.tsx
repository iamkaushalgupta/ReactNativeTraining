import React from "react";
import {
    OnboardingModel, SignInModel, SignUpModel,
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
    MyAccountEditModel,
    MyAccountDetailModel,
    CheckoutModel,
    DeliveryStatusModel,
} from '../viewModels'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from "./drawernavigation";

type RootStackParamList = {
    Onboarding: undefined;
    Signin: undefined;
    Signup: undefined;
    PasswordRecovery: undefined;
    OTPAuthentication: undefined;
    Setting: undefined;
    Changepassword: undefined;
    NotificationSetting: undefined;
    Detail: undefined;
    Paymentsuccess: undefined;
    RiderReview: undefined;
    MyOrder: undefined;
    MyCoupon: undefined;
    MyCard: undefined;
    AddNewCard: undefined;
    MyAccountEdit: undefined;
    MyAccountDetail: undefined;
    Checkout: undefined;
    DeliveryStatus: undefined;
    Drawer: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="RiderReview" component={RiderReviewModel}></Stack.Screen>
                <Stack.Screen name="Onboarding" component={OnboardingModel}></Stack.Screen>
                <Stack.Screen name="Signin" component={SignInModel}></Stack.Screen>
                <Stack.Screen name="Signup" component={SignUpModel}></Stack.Screen>
                <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryModel}></Stack.Screen>
                <Stack.Screen name="OTPAuthentication" component={OTPAuthenticationModel}></Stack.Screen>
                <Stack.Screen name="Setting" component={SettingModel}></Stack.Screen>
                <Stack.Screen name="Changepassword" component={ChangePasswordModel}></Stack.Screen>
                <Stack.Screen name="NotificationSetting" component={NotificationSettingModel}></Stack.Screen>
                <Stack.Screen name="Detail" component={DetailModel}></Stack.Screen>
                <Stack.Screen name="Checkout" component={CheckoutModel}></Stack.Screen>
                <Stack.Screen name="Paymentsuccess" component={PaymentSuccessModel}></Stack.Screen>
                <Stack.Screen name="MyOrder" component={MyOrderModel}></Stack.Screen>
                <Stack.Screen name="MyCoupon" component={MyCouponModel}></Stack.Screen>
                <Stack.Screen name="MyCard" component={MyCardModel}></Stack.Screen>
                <Stack.Screen name="AddNewCard" component={AddNewCardModel}></Stack.Screen>
                <Stack.Screen name="MyAccountEdit" component={MyAccountEditModel}></Stack.Screen>
                <Stack.Screen name="MyAccountDetail" component={MyAccountDetailModel}></Stack.Screen>
                <Stack.Screen name="DeliveryStatus" component={DeliveryStatusModel}></Stack.Screen>
                <Stack.Screen name="Drawer" component={DrawerNavigation}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default StackNav;