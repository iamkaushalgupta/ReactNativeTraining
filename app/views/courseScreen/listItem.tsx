import React from "react";
import styles from "./style";
import { Image,View,Text,TouchableOpacity,AppRegistry } from "react-native";
import { ProgressBar, Colors } from 'react-native-paper';
import { icon,string } from "../../config";


const ListItem = ( props :any) => {

    return (
        <View style={styles(props.o).listContainer}>
            <Text style={styles(props.o).text}>{string.yourCourses}</Text>
            <Image
                source={
                //     {
                //     uri: props.item.url,
                    
                // }
                icon.courseImage
            }
                style={styles(props.o).itemPhoto}
                resizeMode="cover"
            />
            <Text style={[styles(props.o).courseText]}>{props.item.title}</Text>
            <ProgressBar progress={0.5} color={Colors.green800} style={styles(props.o).progressBar}  />
            <TouchableOpacity style={styles(props.o).button}>
                <Text style={styles(props.o).buttonText}>{string.continueLearning}</Text>
            </TouchableOpacity>
        </View>
    );
    
}

export default ListItem;
