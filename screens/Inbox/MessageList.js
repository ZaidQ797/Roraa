import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import config from '../../_config';

function MessagesList({ onPress, item }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<List style={styles.listContainer}>
				<ListItem avatar style={styles.noBorder}>
					<Left>
						<Thumbnail
							style={styles.image}
							source={{
								uri: `${config.imageUrl}/${item.dp}`
							}}
						/>
					</Left>
					<Body style={styles.noBorder}>
						<Text style={styles.messageHeader}>{item.fname}</Text>
						<Text note style={styles.ListMessage}>
							{item.content}
						</Text>
					</Body>
					<Right style={styles.noBorder}>
						<Text note style={[styles.message, { width: 100 }]}>
							{item.date}
						</Text>
					</Right>
				</ListItem>
			</List>
		</TouchableOpacity>
	);
}

export default MessagesList;
