import * as React from 'react';
import { Alert, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ProfileScreen({ navigation }:any) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        console.log("Enter");  
      // The screen is focused
      // Call any action
    });
       

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return ()=>{console.log("Out")
    unsubscribe};
  }, []);

  return <View />;
}

function HomeScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

export default function Focus() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

