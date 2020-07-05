import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
export default StyleSheet.create({
	mainText: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	smImg: {
		height: 80,
		width: '80%',
		borderRadius: 20
	},
	lgImg: {
		height: 90,
		width: 'auto',
		borderRadius: 20
	},
	secondryColor: {
		color: '#C41851'
	},
	number: {
		fontSize: 18
	},
	subTitle: {
		fontSize: 13,
		fontWeight: 'bold'
	},
	subTitle2: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	percent: {
		color: 'grey',
		fontWeight: 'bold'
	},
	grid: {
		backgroundColor: '#fbfcfe',
		borderRadius: 30
	},
	listContainer: {
		backgroundColor: 'white',
		borderRadius: 5
	},
	image: {
		marginBottom: 12,
		borderColor: 'black',
		borderWidth: 1
	},

	messageHeader: {
		fontWeight: 'bold',
		fontSize: 16
	},
	message: {
		fontWeight: 'bold',
		fontSize: 13
	},
	noBorder: {
		borderBottomWidth: 0,
		borderBottomColor: 'white'
	},
	borderBottom: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1
	},
	headerText: {
		fontSize: 19,
		fontWeight: 'bold',
		color: '#52514f'
	},
	headerButn: {
		backgroundColor: '#52514f',
		paddingVertical: 8,
		paddingHorizontal: 15,
		borderRadius: 40
	},
	butnText: {
		color: 'white'
	},
	tabText: {
		fontSize: 18,
		color: Colors.gray,
		lineHeight: 40
	},
	activeTab: {
		color: 'black',
		borderBottomWidth: 2,
		borderBottomColor: Colors.tintColor
	},
	inputText: {
		borderRadius: 40,
		height: 35,
		paddingLeft: 20,
		width: '98%',
		elevation: 1.5,
		backgroundColor: 'white'
	},
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 100,
		marginRight: 4
	},
	flexCol: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	cardTitle: {
		fontSize: 18,
		color: Colors.gray
	},
	storyText: {
		fontSize: 13,
		color: Colors.gray,
		paddingLeft: 20
	}
});
