import { StyleSheet,Dimensions } from "react-native";
import {colors} from '../../constants'
let {height,width} =Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
         flex:1,
        padding:10,
    },
    renderContainer:{
       
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderTopWidth:1,
        borderColor:colors.grey,
        borderBottomWidth:1,
    },
    renderText:{
        fontSize:18,
        color:colors.white,
        fontWeight:'700'
    },
    headText:{
        fontSize:24,
        color:colors.white,
        paddingVertical:10,
    },
    backgroundImage:{
        height:height,
        width:width
    },
    
})

export default styles