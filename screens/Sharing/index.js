import React, { Fragment, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import { Header, Left, Body } from 'native-base';
import cstyles from '../../constants/cstyles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import userIcon from '../../assets/icons/smUser.png';
import twitterIcon from '../../assets/icons/twitter.png';
// import facebookIcon from '../../assets/icons/facebook.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import messengerIcon from '../../assets/icons/messenger.png';
import messageIcon from '../../assets/icons/message.png';
import ButtonGradient from '../../components/ButtonGradient';
import WolrdPic from '../../assets/images/world.png';
import FollowePic from '../../assets/images/follower.png';
import AdsPic from '../../assets/images/adds.png';
import StarPic from '../../assets/images/star.png';
import World from '../World';

function Sharing({ navigation }) {
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Entypo name="chevron-small-left" size={24} color="black" />
						</TouchableOpacity>
					</Left>
					<Body>
						<Text style={styles.mainText}>Sharing</Text>
					</Body>
				</Header>

				<ScrollView style={[ cstyles.container, cstyles.padder, { paddingTop: 5 } ]}>
					<View style={cstyles.padder}>
						<Text style={styles.headerText}>Mohammed Ramadan</Text>
						<Text style={styles.subtitle}>
							Do you want to increase your rating ? Gain more followers ? .. Share love with your family
							and friends get 100$ for Roraa Ads{' '}
						</Text>
					</View>
					<View>
						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<View style={[ styles.card, cstyles.boxShadow, cstyles.my_20, cstyles.mr_10 ]}>
								<Image source={WolrdPic} style={cstyles.selfCenter} />
								<Text style={[ styles.subtitle, cstyles.boxShadow, cstyles.padder ]}>
									Let your world standout
								</Text>
							</View>
							<View style={[ styles.card, cstyles.boxShadow, cstyles.my_20, cstyles.mr_10 ]}>
								<Image source={FollowePic} style={cstyles.selfCenter} />
								<Text style={[ styles.subtitle, cstyles.boxShadow, cstyles.padder ]}>
									Gain your followers
								</Text>
							</View>
							<View style={[ styles.card, cstyles.boxShadow, cstyles.my_20, cstyles.mr_10 ]}>
								<Image source={AdsPic} style={cstyles.selfCenter} />
								<Text style={[ styles.subtitle, cstyles.boxShadow, cstyles.padder ]}>
									Get 100$ for Roraa ads
								</Text>
							</View>
							<View style={[ styles.card, cstyles.boxShadow, cstyles.my_20, cstyles.mr_10 ]}>
								<Image source={StarPic} style={cstyles.selfCenter} />
								<Text style={[ styles.subtitle, cstyles.boxShadow, cstyles.padder ]}>
									Increase your rating
								</Text>
							</View>
						</ScrollView>
					</View>
					<View style={cstyles.itemsCenter}>
						<Text style={styles.textStyle0}>Thank you for sharing and support</Text>
						<View style={[ cstyles.row, cstyles.itemsCenter ]}>
							<View style={[ styles.userContainer, cstyles.my_10 ]}>
								<Image source={userIcon} />
							</View>
							<Text style={[ cstyles.ml_10, styles.smText ]}>Number of users share it 1000</Text>
						</View>
					</View>
					<View style={[ cstyles.my_15, styles.bottomSpace ]}>
						<Text style={[ styles.subtitle, cstyles.ml_10 ]}>Share to your friends by using these</Text>
						<ScrollView style={cstyles.mb_20} horizontal showsHorizontalScrollIndicator={false}>
							<TouchableOpacity>
								<Image source={twitterIcon} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Image source={whatsappIcon} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Image source={messengerIcon} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Image source={messageIcon} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Image source={twitterIcon} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Image source={messengerIcon} />
							</TouchableOpacity>
						</ScrollView>
						<ButtonGradient text="Copy Link" />
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default Sharing;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	headerText: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	subtitle: {
		fontSize: 16,
		lineHeight: 23,
		color: 'grey'
	},
	card: {
		width: Dimensions.get('window').width - 100,
		height: 200,
		backgroundColor: 'white',
		borderRadius: 30
	},
	bottomSpace: {
		marginBottom: 50
	},
	userContainer: {
		width: 25,
		height: 25,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#e98180'
	},
	smText: {
		fontSize: 12,
		color: 'grey'
	},
	textStyle: {
		fontSize: 15,
		color: 'grey'
	}
});
