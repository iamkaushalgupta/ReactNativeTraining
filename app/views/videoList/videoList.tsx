import React, { useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";

const VideoList=()=>{
  const lists = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];
  const [checkRef,set] = useState([])
  const onViewRef = React.useRef((viewableItems: any)=> {
    console.log(viewableItems.viewableItems)
    set(viewableItems.viewableItems)
    viewableItems.viewableItems.map((item:any,index:any)=>{
        console.log("hello",item.index)
        // return item.index
    })
    // Use viewable items in state or as intended
})

const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return(
    <View>
        <FlatList
        data={lists}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item,index})=>{

          return(
            <View style={{justifyContent:'center',alignItems:'center',height:200,width:200,backgroundColor:
          //  "red"
            (((checkRef.map(({item,index})=>{return item })))[0]==index)?'red':'blue'
}}>
                  <Text style={{color:'white'}}>{item}</Text>
              </View>
          )
        }}
        />
      
    </View>
  )
}
export default VideoList