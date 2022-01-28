import React from "react";
import styles from "./style";
import {
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {
    constants,
    theme,
    COLORS,
    darkTheme,
    lightTheme,
    selectedTheme,
    images,
    icons,
    dummyData,

} from '../../constants';
import { BackButton } from "../../components";
import RenderItem from './renderItem'
interface InputProps{
 navigation:any,
 category:number,
 setCategory:(n: number) => void
}

const CategoryScreen = (props:InputProps)=>{
    const {navigation,
    category,
    setCategory
    }=props;
    return(
        <View style={styles(selectedTheme).container}>
            <StatusBar animated={true} 
        backgroundColor={(selectedTheme.name=='light')?COLORS.white:COLORS.gray80 }  
        barStyle={"dark-content"}
        />
        <BackButton navigation={navigation}/>
            <Text style={styles(selectedTheme).headText}>{constants.screens.ChooseCategory}</Text>

          
            <FlatList
            data={constants.categories}
            extraData={constants.categories}
            keyExtractor={(item,index)=>'key'+index}
            renderItem={({item,index})=><RenderItem item={item} index={index} category={category} 
            setCategory={(n:number)=>setCategory(n)}  navigation={navigation} />}
            numColumns={3}
            contentContainerStyle={{alignItems:'center'}}
            />

            <TouchableOpacity style={styles(selectedTheme).button} onPress={()=>navigation.navigate('Tab')}>
                <Text style={styles(selectedTheme).buttonText}>{constants.keywords.continue}</Text>
            </TouchableOpacity>

               </View>
    )
}
export default CategoryScreen;