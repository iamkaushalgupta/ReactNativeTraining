import React from 'react';
import Composition from '.';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const CModel = () => {
  let name = 'mintu';
  return (
    <Composition>
      <Screen1>
        <Screen2>
          <Screen3 name={name} />
        </Screen2>
      </Screen1>
    </Composition>
  );
};

export default CModel;
