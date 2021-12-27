import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  Modal, TouchableWithoutFeedback,

} from 'react-native';
import { UseOrientation, icon, string } from '../../config';
import styles from './style';
import { ProgressBar, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownIcon from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'
import SelectDropdown from 'react-native-select-dropdown'

const RenderItem = (InputProps: any) => {
    const {bookmark}=InputProps
    const [updownArrow, setUpDownArrow] = useState(false)
    const o=UseOrientation()
    return (
      <View>

        <View style={styles(o).renderContainer}>
          <Image source={icon.foodImage} style={styles(o).mainImage} />

          <View style={styles(o).renderLeftContainer}>
            <View style={styles(o).renderLeftInsideContainer}>
              <Text>{InputProps.data.item.moduleNumber} </Text>
              {!updownArrow && <TouchableOpacity onPress={() => setUpDownArrow(!updownArrow)}>
                <DropDownIcon name="chevron-down" size={30} />
              </TouchableOpacity>}
              {updownArrow && <TouchableOpacity onPress={() => setUpDownArrow(!updownArrow)}>
                <DropDownIcon name="chevron-up" size={30} />
              </TouchableOpacity>
              }
            </View>
            <Text style={styles(o).mainRenderHeading} numberOfLines={1}>
              {InputProps.data.item.text}
            </Text>

            <View style={styles(o).renderInnerContainer}>
              <View style={styles(o).renderWrapperContainer}>
              <Image source={icon.clock} style={styles(o).clockImage} />
              <Text style={styles(o).renderTextTime}>
                {InputProps.data.item.timeleft}
              </Text>
              </View>

                {!bookmark&&<TouchableOpacity>
                <Image source={icon.boookmark} style={styles(o).bookmarkImage}/>
                </TouchableOpacity>}
                {bookmark&&<TouchableOpacity>
                <Image source={icon.bookmark_saved} style={styles(o).bookmarkImage}/>
                </TouchableOpacity>
              }
            </View>
          </View>
        </View>
        {updownArrow &&

          <View  >
            {InputProps.data.item.subModule.map((item: any, index: number) => {
              return (
                <View key={index.toString()} style={styles(o).renderModuleContainer}>
                  <ProgressCircle

                    percent={30}
                    radius={10}
                    borderWidth={3}
                    color="#000020"
                    shadowColor="skyblue"
                    bgColor="white"
                  >


                  </ProgressCircle>
                  <Text style={styles(o).subModuleText}>{item}</Text>

                </View>
              );
            })}
          </View>}
      </View>
    );
  };

  export default RenderItem;