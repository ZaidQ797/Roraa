import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
export default StyleSheet.create({

    logoContainer: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: Layout.window.height / 5,
        // backgroundColor: "red"
    },
    logo: {
        height: 120,
        bottom: -10,
        resizeMode: "contain"
    },
    slide: {
        // flex: 1,
        resizeMode: 'cover',
        height: Layout.window.height / 2,
        top: -10

    },
    itemContainer: {
        height: Layout.window.height
    },
    text: {
        color: 'white',
        marginTop: 40,
        fontSize: 16,
        textAlign: 'center',
    },
});