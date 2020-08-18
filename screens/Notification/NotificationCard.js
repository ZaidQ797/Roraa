import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import cstyles from '../../constants/cstyles';
import Colors from '../../constants/Colors';
import config from '../../_config';

function NotificationCard({ image, name, time, type, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<List style={[cstyles.container]}>
				<ListItem avatar style={[styles.noBorder]}>
					<Left>
						<Thumbnail
							style={styles.image}
							source={{ uri: `${config.imageUrl}/${image}` }}
						/>
					</Left>
					<Body style={styles.noBorder}>
						<Text style={styles.messageHeader}>
							{name || 'Kumar Pratik '}
							<Text note style={styles.message}>
								{type === 'location' ? (
									` is in Los Angeles`
								) : type === 'download' ? (
									` downloading`
								) : (
											` like your image`
										)}
							</Text>
						</Text>

						<Text note style={styles.message}>
							{time || '25 min ago'}
						</Text>
					</Body>
					{type !== 'regular' && <LinearGradient
						colors={[Colors.primaryGradient, Colors.secondryGradient]}
						start={[0.1, 0.1]}
						end={[0.5, 0.5]}
						style={styles.rightIcon}
					>
						<Right style={[styles.noBorder]}>
							{type === 'location' ?
								(
									<EvilIcons name="location" size={24} color="white" />
								) : type === 'download' ? (
									<AntDesign name="download" size={24} color="white" />
								) : (
										<EvilIcons name="heart" size={24} color="white" />
									)
							}
						</Right>
					</LinearGradient>}
				</ListItem>
			</List>
		</TouchableOpacity>
	);
}

export default NotificationCard;

const styles = StyleSheet.create({
	image: {
		marginBottom: 12,
		borderColor: 'black',
		borderWidth: 1
	},

	messageHeader: {
		fontWeight: '600',
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
	},
	rightIcon: {
		width: 70,
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderTopLeftRadius: 35,
		borderBottomLeftRadius: 35,
	}
});
