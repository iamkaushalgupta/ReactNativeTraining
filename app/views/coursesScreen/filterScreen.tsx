import React from "react";
import {
    Image, Text, TouchableOpacity,
    View,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import styles from './style'
import {
    constants,
    COLORS,
    selectedTheme,
    icons,

} from '../../constants';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
interface InputProp{
    setFilterOpen:(item: boolean) => void,
    filterOpen: boolean,
    classType: number,
    setClassType: (item: number) => void,
    classLevel: number,
    setClassLevel: (item: number) => void,
    created:number,
    setCreated:(item:number)=>void;
    reset: () => void
}

const FilterScreen=(props:InputProp)=>{
    const{
        setFilterOpen,
        filterOpen,
        classType,
        setClassType,
        classLevel,
        setClassLevel,
        created,
        setCreated,
        reset
    }=props
    return(
        <View style={styles(selectedTheme).filterContainer}>
            <View style={styles(selectedTheme).filterUpperContainer}>
            <TouchableWithoutFeedback onPress={()=>setFilterOpen(false)}>
                <View style={styles(selectedTheme).filterInnerContainer}></View>
            </TouchableWithoutFeedback>
            </View>
                <View style={styles(selectedTheme).filterBottomContainer}>
                    <View style={styles(selectedTheme).filterBottomUpContainer}>
                    <TouchableOpacity onPress={()=>setFilterOpen(false)} style={styles(selectedTheme).cancelButton} >
                            <Text style={styles(selectedTheme).cancelText}></Text>
                        </TouchableOpacity>
                        <Text style={styles(selectedTheme).headText}>{constants.keywords.filters}</Text>
                        <TouchableOpacity onPress={()=>setFilterOpen(false)} style={styles(selectedTheme).cancelButton} >
                            <Text style={styles(selectedTheme).cancelText}>{constants.keywords.cancel}</Text>
                        </TouchableOpacity>
                        </View>    

                  <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{marginVertical:10,}}>
                  <Text style={styles(selectedTheme).filterTitle}>{constants.keywords.classType}</Text>
                        <View style={styles(selectedTheme).classTypeContainer}>
                            <TouchableOpacity style={[styles(selectedTheme).classTypeButton,{
                                backgroundColor:(classType==0)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]}
                             onPress={()=>setClassType(0)}>
                                    <Image source={icons.education} style={[styles(selectedTheme).classTypeImage,{
                                        tintColor:(classType==0)?selectedTheme.dotColor1:COLORS.gray40
                                    }]}/>
                                    <Text style={[styles(selectedTheme).classTypeText,{
                                                    color:(classType==0)?selectedTheme.textColor4:selectedTheme.textColor
                                    }]}>{constants.keywords.all}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={[styles(selectedTheme).classTypeButton,{
                                 backgroundColor:(classType==1)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setClassType(1)}>
                                    <Image source={icons.staff_pick} style={[styles(selectedTheme).classTypeImage,{
                                        tintColor:(classType==1)?selectedTheme.dotColor1:COLORS.gray40
                                    }]} />
                                    <Text style={[styles(selectedTheme).classTypeText,{
                                        color:(classType==1)?selectedTheme.textColor4:selectedTheme.textColor
                                    }]}>{constants.keywords.staffPick}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={[styles(selectedTheme).classTypeButton,{
                                 backgroundColor:(classType==2)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setClassType(2)} >
                                    <Image source={icons.original} style={[styles(selectedTheme).classTypeImage,{
                                        tintColor:(classType==2)?selectedTheme.dotColor1:COLORS.gray40
                                    }]} />
                                    <Text style={[styles(selectedTheme).classTypeText,{
                                        color:(classType==2)?selectedTheme.textColor4:selectedTheme.textColor
                                    }]}>{constants.keywords.original}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles(selectedTheme).filterTitle}>{constants.keywords.classLevel}</Text>
                        <View style={styles(selectedTheme).classLevelContainer}>
                            <Text style={styles(selectedTheme).classLevelText}>{constants.keywords.Beginner}</Text>
                            <TouchableOpacity onPress={()=>setClassLevel(0)} style={styles(selectedTheme).checkIconWrapper}>
                                {(classLevel==0)&&<Image 
                                style={styles(selectedTheme).checkIcon}
                                source={selectedTheme.name=='light'?icons.checkbox_on:icons.checkbox_on_dark}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles(selectedTheme).classLevelContainer}>
                            <Text style={styles(selectedTheme).classLevelText}>{constants.keywords.intermediate}</Text>
                            <TouchableOpacity style={styles(selectedTheme).checkIconWrapper} onPress={()=>setClassLevel(1)}>
                                {(classLevel==1)&&<Image 
                                style={styles(selectedTheme).checkIcon}
                                source={selectedTheme.name=='light'?icons.checkbox_on:icons.checkbox_on_dark}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles(selectedTheme).classLevelContainer}>
                            <Text style={styles(selectedTheme).classLevelText}>{constants.keywords.expert}</Text>
                            <TouchableOpacity style={styles(selectedTheme).checkIconWrapper} onPress={()=>setClassLevel(2)}>
                                {(classLevel==2)&&<Image 
                                style={styles(selectedTheme).checkIcon}
                                source={selectedTheme.name=='light'?icons.checkbox_on:icons.checkbox_on_dark}/>}
                            </TouchableOpacity>
                        </View>

                        <Text style={styles(selectedTheme).filterTitle}>{constants.keywords.createdWithin}</Text>
                        <View style={styles(selectedTheme).createdWithinContainer}>
                            <TouchableOpacity style={[styles(selectedTheme).innerCreatedWithinContainer,{
                               backgroundColor:(created==0)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setCreated(0)} >
                                <Text style={[styles(selectedTheme).createdWithinText,{
                                    color:(created==0)?selectedTheme.textColor4:selectedTheme.textColor
                                }]}>{constants.keywords.allTime}</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles(selectedTheme).innerCreatedWithinContainer,{
                                backgroundColor:(created==1)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setCreated(1)}>
                                <Text style={[styles(selectedTheme).createdWithinText,{
                                    color:(created==1)?selectedTheme.textColor4:selectedTheme.textColor
                                }]}>{constants.keywords.ThisMonth}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={[styles(selectedTheme).innerCreatedWithinContainer,{
                                backgroundColor:(created==2)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setCreated(2)}>
                                <Text style={[styles(selectedTheme).createdWithinText,{
                                    color:(created==2)?selectedTheme.textColor4:selectedTheme.textColor
                                }]}>{constants.keywords.ThisWeek}</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles(selectedTheme).createdWithinContainer}>
                            <TouchableOpacity style={[styles(selectedTheme).innerCreatedWithinContainer,{
                                backgroundColor:(created==3)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setCreated(3)}>
                                <Text style={[styles(selectedTheme).createdWithinText,{
                                    color:(created==3)?selectedTheme.textColor4:selectedTheme.textColor
                                }]}>{constants.keywords.ThisDay}</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity  style={[styles(selectedTheme).innerCreatedWithinContainer,{
                                backgroundColor:(created==4)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setCreated(4)}>
                                <Text style={[styles(selectedTheme).createdWithinText,{
                                    color:(created==4)?selectedTheme.textColor4:selectedTheme.textColor
                                }]}>{constants.keywords.twoMonths}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={[styles(selectedTheme).innerCreatedWithinContainer,{
                                backgroundColor:(created==5)?selectedTheme.backgroundColor2:selectedTheme.backgroundColor8
                            }]} onPress={()=>setCreated(5)}>
                                <Text style={[styles(selectedTheme).createdWithinText,{
                                    color:(created==5)?selectedTheme.textColor4:selectedTheme.textColor
                                }]}>{constants.keywords.fourMonths}</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <Text style={styles(selectedTheme).filterTitle}>{constants.keywords.classLength}</Text>
                      <View style={{marginLeft:10,}}>
                        <MultiSlider
                            values={[10, 60]}
                            min={10}
                            max={50}
                            step={5}
                            markerOffsetY={15}
                            selectedStyle={{ backgroundColor: COLORS.primary }}
                            trackStyle={{ height: 5, borderRadius: 10,  }}
                            minMarkerOverlapDistance={50}
                            customMarker={(e) => {
                                return (
                                    <View >
                                        <View style={{height:20,width:20,marginLeft:10,backgroundColor:COLORS.primary,borderRadius:180,}} ></View>
                                        <Text>{e.currentValue}min</Text>
                                    </View>
                                )
                            }}

                        />
                        </View>
                        </View>
                  </ScrollView>

                       <View style={styles(selectedTheme).buttonContainer}>
                           <TouchableOpacity style={styles(selectedTheme).button} onPress={()=>{reset()}} >
                               <Text style={styles(selectedTheme).buttonText}>{constants.keywords.reset}</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={styles(selectedTheme).button2} onPress={()=>setFilterOpen(false)}>
                               <Text style={styles(selectedTheme).buttonText2} >{constants.keywords.apply}</Text>
                           </TouchableOpacity>
                           </View> 
                </View>
        </View>
    )
}

export default FilterScreen