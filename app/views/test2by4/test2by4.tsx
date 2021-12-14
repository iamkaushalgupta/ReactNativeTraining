import React from "react";
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./style";
import { UseOrientation } from "../../config";

const Test2by4 = (props: any) => {

    const o = UseOrientation()
    const RenderItem = (props: any) => {

        return (

            <View style={styles(o).listContainer}>
                <Text style={styles(o).testNumber}>{props.data.item.testNumber}</Text>
                <View style={styles(o).listInnerContainer}>
                    <Image style={styles(o).icon} source={require('../../assets/lock.png')} />
                    <Text style={styles(o).text}>{props.data.item.text}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles(o).container}>
            <FlatList

                ListHeaderComponent={
                    <>
                        <View style={styles(o).header}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <Image
                                    style={styles(o).icon}
                                    source={require('../../assets/left_arrow.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    style={styles(o).icon}
                                    source={require('../../assets/help.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles(o).firstHeading} > Health Coach Training Program</Text>
                        <Text style={styles(o).secondHeading}> Graduation Requirements</Text>
                        <View style={styles(o).innerContainer}>
                            <Text style={styles(o).subHeading}>Test Results</Text>

                            <Text>2/4-Required to graduate</Text>
                        </View>
                        <Text style={styles(o).subHeading}>Course</Text>
                        <Text>Health Coach Training Program</Text>
                        <Text style={styles(o).subHeading}>Student</Text>
                        <Text>Kaushal Gupta</Text>

                    </>

                }

                data={props.data}

                renderItem={(item) => <RenderItem data={item} />}

            />

        </View>

    )
}
export default Test2by4;