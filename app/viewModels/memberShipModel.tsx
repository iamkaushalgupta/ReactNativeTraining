import React, { useState } from "react";
import MemberShipScreen from "../views/membershipScreen/memberScreen";

interface InputProps{
    navigation:any,
    
}

const MemberShipModel=(props:InputProps)=>{
   const {navigation} =props
   const [currentPlan,setCurrentPlan] = useState(0)
    return(
        <MemberShipScreen  navigation={navigation} currentPlan={currentPlan} 
        setCurrentPlan={(item:number)=>setCurrentPlan(item)} />
        )
}
export default MemberShipModel