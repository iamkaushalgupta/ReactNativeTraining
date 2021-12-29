import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = (o: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },

    renderContainer: {
        flex: 1,
        width: o.width,
        height: o.height,

    },
    renderheaderContainer: {
        flex: 0.6
    },
    renderfooterContainer: {
        flex: 0.4,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:o.width*0.05

    },

    backgroundImage: {
        flex: 1,


    },


    bannerContainer: {

        flex: 1, justifyContent: 'flex-end'

    },

    bannerImage: {
        resizeMode: 'contain',
        flexDirection: 'row',
        width: o.width * 0.66,
        height: o.height * 0.4,
        alignSelf: 'center',
    },
    titleText:{
        color:'black',
        fontSize:30,
        fontWeight:'900'
    },
    descriptionText:{
        width:o.width*0.8,
        textAlign:'center',
        color:COLORS.gray
    },

    buttonContainer:{
        flexDirection:'row'
    },
    nextButton:{
        backgroundColor:COLORS.primary,
        width:'30%',
       
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:10,
        margin:10,
    
    },
    nextButtonText:{
        color:COLORS.white,
        fontSize:20,
        
    },
    skipButton:{
        
        width:'30%',
       
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:10
    
    },
    skipButtonText:{
        color:COLORS.gray,
        fontSize:20,
        
    }




})

export default styles