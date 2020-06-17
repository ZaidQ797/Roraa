import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import cstyles from '../../constants/cstyles';
import styles from './style';
import appjson from '../../app.json';
import InputUnderLineIcon from '../../components/InputUnderLineIcon';
import ButtonGradient from '../../components/ButtonGradient';



export default class Login extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={[cstyles.container, cstyles.center]}>
                {/* // Background Linear Gradient */}
                <View style={[styles.topContainer]}>
                    <View style={cstyles.center}>
                        <Image source={require("./../../assets/images/logo_fill.png")} style={cstyles.imageMediumLogo} />
                        <Text style={cstyles.titlePrimaryText}>{appjson.expo.name}</Text>
                        <Text style={cstyles.sloganPriamryText}>{appjson.slogan}</Text>
                        <Text style={styles.subtitle}>Let's start with Log in!</Text>
                    </View>


                    <View style={[cstyles.center, styles.bottomFooterRelative]} >
                        <View style={cstyles.padder}>
                            <InputUnderLineIcon placeholder="Email" icon="email" />
                            <InputUnderLineIcon placeholder="Password" icon="lock" secureTextEntry={true} />
                            <ButtonGradient text="LOG IN" style={{ marginTop: 20 }} />
                        </View>
                        <TouchableOpacity style={[cstyles.button, cstyles.row, { height: 10 }]} onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text style={cstyles.linkDarkText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[cstyles.button, cstyles.row, { height: 10, marginTop: 15 }]} onPress={() => navigation.navigate("Register")}>
                            <Text style={cstyles.linkDarkText}>You don't have an account?</Text>
                            <Text style={[cstyles.linkDarkText, { color: Colors.primaryColor }]}>{" "}Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                {/* <View style={cstyles.bottomFooter}>




                    <TouchableOpacity style={[cstyles.button, cstyles.roundEdgeButton]}
                        onPress={() => {
                            navigation.navigate("OnBoarding")
                        }}
                    >
                        <Text style={cstyles.buttonText}>GET STARTED</Text>
                    </TouchableOpacity>
                 
                </View> */}

            </View>
        );
    }
}


