import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import styles from './styles';

function DiscoverList({ image, name, userName }) {
	return (
		<TouchableOpacity onPress={() => console.log('yes')}>
			<List style={styles.listContainer}>
				<ListItem avatar style={styles.noBorder}>
					<Left>
						<Thumbnail
							style={styles.image}
							source={{
								uri:
									'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							}}
						/>
					</Left>
					<Body style={styles.noBorder}>
						<Text style={styles.messageHeader}>{name || 'Kumar Pratik'}</Text>
						<Text note style={styles.message}>
							{userName || '@kumarPatric'}
						</Text>
					</Body>
				</ListItem>
			</List>
		</TouchableOpacity>
	);
}

export default DiscoverList;
