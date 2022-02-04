import React from "react";
import styles from "./style";
import {View,Text,
    Image,
    TouchableOpacity,

} from 'react-native';
import {
    constants,
    selectedTheme,
    icons,
} from '../../constants'

interface InputProps{
    item: {
        price: string;
        month: string;
        label: string;
        bestOffer:boolean;
    },
    index:number,
    currentPlan: number,
    setCurrentPlan: (item: number) => void,
}

const Plans =(props:InputProps)=>{
    const{item,index,
    currentPlan,
    setCurrentPlan
    }=props
    return(
        <TouchableOpacity style={[styles(selectedTheme).plansContainer,
        {backgroundColor:(index==currentPlan)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor1}]} onPress={()=>setCurrentPlan(index)} >
                <View style={styles(selectedTheme).plansUpperContainer}>
                    <View style={[styles(selectedTheme).checkedIconContainer,{backgroundColor:(index==currentPlan)?selectedTheme.textColor4:selectedTheme.backgroundColor1}]}>
                       {index==currentPlan&&<Image source={icons.checked} style={styles(selectedTheme).checkedIcon}/>}
                    </View>

                    {item.bestOffer&&<View style={styles(selectedTheme).bestOfferContainer}>
                        <Text style={styles(selectedTheme).bestofferText}>{constants.keywords.bestOffer}</Text>
                    </View>}
                </View>

                <View style={styles(selectedTheme).plansMidContainer}>
                    <Text style={[styles(selectedTheme).priceText,{color:(index==currentPlan)?selectedTheme.textColor4:selectedTheme.textColor}]}>{item.price}</Text>
                    <Text style={[styles(selectedTheme).monthText,{color:(index==currentPlan)?selectedTheme.textColor4:selectedTheme.textColor}]}>/{item.month}</Text>
                </View>
                <Text style={[styles(selectedTheme).labelText,{color:(index==currentPlan)?selectedTheme.textColor4:selectedTheme.textColor}]}>{item.label}</Text>
        </TouchableOpacity>
    )
}
export default Plans