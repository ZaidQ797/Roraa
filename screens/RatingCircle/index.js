import React, { useState, Fragment } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Header, Left, Body } from 'native-base';
import cstyles from '../../constants/cstyles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function RatingCirle() {
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</Left>
					<Body>
						<Text style={styles.mainText}>Rating</Text>
					</Body>
				</Header>

				<ScrollView style={[ cstyles.container, cstyles.padder, { paddingTop: 5 } ]}>
					<View style={[ cstyles.flexCenter, cstyles.itemsCenter ]}>
						<View style={[ styles.circle ]}>
							<Text style={styles.innerText}>65 %</Text>
						</View>
					</View>
					<View style={cstyles.my_20}>
						<Text style={styles.font_20}>Sub-Evaluation</Text>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen, cstyles.my_20 ]}>
							<View style={cstyles.itemsCenter}>
								<View style={[ styles.sm_circle50 ]}>
									<Text style={styles.innerText2}>45 %</Text>
								</View>
								<Text style={[ styles.lowerText, cstyles.mt_10 ]}>Personal Branding</Text>
							</View>
							<View style={cstyles.itemsCenter}>
								<View style={[ styles.sm_circle25 ]}>
									<Text style={styles.innerText2}>25 %</Text>
								</View>
								<Text style={[ styles.lowerText, cstyles.mt_10 ]}>Activity and Interaction</Text>
							</View>
							<View style={cstyles.itemsCenter}>
								<View style={[ styles.sm_circle75 ]}>
									<Text style={styles.innerText2}>75 %</Text>
								</View>
								<Text style={[ styles.lowerText, cstyles.mt_10 ]}>Content Quality</Text>
							</View>
						</View>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen, cstyles.my_20 ]}>
							<View style={cstyles.itemsCenter}>
								<View style={[ styles.sm_circle ]}>
									<Text style={styles.innerText2}>100 %</Text>
								</View>
								<Text style={[ styles.lowerText, cstyles.mt_10 ]}>World</Text>
							</View>
							<View style={cstyles.itemsCenter}>
								<View style={[ styles.sm_circle75 ]}>
									<Text style={styles.innerText2}>80 %</Text>
								</View>
								<Text style={[ styles.lowerText, cstyles.mt_10 ]}>World</Text>
							</View>
							<View style={cstyles.itemsCenter}>
								<View style={[ styles.sm_circle25 ]}>
									<Text style={styles.innerText2}>20 %</Text>
								</View>
								<Text style={[ styles.lowerText, cstyles.mt_10 ]}>Trustworthy</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default RatingCirle;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	circle: {
		width: 200,
		height: 200,
		borderWidth: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		borderRightColor: '#fe6b6c',
		borderBottomColor: '#fe6b6c',
		borderLeftColor: '#fe6b6c',
		borderTopColor: '#f5f5f5'
	},
	sm_circle: {
		width: 80,
		height: 80,
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
		borderColor: '#fb7576'
	},
	sm_circle75: {
		width: 80,
		height: 80,
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
		borderRightColor: '#fb7576',
		borderBottomColor: '#fb7576',
		borderLeftColor: '#fb7576',
		borderTopColor: '#f5f5f5'
	},
	sm_circle50: {
		width: 80,
		height: 80,
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
		borderRightColor: '#fb7576',
		borderBottomColor: '#fb7576',
		borderLeftColor: '#f5f5f5',
		borderTopColor: '#f5f5f5'
	},
	sm_circle25: {
		width: 80,
		height: 80,
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
		borderRightColor: '#fb7576',
		borderBottomColor: '#f5f5f5',
		borderLeftColor: '#f5f5f5',
		borderTopColor: '#f5f5f5'
	},
	lowerText: {
		fontSize: 12,
		color: 'grey',
		fontWeight: 'bold'
	},
	innerText: {
		fontSize: 35,
		fontWeight: 'bold'
	},
	innerText2: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	font_20: {
		fontSize: 20,
		fontWeight: '100',
		color: 'grey'
	}
});
