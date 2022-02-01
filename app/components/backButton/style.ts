import { StyleSheet } from "react-native";
const styles =(selectedTheme:any)=>StyleSheet.create({
    container:{
        alignSelf:'flex-start',
        backgroundColor:selectedTheme.backgroundColor8,
        padding:10,
        borderRadius:180,
        alignItems:'center',
        justifyContent:'center',
        
    },
    backImage:{
        resizeMode:'contain',
        height:30,
        width:30,
        tintColor:selectedTheme.tintColor
    }
})
export default styles;