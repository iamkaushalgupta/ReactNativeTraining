import { StyleSheet, Dimensions } from "react-native";

let {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
    },
    containerImage:{
        height:height,
        width:width
    }

})

export default styles;
