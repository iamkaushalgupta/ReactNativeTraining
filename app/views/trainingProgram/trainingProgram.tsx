import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  Modal, TouchableWithoutFeedback,

} from 'react-native';
import { UseOrientation, icon, string, } from '../../config';
import styles from './style';
import { ProgressBar, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownIcon from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'
import SelectDropdown from 'react-native-select-dropdown'
import RenderItem from './renderItem';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import NestedMenuItem from "material-ui-nested-menu-item";

const TrainingProgram = (props: any) => {
  const o = UseOrientation();
  const [modalVisible, setModalVisible] = useState(false);
  const [filterBookmark, setFilterBookmark] = useState(false)
  const [filtertitle, setFilterTitle] = useState(false)
  const [firstfilterValue, setFirstfilterValue] = useState(-1)
  const [secondfilterValue, setSecondfilterValue] = useState('')
  const [visible, setVisible] = useState(false);
  const [submodule,setsubmodule]=useState(false)
  const [indexOfSubModule,setindexOfSubmodule]=useState(0)
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const data = [
    {
      moduleNumber: 'MODULE 1',
      text: 'An Introduction to the Dietary. An Introduction to the Dietary',
      timeleft: '3h 30min',
      subModule: ['module 1', 'module 2', 'module 3'],
      bookmarks: true,
    },
    {
      moduleNumber: 'MODULE 2',
      text: 'An Introduction to the Dietary. An Introduction to the Dietary',
      timeleft: '3h 30min',
      subModule: ['module 1', 'module 2'],
      bookmarks: false,
    },
    {
      moduleNumber: 'MODULE 3',
      text: 'An Introduction to the Dietary...',
      timeleft: '3h 30min',
      subModule: [],
      bookmarks: true,
    },
    {
      moduleNumber: 'MODULE 4',
      text: 'An Introduction to the Dietary...',
      timeleft: '3h 30min',
      subModule: ['module 1', 'module 2', 'module 3'],
      bookmarks: false,
    },
    {
      moduleNumber: 'MODULE 5',
      text: 'An Introduction to the Dietary...',
      timeleft: '3h 30min',
      subModule: ['module 1', 'module 2', 'module 3'],
      bookmarks: true,
    },
    {
      moduleNumber: 'MODULE 6',
      text: 'An Introduction to the Dietary...',
      timeleft: '3h 30min',
      subModule: ['module 1', 'module 2', 'module 3'],
      bookmarks: false,
    },
  ];

  const menuData = [
    { "Module 1": [1, 2, 3] }, 
    { "Module 2": [] },
     { "Module 3": [1,3] }
    ]

  const [Data, setData] = useState(data)



  useEffect(() => {
    const output = []

    if (firstfilterValue == -1 || secondfilterValue == "") {
      setData(data)
    }


    if (firstfilterValue == 0 && secondfilterValue == '') {

      output.length = 0
      for (var i = 0; i < data.length; i++) {
        if (data[i].bookmarks)
          output.push(data[i])
      }
      setData(output)
    }

    if (firstfilterValue == 1 && secondfilterValue == '') {
      output.length = 0
      for (var i = 0; i < data.length; i++) {
        if (!data[i].bookmarks)
          output.push(data[i])
      }
      setData(output)
    }


    if (secondfilterValue != '') {
      if (firstfilterValue == -1) {
        output.length = 0
        for (var i = 0; i < data.length; i++) {
          if (data[i].text == secondfilterValue)
            output.push(data[i])
        }
        setData(output)
      }

      if (firstfilterValue == 0) {

        output.length = 0
        for (var i = 0; i < data.length; i++) {
          if (data[i].bookmarks && data[i].text == secondfilterValue)

            output.push(data[i])
        }
        setData(output)
      }

      if (firstfilterValue == 1) {
        output.length = 0
        for (var i = 0; i < data.length; i++) {
          if (!data[i].bookmarks && data[i].text == secondfilterValue)
            output.push(data[i])
        }
        setData(output)
      }
    }

  }, [firstfilterValue, filterBookmark, secondfilterValue, filtertitle]);

   const SubModuleOpen=()=>{
    

    return(
    <Menu 
    visible={submodule}
    onRequestClose={()=>{setsubmodule(false)}}
   anchor={<View></View>}
   >

  {
        Object.values(menuData[indexOfSubModule])[0].map((item: any, index: number)=>{
         
          return(
            <MenuItem 
            key={index.toString()}
            onPress={()=>{                
            }}>{item}</MenuItem>      
            
            )

        }
        
        )
        
      }
</Menu>

     );
   }


  const titleData = () => {

    const output = []
    for (var i = 0; i < data.length; i++) {
      output.push(data[i].text)
    }

    return output
  }

  return (


    <View style={styles(o).container}>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles(o).modalContainer}>

          <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)} >

            <View style={styles(o).modalUpper}></View>
          </TouchableWithoutFeedback>

          <View style={styles(o).modalLower}>

            <View style={styles(o).modalLowerInnerContainer}>
              <Text style={styles(o).modalLabelText}>{string.bookmarks} {string.or} {string.unbookmarks}</Text>
              <SelectDropdown
                buttonStyle={{ width: "90%", justifyContent: 'flex-start' }}
                buttonTextStyle={{ color: 'grey', }}
                defaultButtonText={(firstfilterValue == -1) ? "Select an option." : (firstfilterValue == 0) ? string.bookmarks : string.unbookmarks}

                rowTextStyle={{ textAlign: 'left' }}
                data={[string.bookmarks, string.unbookmarks]
                }
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}

                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  setFilterBookmark(true)
                  setFirstfilterValue(index)
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {

                  return item
                }}
              />
            </View>


            <View style={styles(o).modalLowerInnerContainer}>
              <Text style={styles(o).modalLabelText}>Select title</Text>
              <SelectDropdown
                buttonStyle={{ width: "90%", }}
                rowTextStyle={{ textAlign: 'left' }}
                buttonTextStyle={{ color: 'grey', }}
                defaultButtonText={secondfilterValue}
                dropdownIconPosition={'right'}
                data={titleData()}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  setFilterTitle(true)
                  setSecondfilterValue(selectedItem)

                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item
                }}
              />

            </View>
            <TouchableOpacity style={styles(o).modalfilterButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles(o).modalfilterButtonText}>{string.filter}</Text>
            </TouchableOpacity>

          </View>
        </View>

      </Modal>
      <View style={styles(o).header}>
        <Image source={icon.course_main} style={styles(o).headerImage} />
        <View style={styles(o).insideHeader}>
          <View style={styles(o).headerBar}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <View style={styles(o).iconBorder}>
                <Image style={styles(o).icon} source={icon.left_arrow} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles(o).iconBorder}>
                <Image style={styles(o).icon} source={icon.help} />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles(o).mainHeading}>
              Health Coach Training Program
            </Text>

            <Text style={styles(o).labelText}>50% of modules completed</Text>
          </View>
        </View>
        <ProgressBar
          progress={0.55}
          color={Colors.green800}
          style={styles(o).progressBar}
        />
      </View>


      <View style={styles(o).footer}>


        <View style={styles(o).firstinnerContainer}>
          <Text style={styles(o).moduleText}>{string.modules}</Text>

