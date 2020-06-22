import React, { Fragment, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Header, Left, Body, List, ListItem, View } from 'native-base';
import cstyles from '../../constants/cstyles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function Visitors() {
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</Left>
					<Body>
						<Text style={styles.mainText}>Settings</Text>
					</Body>
				</Header>
				<ScrollView style={cstyles.container}>
					<List style={cstyles.mt_25}>
						<ListItem style={styles.noBorder}>
							<Text style={[ styles.textStyle, styles.colorGrey ]}>Account</Text>
						</ListItem>
						<ListItem style={styles.noBorder}>
							<Text style={styles.textStyle}>Edit your account</Text>
						</ListItem>
						<ListItem style={styles.noBorder}>
							<Text style={[ styles.textStyle, styles.colorGrey ]}>Help & Support</Text>
						</ListItem>
						<ListItem style={styles.noBorder}>
							<Text style={styles.textStyle}>Rating guideline</Text>
						</ListItem>
						<ListItem style={styles.noBorder}>
							<Text style={styles.textStyle}>Roraa gold</Text>
						</ListItem>
						<ListItem style={styles.noBorder}>
							<Text style={styles.textStyle}>Privacy policy</Text>
						</ListItem>
						<ListItem style={styles.noBorder}>
							<Text style={styles.textStyle}>Terms and condition</Text>
						</ListItem>
						<ListItem style={[ styles.noBorder ]}>
							<Text style={styles.textStyle}>EULA agreement</Text>
						</ListItem>
						<View style={[ styles.divider ]} />
						<ListItem style={[ styles.noBorder ]}>
							<Text style={[ styles.textStyle, styles.colorGrey ]}>Logout</Text>
						</ListItem>
						<ListItem style={[ styles.noBorder ]}>
							<Text style={[ styles.textStyle, styles.colorRed ]}>Delete your account</Text>
						</ListItem>
					</List>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default Visitors;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 17,
		fontWeight: 'bold'
	},
	textStyle: {
		fontSize: 18
	},
	noBorder: {
		borderBottomWidth: 0
	},
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: 'lightgrey',
		marginVertical: 30
	},
	colorRed: {
		color: '#ff726f'
	},
	colorGrey: {
		color: 'grey'
	}
});
