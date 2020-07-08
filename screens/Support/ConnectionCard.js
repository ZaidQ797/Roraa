import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';

function ConnectionCard({ image, name, connection, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<List style={[ styles.listContainer, cstyles.boxShadow ]}>
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
							{connection || '7 Mutual Connections'}
						</Text>
					</Body>
				</ListItem>
			</List>
		</TouchableOpacity>
	);
}

export default ConnectionCard;

const styles = StyleSheet.create({
	listContainer: {
		backgroundColor: 'white',
		borderRadius: 5,
		marginBottom: 10,
		paddingVertical: 5
	},
	image: {
		marginBottom: 12,
		borderColor: 'black',
		borderWidth: 1
	},

	messageHeader: {
		fontWeight: '500',
		fontSize: 17
	},
	message: {
		fontWeight: '100',
		fontSize: 13,
		color: 'gray'
	},
	noBorder: {
		borderBottomWidth: 0,
		borderBottomColor: 'white'
	}
});
