import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import cstyles from '../../constants/cstyles';

function InfluanceBoard() {
	return (
		<View style={[ cstyles.my_20, cstyles.padder, cstyles.boxShadow, styles.br_10 ]}>
			<View>
				<Text style={styles.font_20}>Influance Board</Text>
			</View>
			<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsEnd, cstyles.my_15 ]}>
				<View style={cstyles.itemsCenter}>
					<View style={[ styles.circle ]}>
						<Text style={styles.innerText}>65 %</Text>
					</View>
					<Text style={styles.lowerText}>Overall</Text>
				</View>
				<View style={cstyles.itemsCenter}>
					<View style={[ styles.sm_circle ]}>
						<Text style={styles.innerText2}>75 %</Text>
					</View>
					<Text style={styles.lowerText}>Personal branding</Text>
				</View>
			</View>
			<View style={[ cstyles.row, cstyles.flexEnd, cstyles.itemsEnd, cstyles.my_15 ]}>
				<View style={cstyles.itemsCenter}>
					<View style={[ styles.sm_circle50 ]}>
						<Text style={styles.innerText2}>50 %</Text>
					</View>
					<Text style={styles.lowerText}>behaviour</Text>
				</View>
				<View style={cstyles.itemsCenter}>
					<View style={[ styles.sm_circle50 ]}>
						<Text style={styles.innerText2}>50 %</Text>
					</View>
					<Text style={styles.lowerText}>Activity, interaction</Text>
				</View>
			</View>
			<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsEnd, cstyles.my_15 ]}>
				<View style={cstyles.itemsCenter}>
					<View style={[ styles.sm_circle50 ]}>
						<Text style={styles.innerText2}>50 %</Text>
					</View>
					<Text style={styles.lowerText}>content quality</Text>
				</View>
				<View style={cstyles.itemsCenter}>
					<View style={[ styles.sm_circle50 ]}>
						<Text style={styles.innerText2}>50 %</Text>
					</View>
					<Text style={styles.lowerText}>World</Text>
				</View>
				<View style={cstyles.itemsCenter}>
					<View style={[ styles.sm_circle50 ]}>
						<Text style={styles.innerText2}>50 %</Text>
					</View>
					<Text style={styles.lowerText}>Trustworthy</Text>
				</View>
			</View>
		</View>
	);
}

export default InfluanceBoard;

const styles = StyleSheet.create({
	circle: {
		width: 140,
		height: 140,
		borderWidth: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 70,
		borderRightColor: '#56adef',
		borderBottomColor: '#56adef',
		borderLeftColor: '#56adef',
		borderTopColor: '#f5f5f5'
	},
	sm_circle: {
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
	lowerText: {
		fontSize: 12,
		color: 'grey',
		fontWeight: '100'
	},
	innerText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	innerText2: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	font_20: {
		fontSize: 20,
		fontWeight: '100'
	},
	br_10: {
		borderRadius: 10
	}
});
