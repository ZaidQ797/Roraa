import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import Colors from '../../constants/Colors';

function RoraaGold({ navigation }) {
	return (
		<ScrollView style={[ cstyles.container, cstyles.padder ]}>
			<View style={[ styles.TopContainer, cstyles.row, cstyles.flexBetweeen ]}>
				<View style={[ cstyles.flexCenter, cstyles.px_20, { width: '50%' } ]}>
					<Text style={styles.boldText}>Joy</Text>
					<Text style={[ styles.regularText ]}>100 look up</Text>
					<Text style={[ styles.regularText ]}>unlimited view</Text>
					<Text style={styles.regularText}>100 score</Text>
				</View>
				<View style={[ cstyles.flexCenter, cstyles.px_20, { width: '50%' } ]}>
					<Text style={[ styles.inlineText ]}>26.99 $</Text>
					<Text style={styles.boldText}>20.99 $</Text>
					<Text style={styles.regularText}>/ month</Text>
				</View>
			</View>
			<TouchableOpacity
				style={[ Platform.OS === 'ios' ? styles.smBoxIos : styles.smBox, cstyles.row, styles.box_1, cstyles.boxShadow ]}
				onPress={() => navigation.navigate('Score')}
			>
				<View>
					<Text style={[ styles.heading ]}>Score</Text>
					<Text style={[ styles.regularText, { color: '#aaa' } ]}>looking at other people score</Text>
				</View>
				<View style={[ cstyles.container, cstyles.itemsEnd, cstyles.flexCenter ]}>
					<Text style={{ color: Colors.tintColor }}>99</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={[ Platform.OS === 'ios' ? styles.smBoxIos : styles.smBox, cstyles.row, styles.box_2, cstyles.boxShadow ]}
				onPress={() => navigation.navigate('Rating')}
			>
				<View>
					<Text style={[ styles.heading ]}>Rating</Text>
					<Text style={[ styles.regularText, { color: '#aaa' } ]}>looking at my rating profile</Text>
				</View>
				<View style={[ cstyles.container, cstyles.itemsEnd, cstyles.flexCenter ]}>
					<Text style={{ color: Colors.secondryGradient }}>56</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={[ Platform.OS === 'ios' ? styles.smBoxIos : styles.smBox, cstyles.row, styles.box_3, cstyles.boxShadow, { marginBottom: 50 } ]}
				onPress={() => navigation.navigate('Visitor')}
			>
				<View>
					<Text style={[ styles.heading ]}>Profile Visitors</Text>
					<Text style={[ styles.regularText, { color: '#aaa' } ]}>who view my profile</Text>
				</View>
				<View style={[ cstyles.container, cstyles.itemsEnd, cstyles.flexCenter ]}>
					<Text style={{ color: Colors.primaryGradient }}>unlimited</Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
	);
}

export default RoraaGold;

const styles = StyleSheet.create({
	TopContainer: {
		backgroundColor: Colors.tintColor,
		paddingVertical: 25,
		borderRadius: 30
	},
	boldText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white'
	},
	heading:{
		fontSize: 22,
		fontWeight: 'bold',
	},
	regularText: {
		color: 'white',
		marginTop: 5
	},
	inlineText: {
		color: 'white',
		fontSize: 20
	},
	smBox: {
		marginVertical: 10,
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	smBoxIos:{
		marginVertical: 10,
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: 20,
		borderWidth: 0.5,
		borderColor: "lightgray",
	},
	box_1: {
		borderRightWidth: 10,
		borderRightColor: Colors.tintColor
	},
	box_2: {
		borderRightWidth: 10,
		borderRightColor: Colors.secondryGradient
	},
	box_3: {
		borderRightWidth: 10,
		borderRightColor: Colors.primaryGradient
	}
});
