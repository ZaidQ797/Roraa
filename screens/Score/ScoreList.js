import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import DefaultImage from '../../assets/images/profile.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
function ScoreList({ image, name, score }) {
	return (
		<TouchableOpacity onPress={() => console.log('yes')}>
			<View style={styles.listContainer}>
				<Image style={styles.image} />
				<Text style={styles.textStyle}>{name || 'Some Name'}</Text>
				<Text style={styles.scoreText}>{score || '100%'}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default ScoreList;

const styles = StyleSheet.create({
	listContainer: {
		position: 'relative',
		width: '93%',
		alignSelf: 'center',
		backgroundColor: 'white',
		borderRadius: 20,
		marginBottom: 5,
		flex: 1,
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 4,
		marginVertical: 10,
		minHeight: 70
	},
	image: {
		width: 55,
		height: 55,
		marginBottom: 12,
		borderRadius: 40,
		position: 'absolute',
		left: -8,
		top: 7,
		backgroundColor: '#e98180'
	},
	textStyle: {
		fontSize: 17,
		marginLeft: 62,
		paddingTop: 8
	},
	scoreText: {
		fontSize: 17,
		fontWeight: 'bold',
		position: 'absolute',
		right: 20,
		bottom: 10
	}
});
