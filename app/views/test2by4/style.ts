import { StyleSheet } from "react-native";

const styles=(o:any)=>StyleSheet.create({

        container:{
   
            marginHorizontal:o.isLandscape?o.width*0.02:o.width*0.035,
           
   
        },
    firstHeading:{
        
        textAlign:'center',
        fontSize:o.isLandscape?o.width*0.02:o.width*0.035,
        color:'black'      
},

secondHeading:{
    textAlign:'center',
    fontSize:o.isLandscape?o.width*0.028:o.width*0.045,
    color:'black',
    fontWeight:'600'
},



subHeading:{

    fontSize:o.isLandscape?o.width*0.028:o.width*0.05,
    color:'black',
    paddingVertical:o.isLandscape?o.width*0.0028:o.width*0.005,
    fontWeight:'600'


},

innerContainer:{
    paddingVertical:o.isLandscape?o.height*0.03:o.height*0.025
},
listContainer:{
    borderWidth:1,
    paddingVertical:o.isLandscape?o.height*0.02:o.height*0.008,
    marginVertical:o.isLandscape?o.height*0.02:o.height*0.01,
    paddingHorizontal:o.isLandscape?o.height*0.03:o.height*0.01,
},

listInnerContainer:{
    flex:1,
    flexDirection:'row',
    paddingVertical:o.isLandscape?o.height*0.03:o.height*0.015,
    

    
    
},
testNumber:{
    fontSize:o.isLandscape?o.width*0.023:o.width*0.04,
    color:'black',
    paddingHorizontal:o.isLandscape?o.width*0.015:o.width*0.01
},
icon:{
    height:o.isLandscape?o.height*0.06:o.width*0.07,
        width:o.isLandscape?o.height*0.065:o.width*0.08,
        resizeMode:"contain",
    
},
flatlist:{
    
},

text:{
    paddingVertical:o.isLandscape?o.height*0.005:o.height*0.007,
    paddingHorizontal:o.isLandscape?o.width*0.005:o.width*0.008,
    color:'grey'
},

header:{
    
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:o.isLandscape?o.height*0.04:o.height*0.025,
    marginBottom:o.isLandscape?o.height*0.007:o.height*0.05

},
iconBorder:{
    backgroundColor:'rgba(1,1,1,0.05)',
    padding:o.isLandscape?o.height*0.04:o.width*0.028,
    borderRadius:90,
},
colorText:{
    color:'grey'
}


    
})

export default styles;