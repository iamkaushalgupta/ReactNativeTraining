import { StyleSheet } from "react-native";

const styles=(focused:boolean)=>StyleSheet.create({
    headerImage:
    { 
        width: 25, height: 25, tintColor: focused? 'red':'black'
     }

})

export default styles;