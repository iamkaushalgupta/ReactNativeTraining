import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    logo: {
        resizeMode:'contain'
        
    },

    container:{
        scaleY:0.55,
        scaleX:0.5,
        marginLeft:-windowWidth*0.06
    }
    
})

export default styles;