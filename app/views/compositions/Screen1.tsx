import React from 'react';
import {Text, View} from 'react-native';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Screen1 = ({children}: any) => {
  return (
    <View>
      <Text>Screen1</Text>
      {children}
    </View>
  );
};

export default Screen1;
