import React,{useState,useEffect} from "react";
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground ,Modal,Alert, TouchableWithoutFeedback} from 'react-native';
import { icon, string, UseOrientation } from "../../config";
import styles from "./style";
import ImagePicker, { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const ProfileScreen = (props) => {
    const o = UseOrientation()
    const[firstEdit,setFirstEdit]=useState(false)
    const[secondEdit,setSecondEdit]=useState(false)
    const[thirdEdit,setThirdEdit]=useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    const data={firstName:'kaushal',secondName:"Gupta", 
        Gender:"Male", Email:"kaushalgupta198@gmail.com",
    homePhone:"8860393547", WorkPhone:"8851798050",MobilePhone:"8860393547", 
    Address:'A-532, Shastri Nagar, Delhi-110052'}

    const [dataState,setDataState]=useState(
       data
    )

    const [image,setImage]=useState(icon.profileImage)

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
    return (

        <View style={styles(o).container}>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles(o).modalContainer}>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(!modalVisible)}>
                <View style={styles(o).modalHeader}></View></TouchableWithoutFeedback>
                <View style={styles(o).modalFooter}>
                        
                        <TouchableOpacity onPress={()=>openCamara()}>
                        <View style={styles(o).modalIconText}>
                            <Image source={icon.camera} style={styles(o).modalIcon}/>
                            <Text style={styles(o).modalText}>{string.camera}</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>launchLibrary()}>
                        <View style={styles(o).modalIconText}>
                            <Image source={icon.gallery} style={styles(o).modalIcon}/>
                            <Text style={styles(o).modalText}>{string.gallery}</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                        <View style={styles(o).modalIconText}>
                            <Image source={icon.cancel} style={styles(o).modalIcon}/>
                            <Text style={styles(o).modalText}>{string.cancel}</Text>
                        </View>
                        </TouchableOpacity>
                </View>
        </View>
      </Modal>
            <View style={styles(o).header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <View style={styles(o).iconBorder}>
                        <Image
                        style={styles(o).icon}
                        source={icon.left_arrow}
                    />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles(o).iconBorder}>
                    <Image
                        style={styles(o).icon}
                        source={icon.help}
                    />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles(o).head}>
                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                <ImageBackground source={{uri:image}}
                 imageStyle={{ borderRadius:90}}
                style={styles(o).profileImage} >
                    <Image source={icon.camera} resizeMode="contain" style={styles(o).cameraImage} />
                </ImageBackground>
                </TouchableOpacity>
                <View style={styles(o).detailText}>
                    <Text style={styles(o).name}>Kaushal Gupta</Text>
                    <Text style={styles(o).labelText}>kaushalgupta198@gmail.com</Text>

                </View>

            </View>
            <View style={styles(o).longLine}></View>

            <ScrollView>          
                
                <View style={styles(o).InformationContainer}>
                    <View style={styles(o).commonFirstLine}>
                        <Text style={styles(o).text}>{string.personalInformation}</Text>
                        <TouchableOpacity style={styles(o).editButton} onPress={()=>(setFirstEdit(!firstEdit))}>
                            <Text style={styles(o).editText}>{(firstEdit?"Save":"Edit")}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles(o).labelText}>{string.firstName}</Text>
                    <TextInput style={styles(o).inputText} placeholder={string.firstName}
                     value={dataState.firstName}
                     editable={firstEdit}
                        onChangeText={(item)=>setDataState({firstName:item,secondName:data.secondName, 
                            Gender:data.Gender, Email:data.Email,
                            homePhone:data.homePhone, WorkPhone:data.WorkPhone,MobilePhone:data.MobilePhone, 
                            Address:data.Address})}

                     ></TextInput>

                    <Text style={styles(o).labelText}>{string.lastName}</Text>
                    <TextInput 
                    onChangeText={(item)=>setDataState({firstName:data.firstName,secondName:item, 
                        Gender:data.Gender, Email:data.Email,
                        homePhone:data.homePhone, WorkPhone:data.WorkPhone,MobilePhone:data.MobilePhone, 
                        Address:data.Address})}

                    editable={firstEdit} placeholder="Last Name" style={styles(o).inputText} value={dataState.secondName}></TextInput>

                    <Text style={styles(o).labelText}>{string.gender}</Text>
                    <TextInput editable={firstEdit} placeholder="Gender" style={styles(o).inputText}
                    onChangeText={(item)=>setDataState({firstName:data.firstName,secondName:data.secondName, 
                        Gender:item, Email:data.Email,
                        homePhone:data.homePhone, WorkPhone:data.WorkPhone,MobilePhone:data.MobilePhone, 
                        Address:data.Address})}

                    value={dataState.Gender}></TextInput>
                </View>

  
                <View style={styles(o).InformationContainer}>
                    <View style={styles(o).commonFirstLine}>
                        <Text style={styles(o).text}>{string.contact}</Text>

                        <TouchableOpacity style={styles(o).editButton} onPress={()=>(setSecondEdit(!secondEdit))}>
                            <Text style={styles(o).editText}>{(secondEdit?"Save":"Edit")}</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles(o).labelText}>{string.email}</Text>
                    <TextInput editable={secondEdit} 
                    placeholder="Email" style={styles(o).inputText} value={dataState.Email}
                    onChangeText={(item)=>setDataState({firstName:data.firstName,secondName:data.secondName, 
                        Gender:data.Gender, Email:item,
                        homePhone:data.homePhone, WorkPhone:data.WorkPhone,MobilePhone:data.MobilePhone, 
                        Address:data.Address})}
                    ></TextInput>

                    <Text style={styles(o).labelText}>{string.homePhone}</Text>
                    <TextInput editable={secondEdit} 
                    placeholder="Home Phone" style={styles(o).inputText}
                     value={dataState.homePhone
                    }

                    onChangeText={(item)=>setDataState({firstName:data.firstName,secondName:data.secondName, 
                        Gender:data.Gender, Email:data.Email,
                        homePhone:item, WorkPhone:data.WorkPhone,MobilePhone:data.MobilePhone, 
                        Address:data.Address})}
                    
                    ></TextInput>

                    <Text style={styles(o).labelText}>{string.workPhone}</Text>
                    <TextInput editable={secondEdit} placeholder="Work Phone" style={styles(o).inputText} value={dataState.WorkPhone}
                       onChangeText={(item)=>setDataState({firstName:data.firstName,secondName:data.secondName, 
                        Gender:data.Gender, Email:data.Email,
                        homePhone:data.homePhone, WorkPhone:item,MobilePhone:data.MobilePhone, 
                        Address:data.Address})}

                    ></TextInput>

                    <Text style={styles(o).labelText}>{string.mobilePhone}</Text>
                    <TextInput editable={secondEdit} placeholder="Mobile Phone" style={styles(o).inputText} value={dataState.MobilePhone}
                       onChangeText={(item)=>setDataState({firstName:data.firstName,secondName:data.secondName, 
                        Gender:data.Gender, Email:data.Email,
                        homePhone:data.homePhone, WorkPhone:data.WorkPhone,MobilePhone:item, 
                        Address:data.Address})}
                    
                    ></TextInput>
                </View>

                <View style={styles(o).InformationContainer}>
                    <View style={styles(o).commonFirstLine}>
                        <Text style={styles(o).text} >{string.mailingAddress}</Text>

                        <TouchableOpacity style={styles(o).editButton} onPress={()=>(setThirdEdit(!thirdEdit))}>
                            <Text style={styles(o).editText}>{(thirdEdit?"Save":"Edit")}</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles(o).labelText}>{string.address}</Text>
                    <TextInput
                
                    editable={thirdEdit} placeholder="Address" style={styles(o).inputText} value={dataState.Address}
                    onChangeText={(item)=>setDataState({firstName:data.firstName,secondName:data.secondName, 
                        Gender:data.Gender, Email:data.Email,
                        homePhone:data.homePhone, WorkPhone:data.WorkPhone,MobilePhone:data.MobilePhone, 
                        Address:item})}
                    ></TextInput>
                    


                </View>
            

                </ScrollView>
        </View>

    );
}
export default ProfileScreen;   