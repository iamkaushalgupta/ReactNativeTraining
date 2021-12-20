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

        height:o.isLandscape?o.height*0.18:o.width*0.18,
        width:o.isLandscape?o.height*0.18:o.width*0.18,
        resizeMode:'contain',
        borderRadius:180    
    },

    detailText:{
        marginTop:o.isLandscape?o.height*0.02:o.height*0.01,
        marginHorizontal: o.isLandscape?o.width*0.02:o.width*0.03,
    },
    longLine:{
        width:o.width,
        backgroundColor:'grey',
        height:1,
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
        fontSize:o.isLandscape?o.width*0.02:o.width*0.04,
        color:'grey'
    },
    colorText:{
        color:'grey'
    }
})

export default styles;
