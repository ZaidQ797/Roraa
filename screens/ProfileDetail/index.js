import React, { Fragment } from 'react';
import { SafeAreaView, ImageBackground, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import { StyleSheet } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import ProfilePic from '../../assets/images/profileImg.png';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

function ProfileDetail({ navigation }) {
	return (
		<Fragment>
			<SafeAreaView style={cstyles.container}>
				<ScrollView style={[ cstyles.container ]}>
					<View style={styles.imageContainer}>
						<ImageBackground style={styles.imgBg} source={ProfilePic}>
							<TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
								<Entypo name="chevron-small-left" size={24} color="black" />
							</TouchableOpacity>
							<TouchableOpacity style={[ styles.iconButton, cstyles.testBorder ]}>
								<MaterialIcons name="edit" size={25} color="white" />
							</TouchableOpacity>
						</ImageBackground>
					</View>
					<View style={[ cstyles.container, cstyles.padder ]}>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen, cstyles.my_15 ]}>
							<View>
								<Text style={styles.header}>Name</Text>
								<Text style={styles.detail}>Mohammed Ramadan</Text>
							</View>
							<TouchableOpacity style={cstyles.mr_20}>
								<MaterialIcons name="edit" size={25} color="#f5656b" />
							</TouchableOpacity>
						</View>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen, cstyles.my_15 ]}>
							<View>
								<Text style={styles.header}>Email</Text>
								<Text style={styles.detail}>username@gmail.com</Text>
							</View>
							<TouchableOpacity style={cstyles.mr_20}>
								<MaterialIcons name="edit" size={25} color="#f5656b" />
							</TouchableOpacity>
						</View>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen, cstyles.my_15 ]}>
							<View>
								<Text style={styles.header}>Mobile number</Text>
								<Text style={styles.detail}>+972-592350474</Text>
							</View>
							<TouchableOpacity style={cstyles.mr_20}>
								<MaterialIcons name="edit" size={25} color="#f5656b" />
							</TouchableOpacity>
						</View>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen, cstyles.my_15 ]}>
							<View>
								<Text style={styles.header}>Birthday</Text>
								<Text style={styles.detail}>12th March, 1996</Text>
							</View>
							<TouchableOpacity style={cstyles.mr_20}>
								<MaterialIcons name="edit" size={25} color="#f5656b" />
							</TouchableOpacity>
						</View>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen, cstyles.my_15 ]}>
							<View>
								<Text style={styles.header}>Location</Text>
								<Text style={styles.detail}>Gaza</Text>
							</View>
							<TouchableOpacity style={cstyles.mr_20}>
								<MaterialIcons name="edit" size={25} color="#f5656b" />
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default ProfileDetail;

const styles = StyleSheet.create({
	imageContainer: {
		width: deviceWidth,
		height: deviceHeight / 2,
		position: 'relative'
	},
	imgBg: {
		width: '100%',
		height: '96%'
	},
	backBtn: {
		width: 25,
		height: 25,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: 'white',
		marginLeft: 25,
		marginTop: 30
	},
	iconButton: {
		backgroundColor: '#f5656b',
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		position: 'absolute',
		bottom: -10,
		right: 30
	},
	header: {
		fontSize: 16,
		fontWeight: '100',
		color: 'grey'
	},
	detail: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});
