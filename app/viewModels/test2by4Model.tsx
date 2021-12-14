import React from "react";
import Test2by4 from "../views/test2by4/test2by4";

const Test2by4Model=({navigation}:any)=>{

    const data=[
        {testNumber:'Test 1',text:'Opening Soon'},
        {testNumber:'Test 2',text:'Opening Soon'},
        {testNumber:'Test 3',text:'Opening Soon'},
        {testNumber:'Test 4',text:'Opening Soon'},
        {testNumber:'Test 5',text:'Opening Soon'},

    ]

    return(<Test2by4 data={data} navigation={navigation}/>)

}
export default Test2by4Model;