import React, { useRef, useState } from "react";
import {View,Text, Modal, TouchableOpacity, TouchableWithoutFeedback, FlatList } from "react-native";

const AddressPick = ()=>{
    const [visible,setVisible]=useState(false)
var dt = new Date();
 let month = dt.getMonth()+1;
 let year = dt.getFullYear();
 let day=dt.getDate()
 let number_days=new Date(year, month,0 ).getDate()
 const fetchDates=(d:number,m:number, cd:number)=>{
        let a: string | any[]=[]
        for(let i=cd;i<=d;i++)
            a.push(i+'/'+m)
        return(a)
    }
    const date=[
        ' ',
        ' ',
        ' ',
        ' ',

        'Today',
        'Tommorow',
        ...fetchDates(number_days,month,day+2),
        ' ',
        ' ',
        ' ',
        ' ',

    ]

    const from =[
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "3:00",
        "3:30",
        "4:00",
        "4:30",
        "5:30",
        "6:00",
        "6:30",
    ]
    const to =[
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "3:00",
        "3:30",
        "4:00",
        "4:30",
        "5:30",
        "6:00",
        "6:30",
    ]

    const [checkRef,set] = useState([])
    
    const onViewRef = React.useRef((viewableItems: any)=> {
      
      set(viewableItems.viewableItems)
    //   console.log(checkRef.map((item)=>{return item}))
      viewableItems.viewableItems.map((item:any,index:any)=>{
          console.log("hello",item.index)
          return item.index
        //   padding.current=0;
      })
      // Use viewable items in state or as intended
  })
  
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  

    return(
        <View style={{flex:1}}>
            <Modal 
            animationType="slide"
            visible={visible}
            transparent={true}

            >
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <View style={{flex:0.6,}}>
                        <TouchableWithoutFeedback onPress={()=>setVisible(false)} style={{flex:1}} >
                        <View style={{flex:1}}></View>
                                                    </TouchableWithoutFeedback>
                    </View>

                    <View style={{flex:0.4,backgroundColor:'white',borderTopRightRadius:15,borderTopLeftRadius:15,}}>
                        <Text style={{textAlign:'center',fontWeight:'600',color:'black',fontSize:20}}>Address</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'lightgray',paddingVertical:5,
                    marginVertical:10
                    }}>
                        <View style={{flex: 1, }}>
                        <Text style={{textAlign:'center',color:'blue'}}>date</Text>
                        </View>
                            <View style={{flex: 1}}>
                            <Text style={{textAlign:'center',color:'blue'}}>from</Text>
                            </View>
                            <View style={{flex: 1,}}>
                            <Text style={{textAlign:'center',color:'blue'}}>till</Text>
                            </View>
                        </View>

                        
                        <View style={{flex:0.8}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flex:1,alignItems:'center'}}>
                        <FlatList
                                onViewableItemsChanged={onViewRef.current}
                                viewabilityConfig={viewConfigRef.current}
                        showsVerticalScrollIndicator={false}
                        data={date}
                        renderItem={({item,index})=>{
                            return(
                                <View style={{flex:1,}}>
                                    <Text style={{textAlign:'center',color:(((checkRef.map(({item,index})=>{return index })))[4]==index)?'black':'grey'}}>{item}</Text>
                                </View>
                            )
                        }}
                        />
                    </View>
                    <View style={{flex:1,alignItems:'center',}}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={from}
                        renderItem={({item,index})=>{
                            return(
                                <View style={{flex:1,}}>
                                    <Text style={{textAlign:'center',color:'black'}}>{item}</Text>
                                </View>
                            )
                        }}
                        />
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={to}
                        renderItem={({item,index})=>{
                            return(
                                <View style={{flex:1}}>
                                    <Text style={{textAlign:'center',color:'black'}}>{item}</Text>
                                </View>
                            )
                        }}
                        />
                            </View>
                         


                        </View>
                        </View>
                    
                        <TouchableOpacity style={{backgroundColor:'blue',flex:0.2,alignItems:'center',justifyContent:'center',marginHorizontal:10,borderRadius:10,marginBottom:10}}>
                        <Text  style={{color:'white',fontSize:16}}>{"checkRef"}</Text>
                    </TouchableOpacity>
                    </View>
                    
                    
                </View>
                
            </Modal>
            <TouchableOpacity onPress={()=>setVisible(true)}>
                    <Text>Click me</Text>
                </TouchableOpacity>
        </View>
    )
}
export default AddressPick;