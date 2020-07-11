import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import Logo from '../../assets/images/logo_text.png';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import ButtonGradient from '../../components/ButtonGradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Thumbnail } from 'native-base';

const dummyData = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];

function World({ navigaton }) {
	return (
		<ScrollView style={cstyles.container}>
			<View style={[ cstyles.container, styles.logoContainer, cstyles.padder ]}>
				<TouchableOpacity style={styles.button} onPress={() => NavigationPreloadManager.navigate('Interest')}>
					<Text style={styles.butnText}>Add World</Text>
				</TouchableOpacity>
			</View>
			<View style={[ cstyles.py_20 ]}>
				<FlatList
					data={dummyData}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item}
					initialScrollIndex={5}
					scrollEventThrottle={16}
					snapToAlignment="end"
					decelerationRate={'fast'}
					renderItem={({ item }) => (
						<ImageBackground
							imageStyle={{ borderRadius: 20 }}
							source={{
								uri:
									'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687'
							}}
							style={[ styles.imgCard ]}
						>
							<View style={[ styles.imageBottom, cstyles.row, cstyles.itemsCenter ]}>
								<Thumbnail
									small
									source={{
										uri:
											'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg'
									}}
								/>
								<Text style={styles.iconText}>World Name</Text>
							</View>
						</ImageBackground>
					)}
				/>
			</View>
			<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.px_20, styles.iconContainer ]}>
				<TouchableOpacity style={[ cstyles.row, cstyles.itemsCenter ]}>
					<Ionicons name="logo-octocat" size={24} color="white" />
					<Text style={styles.iconText}>300</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[ cstyles.row, cstyles.itemsCenter ]}>
					<Ionicons name="md-eye" size={24} color="white" />
					<Text style={styles.iconText}>2310</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

export default World;

const styles = StyleSheet.create({
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	mainText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#52514f'
	},
	imgCard: {
		width: Layout.window.width - 120,
		height: 320,
		justifyContent: 'flex-end',
		borderRadius: 20,
		marginHorizontal: 15
	},
	iconContainer: {
		width: Layout.window.width - 120,
		height: 40,
		backgroundColor: Colors.secondryGradient,
		borderRadius: 10,
		alignSelf: 'center'
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.secondryGradient,
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 100
	},
	butnText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16
	},
	imageBottom: {
		width: '100%',
		height: '20%',
		backgroundColor: '#52514f',
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		paddingLeft: 20
	},
	iconText: {
		color: 'white',
		fontSize: 13,
		marginLeft: 10
	}
});
