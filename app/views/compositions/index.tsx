import React from 'react';
import {View} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Composition = ({children}:any) => {
    console.log(children)
  return (
      <View>
          {
              children
          }
      </View>
  )
};

export default Composition;
