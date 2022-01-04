import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    tabBarstyle:{

        paddingHorizontal:30,
        paddingTop:5,
        paddingBottom:5
    },
    tabBarContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:2,
        height:'100%',
        borderRadius:10,
    },
    tabBarIcon:{
        height:20,
        width:20,
        resizeMode:'contain'
    },
    tabBarIconText:{
        fontWeight:'700',
        paddingLeft:2
    }
    

})

export default styles;