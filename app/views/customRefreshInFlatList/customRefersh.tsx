import React,{useRef, useState} from "react";
import { FlatList, RefreshControl, Text, View,

} from "react-native";

const CustomRefreshInFlatList = ()=>{
    const isFetching=useRef<null|any>(false)
    const [render,setrender]=useState(false)
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
      const fetchData = () => {
        isFetching.current=false
      }
      const onRefresh = () => {
        console.log('ss')
        isFetching.current=true
        setrender(!render)
        fetchData();
      };
      

    return(
        <View>
            
            <FlatList
            renderScrollComponent={()=>{return(<Text>jjj</Text>)}}       
            onScrollBeginDrag={()=>console.log('hello')}
            style={{marginTop:(isFetching.current==true)?100:0}}
        data={lists}
        refreshControl={<RefreshControl refreshing={isFetching.current} onRefresh={onRefresh} children={()=>{return(<Text>hello</Text>)}} />}
        //  onRefresh={onRefresh}
        refreshing={isFetching.current}
        renderItem={({item,index})=>{
            return(
                <View style={{justifyContent:'center',alignItems:'center',height:200,width:200,backgroundColor:'red',margin:10,}} >
                    <Text>{item}</Text>
                </View>
            )
        }}
        />
        </View>
 
    )
}
export default CustomRefreshInFlatList