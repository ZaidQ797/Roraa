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
import PickerUnderLineIcon from '../../components/PickerUnderLineIcon';
import ButtonGradient from '../../components/ButtonGradient';

export default class Business extends React.Component {
	render() {
		const { navigation } = this.props;
		return (
			<ScrollView style={styles.container}>
			<View style={[ cstyles.container, cstyles.center, cstyles.padder, { paddingBottom: 50 } ]}>
				{/* // Background Linear Gradient */}
				<View style={[ styles.topContainer ]}>
					<View style={cstyles.center}>
						<Image
							source={require('./../../assets/images/logo_fill.png')}
							style={cstyles.imageMediumLogo}
						/>
						<Text style={cstyles.titlePrimaryText}>{appjson.expo.name}</Text>
						<Text style={cstyles.sloganPriamryText}>{appjson.slogan}</Text>
						<Text style={styles.subtitle}>Let's start with register!</Text>
					</View>

					<View style={[ cstyles.center, styles.bottomFooterRelative ]}>
						<View style={cstyles.padder}>
							<InputUnderLineIcon placeholder="Name" icon="account" />
							<InputUnderLineIcon placeholder="Email" icon="email" />
							<InputUnderLineIcon placeholder="Password" icon="lock" secureTextEntry={true} />
							<InputUnderLineIcon placeholder="Confirm Password" icon="lock" secureTextEntry={true} />
							<InputUnderLineIcon placeholder="Category & Market" icon="certificate" />
							<PickerUnderLineIcon
								placeholder="Business Size"
								icon="business-center"
								pickerItems={[ 'Small', 'Medium', 'Enterprise' ]}
							/>
							<ButtonGradient
								text="REGISTER"
								style={{ marginTop: 20 }}
								onPress={() => navigation.navigate('Phone')}
							/>
						</View>
						<TouchableOpacity
							style={[ cstyles.row ]}
							onPress={() => navigation.navigate('Login')}
						>
							<Text style={cstyles.linkDarkText}>Already have an account?</Text>
							<Text style={[ cstyles.linkDarkText, { color: Colors.primaryColor } ]}> Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			</ScrollView>
		);
	}
}
