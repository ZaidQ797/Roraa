import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';
import Layout from './Layout';

export default StyleSheet.create({
    container: {
        flex: 1,

    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    padder: {
        padding: 20
    },
    row: {
        flexDirection: "row"
    },
    imageLogo: {
        height: Layout.window.height / 5,
        width: Layout.window.width / 2,
        resizeMode: "contain"
    },
    imageMediumLogo: {
        height: Layout.window.height / 6,
        width: Layout.window.width / 2,
        resizeMode: "contain"
    },
    titleText: {
        color: Colors.bright,
        fontSize: 20,
        fontWeight: "700"
    },
    titlePrimaryText: {
        color: Colors.primaryColor,
        fontSize: 20,
        fontWeight: "700"
    },
    sloganText: {
        color: Colors.bright,
        fontSize: 10,
        letterSpacing: 5,
        // fontWeight: "700"
    },
    sloganPriamryText: {
        color: Colors.primaryColor,
        fontSize: 10,
        letterSpacing: 5,
        // fontWeight: "700"
    },
   
    bottomFooter: {
        // height: 100,  
        position: "absolute",
        bottom: 0,
        paddingBottom: 20
        // backgroundColor: "green",
    },
    button: {
        width: Layout.window.width / 1.3,
        height: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    roundEdgeButton: {
        backgroundColor: "white",
        width: Layout.window.width / 1.3,
        borderRadius: 10,

    },
    buttonText: {
        fontSize: 12,
        fontWeight: "bold"
    },
    linkText: {
        fontSize: 13,
        color: Colors.bright,
        fontWeight: "bold"
    },
    linkDarkText: {
        fontSize: 13,
        color: Colors.dark,
        fontWeight: "bold"
    },
    inputUnderLineContainer: {
        // flex: 1,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 3,
        borderBottomColor: Colors.gray,
        borderBottomWidth: 0.3
    },
    inputUnderLineIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    inputUnderLineIcon: {
        fontSize: 14,
        color: Colors.gray
    },
    inputUnderLineINPUT: {
        width: Layout.window.width - 80,
        // backgroundColor: "red"
    },
    gradientButton: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 12
    },
    gradientButtonText: {
        backgroundColor: 'transparent',
        fontSize: 14,
        fontWeight: "700",
        color: '#fff',
    }

});