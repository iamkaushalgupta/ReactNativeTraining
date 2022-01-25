import React from "react";
import { TouchableOpacity, Image} from "react-native";
import { icons } from "../../constants";
import styles from './style';

interface InputProps{
    navigation:any
}

const BackButton=(props:InputProps)=>{
    const {navigation} =props;
    return(
      <TouchableOpacity onPress={()=>navigation.goBack()} style ={styles.container}>
          <Image source={icons.back} style={styles.backImage}/>
      </TouchableOpacity>
    )
}
export default BackButton;