import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import cstyles from '../../constants/cstyles';
const dummyData = [
	{
		image: 'https://static.statusqueen.in/dpimages/thumbnail/dp_image31-761.jpg',
		profile:
			'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg',
		title: 'Title goes here',
		story: 'story goes here,...hey buddy',
		views: '120',
		userName: 'sultan'
	}
];
function World() {
	return (
		<Container style={cstyles.mt_15}>
			<View>
				<DeckSwiper
					dataSource={dummyData}
					renderItem={(item) => (
						<Card style={{ elevation: 3 }}>
							<CardItem cardBody>
								<Image style={{ height: 200, flex: 1 }} source={{ uri: item.image }} />
							</CardItem>
							<CardItem style={styles.flexCol}>
								<Text style={[ styles.cardTitle, cstyles.mb_10 ]}>{item.title}</Text>
								<Text style={[ styles.cardTitle, cstyles.mb_10 ]}>Story:</Text>
								<Text style={[ styles.storyText ]}>{item.story}</Text>
							</CardItem>
							<CardItem style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter ]}>
								<View style={[ cstyles.row, cstyles.itemsCenter ]}>
									<Thumbnail source={{ uri: item.profile }} />
									<Text style={[ { alignSelf: 'flex-end' }, styles.subTitle2 ]}>{item.userName}</Text>
								</View>
								<View style={[ cstyles.row, cstyles.itemsCenter ]}>
									<Entypo name="eye" size={24} color="black" />
									<Text style={[ styles.subTitle2, cstyles.ml_5 ]}>{item.views}</Text>
								</View>
							</CardItem>
						</Card>
					)}
				/>
			</View>
		</Container>
	);
}

export default World;
