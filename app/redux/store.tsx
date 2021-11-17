import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Text, View ,TouchableOpacity} from 'react-native';

interface RootStackParamList{
    state:object;
    counter:number
}
const Counterdemo = () =>{

    const dispatch = useDispatch();
    const counter= useSelector((state:RootStackParamList) => state.counter)
    
    console.log(counter)
    return(
        <View style={{flex:1 ,justifyContent:"center",alignItems:'center',}}>
        <View style={{  width: 200, justifyContent:"center",alignItems:'center' ,}}>

        <Text style={{fontSize:22}} >{counter}</Text>

            <TouchableOpacity onPress={() => dispatch({type:'INCREASE_COUNTER',payload:1})}>
                <Text >Increase</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => dispatch({type:'DECREASE_COUNTER'})}>
                <Text>Decrease</Text>
            </TouchableOpacity>
        </View>
    </View>
        
           )
  
  }
  
  export default Counterdemo;