<View>    
          <Menu
            visible={visible}
            anchor={<TouchableOpacity onPress={showMenu}
            
            >
              <Icon name="more-vert" size={25} color={'black'} />
            </TouchableOpacity>
            }
            onRequestClose={hideMenu}
          >
            {
              menuData.map((item: object, index: number)=>{
                  
             let visible=(Object.values(item)[0].length!=0)?true:false
              return(
                  <MenuItem 
                  key={index.toString()}
                  onPress={()=>{ setsubmodule(true),setindexOfSubmodule(index),hideMenu()               
                  }}>{Object.keys(item)[0]}
     {  
            visible&&
            <Image source={icon.right_arrow} style={{height:15,width: 12,tintColor:'grey',}}/>
            }                  
                    
              
                  
                  </MenuItem>      
                  
                  )

              }
              
              )

              
              
            }
            

          </Menu>

          <View style={styles(o).subModuleContainer} >
          <Menu
          
          visible={submodule}
          onRequestClose={()=>{setsubmodule(false)}}
         anchor={<View></View>}
         >

        {
              Object.values(menuData[indexOfSubModule])[0].map((item: any, index: number)=>{
               
                return(
                  <MenuItem 
                  key={index.toString()}
                  onPress={()=>{                
                  }}>{item}</MenuItem>      
                  
                  )

              }
              
              )
              
            }
      </Menu>
      </View>

      </View>    
         
        </View>
    
         
        
       
        <View style={styles(o).secondinnerContainer}>
        
          <View style={styles(o).insideSecondContainer}>
            <View>
              <Text style={styles(o).fontText}>{string.lastViewedModules}</Text>
              <Text style={styles(o).subHeadText}>{string.detoxYourLife}</Text>
            </View>
            <TouchableOpacity style={styles(o).button}>
              <Text style={styles(o).buttonText}>{string.resume}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles(o).fontText}>{string.moduleText}</Text>
        </View>

        <View style={styles(o).thirdinnerContainer}>
          <View style={styles(o).insideSecondContainer}>
            <View style={styles(o).upperFilterContainer}>
              <Text style={styles(o).filterText}>{string.filter}:</Text>
              {

                filterBookmark &&
                <View style={styles(o).filterContainer}>
                  <Text style={styles(o).filtersText}>{(firstfilterValue == 0) ? string.bookmarks: string.unbookmarks}</Text>
                  <TouchableOpacity onPress={() => { setFilterBookmark(false), setData(data), setFirstfilterValue(-1) }}><Image source={icon.close} style={styles(o).crossIcon} /></TouchableOpacity>
                </View>
              }

              {
                filtertitle &&
                <View style={styles(o).filterContainer}>
                  <Text style={styles(o).filtersText}>{string.title}</Text>
                  <TouchableOpacity onPress={() => { setFilterTitle(false), setData(data), setSecondfilterValue('') }}><Image source={icon.close} style={styles(o).crossIcon} /></TouchableOpacity>
                </View>
              }
            </View>
            <TouchableOpacity style={styles(o).filterButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles(o).filterButtonText}>{string.filter}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          extraData={Data}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
          renderItem={item => <RenderItem data={item} bookmark={item.item.bookmarks} />}
        />
      </View>
    </View>
  );
};

export default TrainingProgram;
