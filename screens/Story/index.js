import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import { Thumbnail, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

function MyStory({ navigation }) {
	return (
		<SafeAreaView style={cstyles.container}>
			<ScrollView style={[ cstyles.container, cstyles.padder ]}>
				<View style={[ cstyles.padder, cstyles.row, cstyles.itemsEnd ]}>
					<Thumbnail
						small
						source={{
							uri:
								'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg'
						}}
					/>
					<Text style={[ cstyles.ml_10, styles.mainText ]}>My Story</Text>
				</View>
				<View
					style={[
						cstyles.boxShadow,
						cstyles.my_10,
						styles.br_10,
						cstyles.px_10,
						cstyles.py_20,
						cstyles.bg_white
					]}
				>
					<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.py_10 ]}>
						<Text style={styles.storyHeader}>My childhood</Text>
					</View>
					<View>
						<Text style={styles.storyText}>
							Childhood is time when everybody is effected by incidents which remains with them during
							their entire lives. there are many events in my childhood, and some of them left no impact
							on my life with some i can't exactly say if they happened oe were they just my imagination
							occuring only in my dreams. only a few events truly influenced my attitude towards the
							surrouding world. one of them occured when i was six year old. i don't know what attracted
							me to the company of children much older than i was. Maybe it was because they seems
							independent , could stay in the streets at night and were afraid of nothing unlike me. They
							all called each other with nicknames, and had one too. It was pushkin because i had short
							curly hair and liked to tell stories which i composed by myself, Like all children in the
							world. I liked to listen to the tails with my friend , the most popular were the ghost
							stories As a rule for the best effect, these frightful stories were ghost stories.
						</Text>
					</View>
				</View>
				<View style={{ alignSelf: 'flex-end', paddingBottom: 40 }}>
					<TouchableOpacity style={styles.iconButton} onPress={()=> navigation.goBack()}>
						<FontAwesome name="chevron-left" size={24} color="white" />
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default MyStory;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 22,
		fontWeight: '600'
	},
	br_10: {
		borderRadius: 10
	},
	storyHeader: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	storyText: {
		fontSize: 14,
		fontWeight: '100',
		lineHeight: 22,
		paddingHorizontal: 5
	},
	iconButton: {
		backgroundColor: '#f5656b',
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20
	}
});
