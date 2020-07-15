import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

export default StyleSheet.create({
	flexRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	mainText: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	subtitle: {
		fontWeight: 'bold',
		marginTop: 7,
		fontSize: 12
	},
	avatarList: {
		paddingLeft: 20
	},
	input: {
		flex: 1,
		backgroundColor: 'white',
		height: 40,
		paddingHorizontal: 10,
	},
	HeaderIcon: {
		marginLeft: 20
	},
	padding: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	listContainer: {
		backgroundColor: 'white',
		borderRadius: 5,
		marginBottom: 5
	},
	image: {
		marginBottom: 12,
		borderColor: 'black',
		borderWidth: 1
	},

	messageHeader: {
		fontWeight: 'bold',
		fontSize: 15
	},
	ListMessage: {
		fontWeight: 'bold',
		fontSize: 10
	},
	noBorder: {
		borderBottomWidth: 0,
		borderBottomColor: 'white'
	},
	relative: {
		position: 'relative'
	},
	greenDot: {
		zIndex: 100,
		width: 6,
		height: 6,
		backgroundColor: 'green',
		borderRadius: 100,
		position: 'absolute',
		top: '8%',
		right: '18%'
	},
	greyDot: {
		zIndex: 100,
		width: 6,
		height: 6,
		backgroundColor: 'grey',
		borderRadius: 100,
		position: 'absolute',
		top: '8%',
		right: '18%'
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 5
	},
	divider: {
		flex: 1,
		height: 1,
		backgroundColor: Colors.gray,
		marginHorizontal: 10
	},
	dividerText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: Colors.gray
	},
	message: {
		flex: 1,
		marginLeft: 10,
		padding: 10,
		backgroundColor: 'white',
		fontSize: 14,
		color: 'gray',
		minHeight: 50,
		borderRadius: 10
	},
	sMessage: {
		flex: 1,
		marginRight: 10,
		padding: 10,
		backgroundColor: Colors.secondryGradient,
		fontSize: 14,
		color: 'white',
		minHeight: 50,
		borderRadius: 10
	},
	hideTime: {
		display: 'none'
	},
	messageFooter: {
		padding: 10,
		height: 75,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
	},
	sentButton: {
		height: 35,
		width: 35,
		borderRadius: 18,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.dark
	},
	headerButn: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderBottomColor: Colors.lightGray,
		borderBottomWidth: 2
	},
	headerButnText: {
		fontSize: 16,
		fontWeight: 'bold',
		lineHeight: 40
	},
	circle: {
		width: 130,
		height: 130,
		borderWidth: 8,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 65,
		borderRightColor: Colors.secondryGradient,
		borderBottomColor: '#f5d7db',
		borderLeftColor: '#f5d7db',
		borderTopColor: '#f5d7db'
	},
	circleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: Colors.secondryGradient
	},
	subtitle1: {
		fontSize: 17,
		color: Colors.gray,
		fontWeight: '600'
	},
	subtitle2: {
		fontSize: 16,
		color: Colors.gray
	},
	box: {
		width: '100%',
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: Colors.gray,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 5,
		minHeight: 100
	},
	boxText: {
		fontSize: 22,
		fontWeight: '600'
	},
	boxTextGray: {
		fontSize: 12,
		color: Colors.gray
	}
});
