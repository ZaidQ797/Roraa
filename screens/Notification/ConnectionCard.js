import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import config from '../../_config';

function ConnectionCard({ image, name, connection, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<List style={[styles.listContainer, cstyles.boxShadow]}>
				<ListItem avatar style={styles.noBorder}>
					<Left>
						<Thumbnail
							style={styles.image}
							source={{ uri: `${config.imageUrl}/${image}` }}
						/>
					</Left>
					<Body style={styles.noBorder}>
						<Text style={styles.messageHeader}>{name || 'Roraa User'}</Text>
						<Text note style={styles.message}>
							{connection || '0 Mutual Connections'}
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
