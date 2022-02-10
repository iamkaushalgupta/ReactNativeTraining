import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {View,Text, Touchable, TouchableOpacity} from 'react-native';

const NavigationTask=()=>{
    const Tab = createBottomTabNavigator();
    const Stack =createNativeStackNavigator();
    const HomeScreen=({navigation}:any)=>{
        return(
            <View style={{flex:1}}>
                <Text>HomeScreen</Text>
                <MyTab navigation={navigation}></MyTab>
            </View>
        )
    }
    const ProfileScreen=({navigation}:any)=>{
        return(
            <View style={{flex:1}}>
                   <TouchableOpacity onPress={()=>navigation.navigate("Button1")}>
                       <Text>Button1</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>navigation.navigate("Button2")}>
                       <Text>Button2</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>navigation.navigate("Button3")}>
                       <Text>Button3</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>navigation.navigate("Button4")}>
                       <Text>Button4</Text>
                   </TouchableOpacity>
                   <MyTab navigation={navigation}></MyTab>
            </View>
        )
    }

    const Button1Screen=({navigation}:any)=>{
        return(
            <View style={{flex:1}}>
                <Text>Button1Screen</Text>
                <MyTab navigation={navigation}></MyTab>
            </View>
        )
    }
    const Button2Screen=({navigation}:any)=>{
        return(
            <View  style={{flex:1}}>
                <Text>Button2Screen</Text>
                <MyTab navigation={navigation}></MyTab>
            </View>
        )
    }
    const Button3Screen=({navigation}:any)=>{
        return(
            <View  style={{flex:1}}>
                <Text>Button3Screen</Text>
                <MyTab navigation={navigation}></MyTab>
            </View>
        )
    }
    const Button4Screen=({navigation}:any)=>{
        return(
            <View  style={{flex:1}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Button5")}>
                <Text>Button4Screen</Text>
                </TouchableOpacity>                

                <MyTab navigation={navigation}></MyTab>
            </View>
        )
    }
    const Button5Screen=({navigation}:any)=>{
        return(
            <View  style={{flex:1}}>
                {/* <TouchableOpacity onPress={()=>navigation.navigate()}> */}
                <Text>Button5Screen</Text>
                {/* </TouchableOpacity>                 */}

                <MyTab navigation={navigation}></MyTab>
            </View>
        )
    }

    const MyTab=({navigation}:any)=>{
        return(
            <View style={{flex:1,justifyContent:'flex-end'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'brown',flex:1,alignItems:'center',height:40,justifyContent:'center'}} onPress={()=>navigation.navigate('Home')} >
                            <Text>Home</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{backgroundColor:'brown',flex:1,alignItems:'center',height:40,justifyContent:'center'}} onPress={()=>navigation.navigate('Profile')}>
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }


    return(
        <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName="Tab">
                <Stack.Screen name="Button1" component={Button1Screen}/>
                <Stack.Screen name="Button2" component={Button2Screen}/>
                <Stack.Screen name="Button3" component={Button3Screen}/>
                <Stack.Screen name="Button4" component={Button4Screen}/>
                <Stack.Screen name="Button5" component={Button5Screen}/>

                <Stack.Screen name="Tab" component={MyTab}/>
                 <Stack.Screen name="Home" component={HomeScreen}/>
                 <Stack.Screen name="Profile" component={ProfileScreen}/>  

            </Stack.Navigator>
        
      </NavigationContainer>
    )
}
export default NavigationTask;
