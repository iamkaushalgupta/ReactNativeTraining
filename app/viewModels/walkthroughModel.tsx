import WalkthroughScreen from "../views/walkthroughScreen/walkthroughScreen";
import React from 'react'

interface InputProps{
    navigation :any
}

const WalkthroughModel =(props:InputProps)=>{
    const {navigation} =props;
    return(
        <WalkthroughScreen navigation={navigation}/>
    )
}

export default WalkthroughModel;