import React, { Fragment, useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Icon, Item, Input, Right } from 'native-base';
import cstyles from '../../constants/cstyles';
import { Entypo, AntDesign, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

function AddGoal({ navigation }) {
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Entypo name="chevron-small-left" size={24} color="black" />
						</TouchableOpacity>
					</Left>
					<Body>
						<Text style={styles.mainText}>New World</Text>
					</Body>
				</Header>
				<ScrollView style={[ cstyles.container, cstyles.padder ]}>
					<View style={cstyles.container}>
						<Item rounded style={[ styles.boxShadow, styles.inputText, cstyles.my_15 ]}>
							<EvilIcons name="search" size={18} color="grey" />
							<Input placeholder="select or create" />
						</Item>
						<TouchableOpacity>
							<View
								style={[ styles.photoContainer, cstyles.selfCenter, styles.boxShadow, cstyles.my_10 ]}
							>
								<AntDesign name="upload" size={24} color="grey" />
								<Text style={styles.textStyle}>Upload Photo</Text>
							</View>
						</TouchableOpacity>
						<Item style={[ styles.boxShadow, styles.input, cstyles.my_10 ]}>
							<MaterialCommunityIcons name="arch" size={20} color="#f5656b" />
							<Input multiline placeholder="write something" />
						</Item>
						<View style={(cstyles.my_20, { marginBottom: 30 })}>
							<TouchableOpacity style={styles.buttonStyle}>
								<Text style={styles.butnText}>Done</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default AddGoal;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '800',
		marginHorizontal: 10,
		paddingBottom: 5
	},
	activeButton: {
		color: '#f5656b',
		borderBottomWidth: 4,
		borderRadius: 50,
		borderBottomColor: '#f5656b'
	},
	photoContainer: {
		width: '98%',
		height: 210,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f9f9f9'
	},
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 3
	},
	textStyle: {
		color: 'grey',
		fontSize: 17
	},
	inputText: {
		borderRadius: 40,
		height: 40,
		paddingLeft: 25,
		width: '98%',
		elevation: 1.5,
		backgroundColor: '#f9f9f9'
	},
	input: {
		borderRadius: 10,
		height: 110,
		paddingLeft: 20,
		paddingTop: 20,
		elevation: 2,
		backgroundColor: '#f9f9f9'
	},
	buttonStyle: {
		width: '60%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#f4636a',
		alignSelf: 'center'
	},
	butnText: {
		fontSize: 19,
		color: 'white',
		textTransform: 'uppercase'
	}
});
