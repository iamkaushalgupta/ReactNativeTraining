import React from "react";
import styles from "./style";
import { Image, View } from 'react-native'
import { images } from "../../constants";
import UseOrientation from "../../config/useOrientation";
const HeaderLogo = () => {
    const o = UseOrientation()
    return (
        <View style={styles(o).container}>
            <Image source={images.logo_02} style={styles(o).logo} />

        </View>
    );
}

export default HeaderLogo