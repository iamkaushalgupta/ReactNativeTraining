import React, { useEffect, useRef } from "react";
import {Text,FlatList, View, TouchableOpacity, StatusBar, ImageBackground,Dimensions,Animated} from 'react-native';
import styles from "./style";

let {height,width} = Dimensions.get('window')

interface InputProps{
    navigation:any
}

const HomeScreen = (props: InputProps)=>{
    const {navigation} =props;
    const Rain = useRef(new Animated.Value(0)).current;
    const Rain1 = useRef(new Animated.Value(50)).current;
    const Rain2 = useRef(new Animated.Value(30)).current;
    const Rain3 = useRef(new Animated.Value(10)).current;
    const secondRain = useRef(new Animated.Value(0)).current;
    const secondRain1 = useRef(new Animated.Value(50)).current;
    const secondRain2 = useRef(new Animated.Value(30)).current;
    const secondRain3 = useRef(new Animated.Value(10)).current;
    const thirdRain = useRef(new Animated.Value(0)).current;
    const thirdRain1 = useRef(new Animated.Value(50)).current;
    const thirdRain2 = useRef(new Animated.Value(30)).current;
    const thirdRain3 = useRef(new Animated.Value(10)).current;
    
    
    useEffect(()=>{
        Animated.loop(
            Animated.parallel([
                    Animated.timing(Rain,{
                        toValue: height,
                        duration:6500,
                        useNativeDriver: false
                    }),
                    Animated.timing(Rain1,{
                        toValue: height,
                        duration:4900,
                        useNativeDriver: true
                    }),
                    Animated.timing(Rain2,{
                        toValue: height,
                        duration:6500,
                        useNativeDriver: true
                    }),
                    Animated.timing(Rain3,{
                        toValue: height,
                        duration:4000,
                        useNativeDriver: true
                    }),
                ]),
                {iterations:200}
            ).start()

            Animated.loop(
                Animated.parallel([
                        Animated.timing(secondRain,{
                            toValue: height,
                            duration:10000,
                            useNativeDriver: false
                        }),
                        Animated.timing(secondRain1,{
                            toValue: height,
                            duration:8000,
                            useNativeDriver: true
                        }),
                        Animated.timing(secondRain2,{
                            toValue: height,
                            duration:8800,
                            useNativeDriver: true
                        }),
                        Animated.timing(secondRain3,{
                            toValue: height,
                            duration:6000,
                            useNativeDriver: true
                        }),
                    ]),
                    {iterations:200}
                ).start()
                Animated.loop(
                    Animated.parallel([
                            Animated.timing(thirdRain,{
                                toValue: height,
                                duration:1000,
                                useNativeDriver: false
                            }),
                            Animated.timing(thirdRain1,{
                                toValue: height,
                                duration:9000,
                                useNativeDriver: true
                            }),
                            Animated.timing(thirdRain2,{
                                toValue: height,
                                duration:8000,
                                useNativeDriver: true
                            }),
                            Animated.timing(thirdRain3,{
                                toValue: height,
                                duration:4000,
                                useNativeDriver: true
                            }),
                        ]),
                        {iterations:200}
                    ).start()
        
    },[])
    


    const DATA =[
        { name:'Spring Animation', navigation:'Spring' },
        { name:'Timing Animation', navigation:'Time'},
        { name:'Decay Animation', navigation:'Decay'},
        { name:'Event Animation', navigation:'Event'},
        { name:'InterPolation Animation', navigation:'InterPolate'},
        { name:'Looping In Animation', navigation:'Loop'},
        { name:'Parallel Animation', navigation:'Parallel'},
        { name:'Sequence Animation', navigation:'Sequence'},
        { name:'Stagger Animation', navigation:'Stagger'},
        { name:'Fade In Fade Out Animation', navigation:'FadeInOut'},
    ]
    
    return(
        <ImageBackground source={require('../../assets/backgroundImage.jpg')} 
        style={styles.container}
        
        
        imageStyle={styles.backgroundImage}>
        
        <View  style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Animated.View style={{height:15,width:3,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:Rain1}
        ]}} ></Animated.View>
        <Animated.View style={{height:30,width:1,backgroundColor:"lightblue",borderRadius:90, transform:[
            {translateY:Rain}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:15,width:4,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:secondRain1}
        ]}} ></Animated.View>
        <Animated.View style={{height:30,width:2,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain}
        ]}} ></Animated.View>
        <Animated.View style={{height:10,width:3,backgroundColor:"lightblue",borderRadius:90, transform:[
            {translateY:Rain3}
        ]}} >
            <Animated.View style={{height:10,width:3,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:thirdRain3}
        ]}} ></Animated.View>

        </Animated.View>
        <Animated.View style={{height:15,width:4,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:Rain1}
        ]}} ></Animated.View>
        <Animated.View style={{height:10,width:3,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:thirdRain2}
        ]}} ></Animated.View>
        <Animated.View style={{height:30,width:2,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:Rain}
        ]}} >

        

        </Animated.View>
        <Animated.View style={{height:10,width:3,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:thirdRain}
        ]}} ></Animated.View>
        <Animated.View style={{height:15,width:6,backgroundColor:"lightblue",borderRadius:90, transform:[
            {translateY:Rain1}
        ]}} ></Animated.View>
        <Animated.View style={{height:20,width:5,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:Rain3}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:10,width:3,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:Rain3}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:15,width:4,backgroundColor:"lightblue",borderRadius:90, transform:[
            {translateY:Rain1}
        ]}} ></Animated.View>
        <Animated.View style={{height:10,width:3,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:thirdRain2}
        ]}} ></Animated.View>
             <Animated.View style={{height:10,width:3,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:Rain3}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:15,width:2,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:Rain1}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:10,width:6,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:Rain}
        ]}} >

        </Animated.View>
        
        <Animated.View style={{height:10,width:3,backgroundColor:"lightblue",borderRadius:90, transform:[
            {translateY:thirdRain1}
        ]}} ></Animated.View>

        <Animated.View style={{height:15,width:3,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:secondRain1}
        ]}} ></Animated.View>
        <Animated.View style={{height:30,width:1,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:10,width:3,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:Rain2}
        ]}} >
<Animated.View style={{height:10,width:3,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:thirdRain1}
        ]}} ></Animated.View>
        </Animated.View>
        <Animated.View style={{height:10,width:3,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain3}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:15,width:4,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain1}
        ]}} ></Animated.View>
             <Animated.View style={{height:10,width:3,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:Rain1}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:30,width:2,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain}
        ]}} >
        </Animated.View>
        <Animated.View style={{height:15,width:6,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain1}
        ]}} ></Animated.View>
        <Animated.View style={{height:20,width:5,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:secondRain3}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:15,width:2,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain1}
        ]}} >

        </Animated.View>
        <Animated.View style={{height:10,width:6,backgroundColor:"#98FB98",borderRadius:90, transform:[
            {translateY:secondRain}
        ]}} >
<Animated.View style={{height:10,width:3,backgroundColor:"lightpink",borderRadius:90, transform:[
            {translateY:thirdRain}
        ]}} ></Animated.View>
        </Animated.View>


        </View>
        <View style={styles.container} >
            <StatusBar backgroundColor={'black'} />
            <Text style={styles.headText}>React Animations</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            extraData ={DATA}
            renderItem={({item,index})=>{return(
                <TouchableOpacity style={styles.renderContainer} onPress={()=>navigation.navigate(item.navigation)} >
                    <Text style={styles.renderText}>{item.name}</Text>
                    </TouchableOpacity>
            )}}
            />
        </View>
        </ImageBackground>
    )
}

export default HomeScreen