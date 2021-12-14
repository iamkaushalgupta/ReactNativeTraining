import { StyleSheet } from "react-native";

const styles =(o:any)=> StyleSheet.create({
    container:{
        marginHorizontal: o.isLandscape?o.width*0.009:o.width*0.03 ,
        marginVertical:o.isLandscape?o.height*0.04:o.height*0.02,
    },
    Button:{
    
        flexDirection:'row',
        justifyContent:'space-between',
    
    },
    arrow:{
        height:20 ,
        width:20,
        tintColor:'grey'

    },
    block:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    iconName:{
        marginHorizontal:17,
        fontSize:o.isLandscape?o.width*0.025:o.width*0.035,
        alignSelf:'flex-start',
        fontWeight:'400',
        color:"#000020"        
    },
    icon:{
        height:o.isLandscape?o.height*0.05:o.height*0.035,
        width:o.isLandscape?o.width*0.05:o.width*0.065,
        resizeMode:"contain"
    },
    line:{
       
        width:o.width*0.95,
        backgroundColor:'black',
        height:o.isLandscape?o.height*0.002:o.height*0.001,
        marginTop:o.isLandscape?o.height*0.04:o.height*0.013,    
        marginHorizontal: o.isLandscape?o.width*0.009:o.width*0.002 ,
    }
   

})

export default styles;

