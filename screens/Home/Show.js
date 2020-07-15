import React, { Fragment } from 'react';
import { Image, FlatList, TouchableOpacity } from 'react-native';
import { View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import cstyles from '../../constants/cstyles';

import { EvilIcons } from '@expo/vector-icons';

const dummyData = [
	{
		image: 'https://static.statusqueen.in/dpimages/thumbnail/dp_image31-761.jpg',
		profile:
			'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg',
		userName: 'Richard Murray',
		time: '16 min ago',
		views: '22.4k',
		like: '973',
		location: 'San Francisco, CA'
	},
	{
		image: 'https://static.statusqueen.in/dpimages/thumbnail/dp_image31-761.jpg',
		profile:
			'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg',
		userName: 'Richard Murray',
		time: '16 min ago',
		views: '102.4k',
		like: '973',
		location: 'San Francisco, CA'
	},
	{
		image: 'https://static.statusqueen.in/dpimages/thumbnail/dp_image31-761.jpg',
		profile:
			'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg',
		userName: 'Richard Murray',
		time: '16 min ago',
		views: '8.4k',
		like: '973',
		location: 'San Francisco, CA'
	}
];
function Show() {
	return (
		<Fragment>
			<FlatList
				data={dummyData}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.views}
				renderItem={({ item }) => (
					<Card style={[ { elevation: 3 }, cstyles.my_10 ]}>
						<CardItem>
							<Left>
								<Thumbnail small source={{ uri: item.profile }} />
								<Body>
									<Text>{item.userName}</Text>
									<Text style={styles.storyText}>{item.time}</Text>
								</Body>
							</Left>
							<TouchableOpacity>
								<EvilIcons name="heart" size={20} color="gray" />
							</TouchableOpacity>
						</CardItem>
						<CardItem cardBody>
							<Image style={{ height: 200, flex: 1 }} source={{ uri: item.image }} />
						</CardItem>
						<CardItem style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter ]}>
							<View style={[ cstyles.row, cstyles.itemsCenter ]}>
								<TouchableOpacity>
									<EvilIcons name="heart" size={20} color="gray" />
								</TouchableOpacity>
								<Text style={styles.storyText}>{item.like}</Text>
							</View>
							<View style={[ cstyles.row, cstyles.itemsCenter ]}>
								<TouchableOpacity>
									<EvilIcons name="eye" size={20} color="gray" />
								</TouchableOpacity>
								<Text style={styles.storyText}>{item.views}</Text>
							</View>
							<View style={[ cstyles.row, cstyles.itemsCenter ]}>
								<TouchableOpacity>
									<EvilIcons name="location" size={20} color="gray" />
								</TouchableOpacity>
								<Text style={styles.storyText}>{item.location}</Text>
							</View>
						</CardItem>
					</Card>
				)}
			/>
		</Fragment>
	);
}

export default Show;
