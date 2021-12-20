import { StyleSheet,Dimensions } from "react-native";

const styles =(o:any)=> StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: o.isLandscape? o.width*.03:o.width*.04,   
    },

    firstHeading:{
        fontSize:o.isLandscape? o.height*.06:o.width*.07,
       
        fontWeight: "600",  
        color:"#000020",
        paddingVertical: o.isLandscape? o.height*.04:o.height*.03
    },

    secondHeading:{
        fontSize:o.isLandscape? o.height*.05:o.width*.055,
       
        fontWeight: "500",
        color:"#000020",
    },

    taskText:{
        color:"#000020",
        fontSize:o.isLandscape? o.width*.023:o.width*.04,
        fontWeight:'600'
    },
    flatlistContainer:{
        paddingVertical: o.isLandscape? o.height*.04:o.height*.023
    },

    
    HorizontalLine:{
        width:o.width,
        height:0.5,
        marginVertical: o.isLandscape? o.height*.035:o.height*.023,
        backgroundColor:"#000020",
    },

    detailsButton:{
        borderWidth:1,
        width:o.isLandscape?o.width*.2:o.width*.3,
        height: o.isLandscape? o.height*.06:o.height*.033,
        textAlign:'center',
        justifyContent:'center'

    },

    detailsButtonText:{
        color:"#000020",
        textAlign:'center',
        fontWeight:'600'
    },

    renderContainer:{
        flexDirection:'row',justifyContent:'space-between'
    }


})

export default styles;