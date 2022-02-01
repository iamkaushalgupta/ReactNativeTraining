import React from "react";
import { TouchableOpacity, Image} from "react-native";
import { icons, selectedTheme } from "../../constants";
import styles from './style';

interface InputProps{
    navigation:any
}

const BackButton=(props:InputProps)=>{
    const {navigation} =props;
    return(
      <TouchableOpacity onPress={()=>navigation.goBack()} style ={styles(selectedTheme).container}>
          <Image source={icons.back} style={styles(selectedTheme).backImage}/>
      </TouchableOpacity>
    )
}
export default BackButton;