import React from 'react';
import { View, Text, FlatList, ScrollView, Button } from 'react-native';
import RenderItem from './renderItem';
import { UseOrientation } from '../../config';
import styles from './style';

type InputProps = {
    navigation: any
    data: Array<any>
}

const ProgressScreen = (props: InputProps) => {
    const { navigation } = props;
    const o = UseOrientation()
    return (
        <FlatList style={styles(o).container}
            ListHeaderComponent={
                <View >
                    <Text style={styles(o).firstHeading}>Graduation Requirements</Text>
                    <Text style={styles(o).secondHeading}>Graduation Requirements</Text>
                    <View style={styles(o).flatlistContainer}>
                    </View>
                </View>
            }
            data={props.data}
            renderItem={(item) => (<RenderItem data={item} o={o} navigation={navigation} />)}
        />
    )
}

export default ProgressScreen