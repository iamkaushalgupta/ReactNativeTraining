import { StyleSheet } from "react-native";


const styles=(o:any)=>StyleSheet.create({
    container:{
        marginHorizontal:o.isLandscape?o.width*0.05:o.width*0.065
    },
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:o.isLandscape?o.height*0.04:o.height*0.025,
        marginBottom:o.isLandscape?o.height*0.007:o.height*0.05
    
    },

    
icon:{
    height:o.isLandscape?o.height*0.05:o.height*0.035,
    width:o.isLandscape?o.width*0.05:o.width*0.065,
    resizeMode:"contain",
    
},

heading:{
    textAlign:'center',
    fontSize:o.isLandscape?o.width*0.05:o.width*0.065,
    color:'black',
    fontWeight:'600'
},

commonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:o.isLandscape?o.height*0.03:o.height*0.025
},

text:{
    color:'black',
    fontWeight:'700',
    fontSize:o.isLandscape?o.width*0.034:o.width*0.055
},

button:{
//  height:o.isLandscape?o.height*0.03:o.height*0.0
    
},
activeInactiveText:{
    fontSize:o.isLandscape?o.width*0.03:o.width*0.05,
}
    
})

export default styles