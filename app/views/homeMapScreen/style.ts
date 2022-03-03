import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let {height,width} =Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{
        color:'blue',
        flex:0.3
    }
})

export default styles