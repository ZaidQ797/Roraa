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
    container: {
        marginTop: 30
    },

    activeText: {
        color: Colors.secondryGradient,
        fontSize: 16,
        fontWeight: 'bold',
    },
    inActiveText: {
        color: "black",
        fontSize: 16,
        fontWeight: 'bold',

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
        top: Layout.window.height / 22,
        // paddingBottom: 20
        // backgroundColor: "green",
    },

});