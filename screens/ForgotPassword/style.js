import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
export default StyleSheet.create({


    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.dark,
        marginTop: 20
    },
    topContainer: {
        // top: -150,
        width: Layout.window.width,
        // justifyContent: "center",
        // alignItems: "center"
    },
    bottomFooterRelative: {
        // height: 100,  
        // position: "absolute",
        top: Layout.window.height / 6,
        // paddingBottom: 20
        // backgroundColor: "green",
    },

});