import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';
import Layout from './Layout';

export default StyleSheet.create({
	container: {
		flex: 1
	},
	itemsCenter: {
		alignItems: 'center'
	},
	flexCenter: {
		justifyContent: 'center'
	},
	itemsEnd: {
		alignItems: 'flex-end'
	},
	boxShadow: {
		shadowColor: '#f5f5f5',
		shadowOffset: {
			width: 1,
			height: 2
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 2,
		zIndex: 999,
		backgroundColor : "#0000"
	},
	flexWrap: {
		flexWrap: 'wrap'
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentContainer: {
		paddingTop: 30
	},
	padder: {
		padding: 20
	},
	bg_white: {
		backgroundColor: 'white'
	},
	pt_30: {
		paddingTop: 30
	},
	pt_15: {
		paddingTop: 15
	},
	pl_15: {
		paddingLeft: 15
	},
	pr_15: {
		paddingRight: 15
	},
	pb_15: {
		paddingBottom: 15
	},
	px_5: {
		paddingRight: 5,
		paddingLeft: 5
	},
	px_10: {
		paddingHorizontal: 10
	},
	px_15: {
		paddingHorizontal: 15
	},
	px_20: {
		paddingHorizontal: 20
	},
	py_10: {
		paddingTop: 10,
		paddingBottom: 10
	},
	py_20: {
		paddingTop: 20,
		paddingBottom: 20
	},
	mt_25: {
		marginTop: 25
	},
	mt_10: {
		marginTop: 10
	},
	mt_15: {
		marginTop: 15
	},
	ml_15: {
		marginLeft: 15
	},
	ml_5: {
		marginLeft: 5
	},
	mr_15: {
		marginRight: 15
	},
	mx_15: {
		marginLeft: 15,
		marginRight: 15
	},
	my_15: {
		marginTop: 15,
		marginBottom: 15
	},
	my_25: {
		marginVertical: 25
	},
	my_5: {
		marginVertical: 5
	},
	ml_10: {
		marginLeft: 10
	},
	mr_10: {
		marginRight: 10
	},
	mb_10: {
		marginBottom: 10
	},
	mb_15: {
		marginBottom: 15
	},
	mb_20: {
		marginBottom: 20
	},
	mx_5: {
		marginHorizontal: 5
	},
	mx_10: {
		marginLeft: 10,
		marginRight: 10
	},
	my_10: {
		marginTop: 10,
		marginBottom: 10
	},
	ml_20: {
		marginLeft: 20
	},
	mr_20: {
		marginRight: 20
	},
	mx_20: {
		marginLeft: 20,
		marginRight: 20
	},
	my_20: {
		marginTop: 20,
		marginBottom: 20
	},
	row: {
		flexDirection: 'row'
	},
	selfCenter: {
		alignSelf: 'center'
	},
	flexBetweeen: {
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	flexEnd: {
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	imageLogo: {
		height: Layout.window.height / 5,
		width: Layout.window.width / 2,
		resizeMode: 'contain'
	},
	imageMediumLogo: {
		height: Layout.window.height / 6,
		width: Layout.window.width / 2,
		resizeMode: 'contain'
	},
	titleText: {
		color: Colors.bright,
		fontSize: 20,
		fontWeight: '700'
	},
	titlePrimaryText: {
		color: Colors.primaryColor,
		fontSize: 20,
		fontWeight: '700'
	},
	sloganText: {
		color: Colors.bright,
		fontSize: 10,
		letterSpacing: 5
		// fontWeight: "700"
	},
	sloganPriamryText: {
		color: Colors.primaryColor,
		fontSize: 10,
		letterSpacing: 5
		// fontWeight: "700"
	},

	bottomFooter: {
		// height: 100,
		position: 'absolute',
		bottom: 0,
		paddingBottom: 20
		// backgroundColor: "green",
	},
	button: {
		width: Layout.window.width / 1.3,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center'
	},
	roundEdgeButton: {
		backgroundColor: 'white',
		width: Layout.window.width / 1.3,
		borderRadius: 10
	},
	buttonText: {
		fontSize: 12,
		fontWeight: 'bold'
	},
	linkText: {
		fontSize: 13,
		color: Colors.bright,
		fontWeight: 'bold'
	},
	linkDarkText: {
		fontSize: 13,
		color: Colors.dark,
		fontWeight: 'bold'
	},
	inputUnderLineContainer: {
		// flex: 1,
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		paddingBottom: 3,
		borderBottomColor: Colors.gray,
		borderBottomWidth: 0.3
	},
	pickerUnderLineContainer: {
		// flex: 1,
		height: 35,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
		paddingBottom: 3,
		borderBottomColor: Colors.gray,
		borderBottomWidth: 0.3
	},
	inputUnderLineIconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5
	},
	inputUnderLineIcon: {
		fontSize: 14,
		color: Colors.gray
	},
	inputUnderLineINPUT: {
		width: Layout.window.width - 80
		// backgroundColor: "red"
	},
	gradientButton: {
		padding: 10,
		alignItems: 'center',
		borderRadius: 12
	},
	gradientButtonText: {
		backgroundColor: 'transparent',
		fontSize: 14,
		fontWeight: '700',
		color: '#fff'
	},
	testBorder: {
		borderWidth: 1,
		borderColor: 'red'
	},
	userContainer: {
		width: 25,
		height: 25,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#e98180'
	}
});
