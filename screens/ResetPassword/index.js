import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import cstyles from '../../constants/cstyles';
import styles from './style';
import appjson from '../../app.json';
import InputUnderLineIcon from '../../components/InputUnderLineIcon';
import ButtonGradient from '../../components/ButtonGradient';

function ResetPassword({ navigation }) {
	return (
		<View style={[ cstyles.container, cstyles.center ]}>
			{/* // Background Linear Gradient */}
			<View style={[ styles.topContainer ]}>
				<View style={cstyles.center}>
					<Image source={require('./../../assets/images/logo_fill.png')} style={cstyles.imageMediumLogo} />
					<Text style={cstyles.titlePrimaryText}>{appjson.expo.name}</Text>
					<Text style={cstyles.sloganPriamryText}>{appjson.slogan}</Text>
					<Text style={styles.subtitle}>Reset Password</Text>
				</View>

				<View style={[ cstyles.center, styles.bottomFooterRelative ]}>
					<View style={cstyles.padder}>
						<InputUnderLineIcon placeholder="New Password" icon="lock" secureTextEntry={true} />
						<InputUnderLineIcon placeholder="Old Password" icon="lock" secureTextEntry={true} />
						<InputUnderLineIcon placeholder="Confirm Password" icon="lock" secureTextEntry={true} />
						<ButtonGradient text="Next" style={{ marginTop: 20 }} />
					</View>
				</View>
			</View>
		</View>
	);
}

export default ResetPassword;
