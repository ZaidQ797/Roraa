import React, { useState, Component, useEffect } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import PersonalTab from './Personal';
import BusinessTab from './Business';
import cstyles from '../../constants/cstyles';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import styles from './style';
import Validator from '../../_helpers/validator';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/user.action';
import EmailVerificationModal from '../../components/EmailVerificationModal';

function Register(props) {
	const [activeTab, setActiveTab] = useState(0);
	const [personalFormBusy, setPersonalFormBusy] = useState(false);
	const [personalFormError, setPersonalFormError] = useState(null);
	const [businessFormBusy, setBusinessFormBusy] = useState(false);
	const [businessFormError, setBusinessFormError] = useState(null);
	const [successResponse, setSuccessResponse] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	useEffect(() => {
		console.log("useEffect");
	})
	const handleSubmit = (form, validationRules) => {
		//Validation Start
		validationRules = JSON.parse(JSON.stringify(validationRules));
		validationRules["confirmPassword"] = { equality: "password" };
		let validator = new Validator();
		if (form.role == "Personal") {
			if (personalFormBusy) { setPersonalFormError('*Please Wait..'); return; }

			setPersonalFormError(null); setPersonalFormBusy(true);
			if (validator.all(form, validationRules)) { setPersonalFormBusy(false); setPersonalFormError('*Fill all valid fields'); return; }

		} else {
			if (businessFormBusy) { setBusinessFormError('*Please Wait..'); return; }

			setBusinessFormError(null); setBusinessFormBusy(true);
			if (validator.all(form, validationRules)) { setBusinessFormBusy(false); setBusinessFormError('*Fill all valid fields'); return; }
		}
		//Validation End

		setSuccessResponse(null);
		props.dispatch(userActions.register(form)).then(res => {
			if (form.role == "Personal") { setPersonalFormBusy(false); } else { setBusinessFormBusy(false); }
			setSuccessResponse(res); setModalShow(true);

		}).catch(e => {
			let errorData = e.response ? e.response.data : { message: "An Error Occured!" };
			if (form.role == "Personal") {
				setPersonalFormBusy(false); setPersonalFormError(errorData.message)
			} else {
				setBusinessFormBusy(false); setBusinessFormError(errorData.message)
			}
		})
	}
	return (
		<SafeAreaView style={cstyles.container}>
			<Container style={styles.container}>
				<EmailVerificationModal
					// modalVisible={true}
					modalVisible={modalShow}
					data={successResponse}
					onLoginPress={() => {
						setModalShow(false);
						props.navigation.replace("Login")
					}}
					type='register-success'
				/>
				<Tabs
					tabBarUnderlineStyle={{ backgroundColor: Colors.secondryGradient, height: 1.5 }}
					onChangeTab={({ i }) => setActiveTab(i)}
				>
					<Tab
						heading={
							<TabHeading style={{ backgroundColor: '#fff', paddingTop: 10 }}>
								<Text style={[activeTab === 0 ? styles.activeText : styles.inActiveText]}>
									Personal
								</Text>
							</TabHeading>
						}
					>
						<PersonalTab {...props} onSubmit={handleSubmit} isFormBusy={personalFormBusy} formError={personalFormError} />
					</Tab>
					<Tab
						heading={
							<TabHeading style={{ backgroundColor: '#fff', paddingTop: 10 }}>
								<Text style={[activeTab === 1 ? styles.activeText : styles.inActiveText]}>
									Business
									</Text>
							</TabHeading>
						}
					>
						<BusinessTab {...props} onSubmit={handleSubmit} isFormBusy={businessFormBusy} formError={businessFormError}/>
					</Tab>
				</Tabs>
			</Container>
		</SafeAreaView>
	);
}
function mapStateToProps(state) {
	const { loggedIn, token, user } = state.authentication;
	return { loggedIn, token, user };
}

export default connect(mapStateToProps)(Register);

