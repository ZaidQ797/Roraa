import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {  Ionicons, MaterialIcons } from '@expo/vector-icons';
import cstyles from '../../constants/cstyles';
import { ScrollView } from 'react-native-gesture-handler';
// import * as ImagePicker from 'expo-image-picker';

export default function App({navigation}) {
	const [ permission, setPermission ] = useState(null);
	const [ cameraType, setCameraType ] = useState('photo');
	const [ type, setType ] = useState(Camera.Constants.Type.back);
	const camera = useRef(null);

	useEffect(() => {
		const getPermissions = async () => {
			if (Platform.OS === 'ios') {
				const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
				if (status !== 'granted') {
					alert('Sorry, we need camera roll permissions to make this work!');
				}
			}

			const { status } = await Permissions.askAsync(Permissions.CAMERA);
			if (status === 'granted') {
				setPermission(true);
			}
		};
		if (permission === null) {
			  getPermissions();
		}
	}, [navigation]);

	const handleCameraType = () => {
		if (type === Camera.Constants.Type.back) {
			setType(Camera.Constants.Type.front);
		} else {
			setType(Camera.Constants.Type.back);
		}
	};

	// const takePicture = async () => {
	// 	if (camera.current) {
	// 		const photo = await camera.current.takePictureAsync();
	// 	}
	// };

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images
		});
	};
		return (
			<View style={cstyles.container}>
				<Camera style={cstyles.container} type={type} ref={camera}>
					<View style={styles.bottomContainer}>
						<View style={styles.bottom}>
							<ScrollView horizontal style={styles.textContainer}>
								<TouchableOpacity style={styles.textButn} onPress={() => setCameraType('photo')}>
									<Text style={[cameraType === 'photo' ? styles.activeTextButn : styles.textStyle]}>
										Photo
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.textButn} onPress={() => setCameraType('dual')}>
									<Text style={[cameraType === 'dual' ? styles.activeTextButn : styles.textStyle]}>
										Dual
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.textButn} onPress={() => setCameraType('gif')}>
									<Text style={[cameraType === 'gif' ? styles.activeTextButn : styles.textStyle]}>
										GIF
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.textButn} onPress={() => setCameraType('magic')}>
									<Text style={[cameraType === 'magic' ? styles.activeTextButn : styles.textStyle]}>
										Magic
									</Text>
								</TouchableOpacity>
							</ScrollView>
							<View style={styles.iconContainer}>
								<TouchableOpacity style={styles.sideButn} onPress={() => pickImage()}>
									<MaterialIcons name="photo-library" size={30} color="white"/>
								</TouchableOpacity>
								<TouchableOpacity style={styles.takePic}>
									<View style={styles.takePicCircle}/>
								</TouchableOpacity>
								<TouchableOpacity style={styles.sideButn} onPress={() => handleCameraType()}>
									<Ionicons name="ios-reverse-camera" size={35} color="white"/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Camera>
			</View>
		);



}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottomContainer: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	bottom: {
		height: 125,
		width: '100%',
		backgroundColor: 'black',
		opacity: 0.6,
		padding: 10
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	textContainer: {
		alignSelf: 'flex-end'
	},
	textStyle: {
		fontSize: 15,
		color: 'white'
	},
	textButn: {
		width: 50,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	activeTextButn: {
		fontSize: 20,
		color: 'white',
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		width:"100%"
	},
	takePic: {
		width: 65,
		height: 65,
		borderColor: 'white',
		borderWidth: 1,
		alignSelf: 'flex-end',
		borderRadius: 33,
		justifyContent: 'center',
		alignItems: 'center'
	},
	takePicCircle: {
		width: 55,
		height: 55,
		borderRadius: 30,
		backgroundColor: 'white'
	},
	sideButn: {
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		marginHorizontal: 10
	}
});
