import { StyleSheet } from "react-native";

const styles = (o: any) => StyleSheet.create({

    header: {
        flex: 1 / 3,
        // paddingHorizontal: o.isLandscape?o.width*0.02:o.width*0.03,
    },

    footer: {
        flex: 2 / 3,
        backgroundColor: 'white',
        paddingHorizontal: o.isLandscape ? o.width * 0.02 : o.width * 0.05,
        marginTop: o.isLandscape ? o.width * 0.02 : o.height * 0.03
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    headerImage: {
        resizeMode: 'stretch',
        position: 'absolute',
        height: "100%",
        width: "100%",

        flex: 1,
        flexDirection: 'column'

    },

    iconBorder: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: o.isLandscape ? o.height * 0.04 : o.width * 0.02,
        borderRadius: 180,
    },

    icon: {
        height: o.isLandscape ? o.height * 0.06 : o.width * 0.07,
        width: o.isLandscape ? o.height * 0.065 : o.width * 0.07,
        resizeMode: "contain",

    },

    headerBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: o.isLandscape ? o.height * 0.04 : o.height * 0.03,
        marginBottom: o.isLandscape ? o.height * 0.0 : o.height * 0.03,

    },

    progressBar: {
        height: o.isLandscape ? o.height * 0.015 : o.height * 0.005,
        width: o.width
    },

    mainHeading: {
        fontSize: 30,
        color: '#000020',
        fontWeight:'600',
        fontFamily:'PublicSans-Regular',
        width:'75%',
        paddingBottom: o.isLandscape ? o.height * 0.0 : o.height * 0.01
    
    },
    labelText: {
        color: "white",
        fontWeight: '700',
        paddingBottom: o.isLandscape ? o.height * 0.0 : o.height * 0.005,
        fontFamily:'PublicSans-Regular'
    },

    moduleText: {
        color: '#000020',
        fontWeight: '600',
        fontSize: 25,
        borderBottomColor: 'orange',
        borderBottomWidth: 3,
        paddingBottom:o.isLandscape ? o.height * 0.0 : o.height * 0.01

    },
    firstinnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    insideHeader: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: o.isLandscape ? o.width * 0.02 : o.width * 0.05,
    },
    secondinnerContainer:{
    borderBottomWidth:1,
    paddingVertical:o.isLandscape ? o.height * 0.0 : o.height * 0.02,
    borderBottomColor:'grey'    
    },

    insideSecondContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    button:{
        backgroundColor:"#000020",    
        height:"60%"
    },

    buttonText: { 
        color: 'white', 

        textAlign: 'center', 
        paddingVertical: 5,
        padding: 15, 
        fontFamily:'PublicSans-Regular',
        fontWeight:'600'
        
       },

    subHeadText:{
        fontSize:22,
        color:'#000020',
        fontFamily:'PublicSans-Regular',
        fontWeight:'600'
     
    },
    fontText:{
        fontFamily:'PublicSans-Regular'
    },
    thirdinnerContainer:{
    marginVertical:    o.isLandscape ? o.height * 0.0 : o.height * 0.02,
        

    },
    filterButtonText:{
        color:'orange',
        fontFamily:'PublicSans-Regular',
        fontSize:18
    },
    filterButton:{
        borderColor:'orange',
        borderWidth:2,
        paddingVertical: 2,
        padding: 6,
        fontWeight:'600' 
    },
    filterText:{
        color:'#000020',
        fontFamily:'PublicSans-Regular',
        fontWeight:'600',
        fontSize:18,
        paddingRight:10,
    },
    renderContainer:{
        flexDirection:'row',
        
    },
    mainImage:{
        width:"30%",
        height:'100%'
    },
    clockImage:{
        width:20,
        height:20
    },

    renderInnerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    renderLeftContainer:{
        paddingLeft:10,
        flex:1
    },
    mainRenderHeading:{
        color:'#000020',
        fontSize:15,
        fontWeight:'600',
        paddingVertical:10,
        width:'100%'
    },
    renderTextTime:{
        paddingLeft:10,
    },
    renderLeftInsideContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    renderModuleContainer:{
        flexDirection:'row',
        marginVertical:8,
        marginLeft:70,
    },
    subModuleText:{
        paddingLeft:8,
    },
    modalContainer:{
        flex:1,
        backgroundColor:'rgba(128,128,128,0.5)'
    },
     modalUpper:{
        flex:1/4,
        
     },
     modalLower:{
        flex:3/4,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:'center',
        // justifyContent:'space-around'
    },
    modalLabelText:{
        color:'#000020',
        fontSize:20,
        paddingBottom:10,
        paddingTop:20,
    },
    modalLowerInnerContainer:{
        // alignItems:'center'
    },
    modalfilterButton:{
        backgroundColor:'#000020',
        borderWidth:2,
        
        fontWeight:'600',
        width:"90%",
        height:'10%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    modalfilterButtonText:{
    color:'white',
    fontSize:18,

    }
    ,
    renderWrapperContainer:{
        flexDirection:'row',
        
    },
    bookmarkImage:{
        width:20,
        height:20,
        marginRight:10,
    },
    crossIcon:{
        height:10,
        width:10,
        justifyContent:'center',
        alignSelf:'center',
        marginVertical:'100%',
        // marginLeft:10,
    },
    filterContainer:{
        flexDirection:'row',
        backgroundColor:'lightgrey',
        alignContent:'center',
        justifyContent:'center',
        height:"100%",
        paddingHorizontal:5,
        marginHorizontal:5,
    },
    filtersText:{
        color:"black",
        fontSize:15,
        textAlign:'center',
        textAlignVertical:'center',
        marginHorizontal:10,
    },
    upperFilterContainer:{
        flexDirection:'row'
    },
    subModuleContainer:{
        position:'absolute'
    }

})

export default styles;