import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import cstyles from '../../constants/cstyles';
import ButtonGradient from '../../components/ButtonGradient';

function Phone({ navigation }) {
	return (
		<SafeAreaView style={cstyles.container}>
			<Text style={styles.title}>Enter your Phone Number!</Text>
			<Text style={[ styles.subtitle ]}>
				Tap Next to recieve an SMS confirmation from Account kit powered bt Facebook. Roraa uses Facebbok
				technology to help you sign in, but you don't need a Facebook account, Message and data rates may apply.
			</Text>
			<ButtonGradient text="NEXT" style={[ cstyles.padder, { marginTop: 20 } ]} />
		</SafeAreaView>
	);
}

export default Phone;

const styles = StyleSheet.create({
	title: {
		paddingTop: 50,
		color: '#000',
		fontSize: 25,
		fontWeight: '700',
		textAlign: 'center'
	},
	subtitle: {
		fontWeight: '100',
		paddingHorizontal: 50,
		paddingVertical: 20,
		textAlign: 'center',
		fontWeight: '600',
		lineHeight: 20
	}
});
