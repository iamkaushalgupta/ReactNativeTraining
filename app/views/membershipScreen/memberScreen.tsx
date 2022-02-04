import React from "react";
import styles from "./style";
import {View,Text,
    Image,
    TouchableOpacity,
    FlatList

} from 'react-native';
import {
    constants,
    selectedTheme,
    icons,
    dummyData,
} from '../../constants'
import Plans from "./plans";

interface InputProps{
    navigation:any,
    currentPlan: number,
    setCurrentPlan: (item: number) => void    
    

}

const MemberShipScreen = (props:InputProps)=>{
    const{
        navigation,
        currentPlan,
        setCurrentPlan
    } =props
    return(
        <View style={styles(selectedTheme).container}>
            <View style={styles(selectedTheme).upperContainer}>
                <View style={styles(selectedTheme).innerUpperContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={icons.left_arrow} style={styles(selectedTheme).headerLeftIcon} />
                    </TouchableOpacity>

                    <Text style={styles(selectedTheme).headingText}>{constants.keywords.memberShip}</Text>

                    <View style={styles(selectedTheme).headerRightIcon}>
                    </View>

                </View>
                <Text style={styles(selectedTheme).headText} >{constants.keywords.unlimitedStudyAnywhereAnytime}</Text>
            </View>
            <View style={styles(selectedTheme).bottomContainer}>
                    <Text style={styles(selectedTheme).titleText}>{constants.keywords.chooseaPlan}</Text>
                    <FlatList
                    data={dummyData.memberShipPlans}
                    extraData={dummyData.memberShipPlans}
                    keyExtractor={(item,index)=>'key'+index}
                    renderItem={({item,index})=><Plans item={item} index={index} currentPlan={currentPlan} 
                    setCurrentPlan={(item:number)=>setCurrentPlan(item)} />}
                    numColumns={2}
                    />
            </View>
        </View>
    )
}

export default MemberShipScreen;