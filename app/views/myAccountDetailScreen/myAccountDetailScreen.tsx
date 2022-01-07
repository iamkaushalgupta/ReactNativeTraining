import React from "react";
import styles from "./style";
import { icons,images,  string } from "../../constants";
import { Text, View ,TouchableOpacity,Image, SectionList, FlatList} from "react-native";
import { HeaderComponent } from "../../common";

const MyAccountDetailScreen=({navigation}:any)=>{
    const RenderItem=({item}:any)=>{
        return(
            <View style={styles.renderContainer}>
                <Text style={styles.renderTitleText}>{Object.keys(item.item)}</Text>
                <Text style={styles.renderValueText}>{Object.values(item.item)}</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
                <View style={styles.upperContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={icons.left_arrow} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.heading}> {string.screens.MyAccount}</Text>
                <TouchableOpacity style={styles.editButton} onPress={()=>navigation.navigate("MyAccountEdit")}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
        
            </View>

            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.flatListContainer}
            data={string.primary_details}
            renderItem={(item)=><RenderItem item={item}/>}
            keyExtractor={(item,index)=>'Key'+index}
            />

            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.flatListContainer}
            data={string.secondary_details}
            renderItem={(item)=><RenderItem item={item}/>}
            keyExtractor={(item,index)=>'Key'+index}
            />

        </View>
    )
}

export default MyAccountDetailScreen;