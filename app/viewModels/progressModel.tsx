import ProgressScreen from "../views/progressScreen/progressScreen";
import React from "react";

const ProgressModel=({navigation}:any)=>{

    const data = [
        {
            text:"Test 2/4",
            url:"https://www.facebook.com/"
        },
        {
            text:"Caoching Circles 4/5",
            url:"https://www.facebook.com/"
        },
        {
            text:"Coaching Sessions 5/6",
            url:"https://www.facebook.com/"
        },

    ]

    return(<ProgressScreen data={data} navigation={navigation}/>)
}
export default ProgressModel;