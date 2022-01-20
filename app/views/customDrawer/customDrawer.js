import React,{useState} from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert,Modal,TouchableWithoutFeedback

} from 'react-native';
import styles from "./styles";
import { string, icons, images } from '../../constants'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const CustomDrawer = (props) => {
    const [image,setImage]=useState(images.profile)
    const [modalVisible, setModalVisible] = useState(false);
    const openCamara = () => {
        const options = {
        storageOptions: {
        path: 'images',
        mediaType:'photo',
        },
        includeBase64: true,
        };
        
        launchCamera(options, response => {
        console.log( response);
        if (response.didCancel) {
        console.log('‘User cancelled image picker’');
        } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        } else {
        // You can also display the image using data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        // console.log("camerauri",source.uri)
        // setimageUriGallary(source.uri);
      
      
        const source = { uri: response.assets[0].uri};
        console.log('response', JSON.stringify(response.assets[0].uri));
        console.log(source)
        setImage(source.uri)
        setModalVisible(false)
        }
        });
        };
      
      
    

    const launchLibrary = () => {
        let options = {
          width: 20,
          height: 20,

          resizeMode:"contain",
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
          launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            Alert.alert(response.customButton);
          } else {
           const source = { uri: response.assets[0].uri};
                
            console.log('response', JSON.stringify(response.assets[0].uri));
            console.log(source)
            setImage(source.uri)
            setModalVisible(false)
          }
        });
    
      }

    const RenderItem = (item) => {

        return (

            <View>
                <TouchableOpacity style={styles.renderContainer} onPress={() => props.navigation.navigate(item.item.navigation)}
                disabled={(item.item.navigation!='')?false:true}
                >
                    <Image source={item.item.icon} style={styles.icon} />
                    <Text style={styles.iconText}>{item.item.screenName}</Text>

                </TouchableOpacity>
                {(item.index == 4) && <View style={styles.lineContainer}>

                </View>
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer2}>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(!modalVisible)}>
                <View style={styles.modalHeader2}></View></TouchableWithoutFeedback>
                <View style={styles.modalFooter2}>
                        
                        <TouchableOpacity onPress={()=>openCamara()}>
                        <View style={styles.modalIconText2}>
                            <Image source={icons.camera} style={styles.modalIcon2}/>
                            <Text style={styles.modalText2}>{string.keywords.camera}</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>launchLibrary()}>
                        <View style={styles.modalIconText2}>
                            <Image source={icons.gallery} style={styles.modalIcon2}/>
                            <Text style={styles.modalText2}>{string.keywords.gallery}</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                        <View style={styles.modalIconText2}>
                            <Image source={icons.close} style={styles.modalIcon2}/>
                            <Text style={styles.modalText2}>{string.keywords.cancel}</Text>
                        </View>
                        </TouchableOpacity>
                </View>
        </View>
      </Modal>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                <Image source={icons.close} style={styles.closeIcon} />

            </TouchableOpacity>

            <View style={styles.upperContainer}>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <Image source={{uri:image}} style={styles.profileIcon} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.nameText}>{string.keywords.name}</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("MyAccountDetail")}><Text style={styles.labelText}>{string.keywords.ViewYourProfile}</Text></TouchableOpacity>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={string.drawer_content}
                extraData={string.drawer_content}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
            />
        </View>
    )
}
export default CustomDrawer;