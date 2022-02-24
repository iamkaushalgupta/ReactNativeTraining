import React from 'react';
import {Text, View} from 'react-native';
import Screen3 from './Screen3';

const Screen2 = ({children}: any) => {
    console.log("children screen2: ", children)
  return (
    <View>
      <Text>Screen2</Text>
      {children}
    </View>
  );
};

export default Screen2;
