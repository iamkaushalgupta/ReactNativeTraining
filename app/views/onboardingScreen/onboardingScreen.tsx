import React, { useRef } from "react";
import styles from "./styles";
import {
    Text, View, Image
    , ImageBackground,
    FlatList,
    TouchableOpacity

} from "react-native";
import {
    string,
} from '../../constants/index'
import UseOrientation from "../../config/useOrientation";
import { HeaderLogo } from "../../common";


const OnboardingScreen = (props: any) => {
    const o = UseOrientation()
    const flatref = useRef<any | null>(null)


    const scrollTo = (data: any) => {
        flatref.current.scrollToIndex({ animated: true, index: data });
    }
    const RenderItem = (input: any) => {

        return (
            <View style={styles(o).renderContainer}>

                {/* Header */}
                <View style={styles(o).renderheaderContainer}>
                    <ImageBackground source={input.data.item.backgroundImage} style={styles(o).backgroundImage}
                        imageStyle={{ resizeMode: 'stretch' }}
                    >
                        <HeaderLogo />
                        <View style={styles(o).bannerContainer}>
                            <Image source={input.data.item.bannerImage} style={styles(o).bannerImage} />
                        </View>
                    </ImageBackground>

                </View>

                {/* Footer */}
                <View style={styles(o).renderfooterContainer}>
                    <Text style={styles(o).titleText}>{input.data.item.title}</Text>
                    <Text style={styles(o).descriptionText}>{input.data.item.description}</Text>

                    {!input.data.item.finalButton &&

                        <View style={styles(o).buttonContainer}>
                            <TouchableOpacity style={styles(o).skipButton} onPress={() => scrollTo(2)}>
                                <Text style={styles(o).skipButtonText}>{string.keywords.skip}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles(o).nextButton} onPress={() => scrollTo(input.data.index + 1)}>
                                <Text style={styles(o).nextButtonText}>{string.keywords.next}</Text>
                            </TouchableOpacity>
                        </View>}

                    {input.data.item.finalButton &&

                        <View style={styles(o).buttonContainer}>

                            <TouchableOpacity style={styles(o).nextButton} onPress={() => props.navigation.navigate('Drawer')}>
                                <Text style={styles(o).nextButtonText}>{string.keywords.letgetstarted}</Text>
                            </TouchableOpacity>
                        </View>}
                </View>

            </View>

        )
    }


    return (

        <View style={styles(o).container}>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={string.onboarding_screens}
                extraData={string.onboarding_screens}
                keyExtractor={(item) => `${item.id}`}
                renderItem={(item) => <RenderItem data={item} />}
                ref={flatref}

            />

        </View>

    )
}
export default OnboardingScreen;