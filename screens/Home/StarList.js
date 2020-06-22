import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import DefaultImage from '../../assets/images/profile.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';

function StarList({ index, image, name, userName, percent }) {
	return (
		<TouchableOpacity onPress={() => console.log('yes')}>
			<List style={styles.listContainer}>
				<ListItem avatar style={styles.noBorder}>
					<Left>
						<Text style={[ styles.number, styles.secondryColor, cstyles.mr_20 ]}>{index + 3}</Text>
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
					<Right style={[ styles.noBorder, cstyles.selfCenter ]}>
						<Text note style={[ styles.message ]}>
							{percent || '60%'}
						</Text>
					</Right>
				</ListItem>
			</List>
		</TouchableOpacity>
	);
}

export default StarList;

const styles = StyleSheet.create({
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
	secondryColor: {
		color: '#C41851'
	},
	number: {
		fontSize: 18
	}
});
