import WalkthroughScreen from "../views/walkthroughScreen/walkthroughScreen";
import React, { useState } from 'react'
import { useRef } from "react";

interface InputProps{
    navigation :any
}

const WalkthroughModel =(props:InputProps)=>{
    const flatref = useRef<any | null>(null)
    const {navigation} =props;
    const scrollTo = (data: any) => {
        flatref.current.scrollToIndex({ animated: true, index: data });
    }
    const [render,setRender]=useState(false)
React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);

    return(
        <WalkthroughScreen navigation={navigation} flatref={flatref} scrollTo={(item:any)=>scrollTo(item)}/>
    )
}

export default WalkthroughModel;