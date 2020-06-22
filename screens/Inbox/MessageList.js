import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import DefaultImage from '../../assets/images/profile.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
function MessagesList({ image, name, message, time }) {
	return (
		<TouchableOpacity onPress={() => console.log('yes')}>
			<List style={styles.listContainer}>
				<ListItem avatar style={styles.noBorder}>
					<Left>
						<Thumbnail
							style={styles.image}
							source={{
								uri:
									'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg'
							}}
						/>
					</Left>
					<Body style={styles.noBorder}>
						<Text style={styles.messageHeader}>{name || 'Kumar Pratik'}</Text>
						<Text note style={styles.message}>
							{message || 'Doing what you like will always keep you happy . .'}
						</Text>
					</Body>
					<Right style={styles.noBorder}>
						<Text note style={styles.message}>
							{time || '3:43 pm'}
						</Text>
					</Right>
				</ListItem>
			</List>
		</TouchableOpacity>
	);
}

export default MessagesList;

const styles = StyleSheet.create({
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
	message: {
		fontWeight: 'bold',
		fontSize: 10
	},
	noBorder: {
		borderBottomWidth: 0,
		borderBottomColor: 'white'
	}
});
