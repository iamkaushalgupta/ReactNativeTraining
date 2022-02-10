import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ProfileScreen() {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();
    console.log(isFocused)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>
      <Text>Hello</Text>
    </View>
  );
}

function HomeScreen() {
  return <View />;
}


const Tab = createBottomTabNavigator();
export default function UseIsFocused() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
