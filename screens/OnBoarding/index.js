import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import cstyles from '../../constants/cstyles';
import styles from './style';

import AppIntroSlider from 'react-native-app-intro-slider';


const data = [
    {
        text: 'Explore your World',
        image: require('./../../assets/images/intro/img-1.png'),
        bgColor: "#FF9768"
    },
    {
        text: 'Manage your Tasks',
        image: require('./../../assets/images/intro/img-2.png'),
        bgColor: "#FA97AC"
    },
    // {
    //     text: 'This photo is of Iceland.\nBy @r3dmax',
    //     image: require('../../assets/img-3.jpg'),
    // },
];

export default class OnBoarding extends React.Component {
    _renderItem = ({ item }) => {
        return (
            <View style={[{ backgroundColor: item.bgColor }, styles.itemContainer]}>
                <View style={styles.logoContainer}>

                    <Image style={styles.logo} source={require("../../assets/images/logo_text.png")} />
                </View>
                <Image style={[styles.slide,]} source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    _keyExtractor = (item) => item.text;
    render() {
        const { navigation } = this.props;
        return (
            <AppIntroSlider
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                onDone={() => {navigation.navigate("Register") }}
                data={data}
            />

        );
    }
}


