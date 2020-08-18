import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import Logo from '../../assets/images/logo_text.png';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import ButtonGradient from '../../components/ButtonGradient';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const dummyData = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];

function Discover({navigation}) {
	return (
		<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
			<ScrollView style={[cstyles.container]}>
				<View style={[ cstyles.container, cstyles.padder, styles.logoContainer ]}>
					<Image source={Logo} />
					<Text style={styles.mainText}>Discover Romance.</Text>
					<Text style={styles.mainText}>Waiting for something special.</Text>
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
						renderItem={({ item }) => <View style={[ styles.imgCard ]} />}
					/>
				</View>
				<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.px_20, {paddingBottom: 40} ]}>
					<TouchableOpacity>
						<LinearGradient
							colors={[ Colors.primaryGradient, Colors.secondryGradient ]}
							start={[ 0.1, 0.1 ]}
							end={[ 0.5, 0.5 ]}
							style={styles.iconButn}
						>
							<AntDesign name="arrowleft" size={24} color="white" />
						</LinearGradient>
					</TouchableOpacity>

					<ButtonGradient text="Next" onPress={()=> navigation.navigate("Root")} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Discover;

const styles = StyleSheet.create({
	logoContainer: {
		paddingTop: '13%',
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
		height: 280,
		backgroundColor: '#52514f',
		borderRadius: 20,
		marginHorizontal: 15
	},
	iconButn: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 40,
		height: 40,
		borderRadius: 10
	}
});
