import { StyleSheet } from "react-native";

const styles =(o:any)=> StyleSheet.create({
    container: {
        flex:1,
           
    },
    header:{
        marginHorizontal: o.isLandscape?o.width*0.009:o.width*0.03 ,
        marginTop:o.isLandscape?o.height*0.03:o.height*0.03,
        flexDirection:'row',  
    },
    profileImage:{
        
        height:o.isLandscape?o.height*0.15:o.height*0.09,
        width:o.isLandscape?o.width*0.08:o.width*0.15,
        
    },

    detailText:{
        marginTop:o.isLandscape?o.height*0.02:o.height*0.02,
        marginHorizontal: o.isLandscape?o.width*0.02:o.width*0.03,
    },
    longLine:{
        width:o.width,
        backgroundColor:'black',
        height:o.isLandscape?o.height*0.002:o.height*0.001,
        marginVertical:o.isLandscape?o.height*0.04:o.height*0.02
    },
   
    name:{
        fontSize:22,
        fontWeight:'600',
        color:"#000020",
    },

    text:{
        marginHorizontal: o.isLandscape?o.width*0.009:o.width*0.03,
        fontWeight:'500',
        fontSize:o.isLandscape?o.width*0.024:o.width*0.04
    },
    
    
   
})

export default styles;
