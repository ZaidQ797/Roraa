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
import Validator from '../../_helpers/validator';

const validationRules = {
	name: {
		presence: { message: '^Please enter a name' },
		format: { pattern: "^[a-zA-Z ]{3,50}$", message: "^Please enter valid name" }
	},
	email: {
		presence: { message: '^Please enter an email address' },
		email: { message: '^Please enter a valid email address' }
	},
	password: {
		presence: { message: '^Please enter a password' },
		format: { pattern: "^.{6,16}$", message: "^Password must be at least 6 characters." }
	}

}
export default class Personal extends React.Component {
	validator = new Validator();
	state = {
		name: "",
		nameError: null,
		username: "",
		usernameError: null,
		email: "",
		emailError: null,
		phoneNo: "",
		phoneNoError: null,
		password: "",
		passwordError: null,
		confirmPassword: "",
		confirmPasswordError: null,
		role: "Personal",
		agree: false,
		over18: false,
		formError: null,
		isFormBusy: false,
		modalShow: false,
		successResponse: null
	}

	handleValidationChange(name, value) {
		this.setState({ [name]: value, [name + "Error"]: this.validator.single(name, value, validationRules) });
	}

	render() {
		const { navigation, onSubmit, isFormBusy, formError } = this.props;
		return (
			<ScrollView>
				<View style={[cstyles.container, cstyles.padder, cstyles.itemsCenter, { paddingBottom: 50 }]}>
					{/* // Background Linear Gradient */}

					<View style={[styles.topContainer]}>
						<View style={cstyles.center}>
							<Image
								source={require('./../../assets/images/logo_fill.png')}
								style={cstyles.imageMediumLogo}
							/>
							<Text style={cstyles.titlePrimaryText}>{appjson.expo.name}</Text>
							<Text style={cstyles.sloganPriamryText}>{appjson.slogan}</Text>
							<Text style={styles.subtitle}>Let's start with register!</Text>
						</View>

						<View style={[cstyles.center, styles.bottomFooterRelative]}>
							<View style={cstyles.padder}>
								<InputUnderLineIcon placeholder="Name" icon="account"
									value={this.state.name}
									onChangeText={(value) => this.handleValidationChange("name", value)}
								/>
								{this.state.nameError && <Text style={cstyles.errorText}>{this.state.nameError}</Text>}

								<InputUnderLineIcon placeholder="Email" icon="email"
									value={this.state.email} autoCapitalize="none"
									onChangeText={(value) => this.handleValidationChange("email", value)}
								/>
								{this.state.emailError && <Text style={cstyles.errorText}>{this.state.emailError}</Text>}

								<InputUnderLineIcon placeholder="Password" icon="lock" secureTextEntry={true}
									value={this.state.password}
									onChangeText={(value) => this.handleValidationChange("password", value)}
								/>
								{this.state.passwordError && <Text style={cstyles.errorText}>{this.state.passwordError}</Text>}

								<InputUnderLineIcon placeholder="Confirm Password" icon="lock" secureTextEntry={true}
									value={this.state.confirmPassword}
									onChangeText={(value) => this.handleValidationChange("confirmPassword", value)} />
								{this.state.confirmPasswordError && <Text style={cstyles.errorText}>{this.state.confirmPasswordError}</Text>}

								{formError && <Text style={[cstyles.errorText, { marginTop: 10, marginBottom: -10 }]}>{formError}</Text>}

								<ButtonGradient
									text={isFormBusy ? "PLEASE WAIT..." : "REGISTER"}
									style={{ marginTop: 20 }}
									onPress={() => onSubmit && onSubmit(this.state, validationRules)}
								/>
							</View>
							<TouchableOpacity
								style={[cstyles.row]}
								onPress={() => navigation.navigate('Login')}
							>
								<Text style={cstyles.linkDarkText}>Already have an account?</Text>
								<Text style={[cstyles.linkDarkText, { color: Colors.primaryColor }]}> Login</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}


