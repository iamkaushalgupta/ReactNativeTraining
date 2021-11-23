import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#009387'
        },

        header:
        {
            flex: 1
        },

        footer:
        {
            flex: 3,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },

        text:
        {
            fontSize: 40,
            color: 'white',
            fontWeight: 'bold',
            paddingTop: 50,
            paddingLeft: 15,
        },


        innerContainer:
        {
            padding: 30,
        },
        secondText:
        {
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            paddingTop: 30,
            paddingLeft: 30,
        },

        text_footer: {
            color: '#05375a',
            fontSize: 17,
            paddingTop: 10
        },



    }
)

export default styles;