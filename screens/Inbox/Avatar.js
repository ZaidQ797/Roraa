import React, { Component, Fragment } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Image, StyleSheet } from 'react-native';

function Avatar({ isActive, image }) {
	return (
		<Fragment>
			<TouchableOpacity>
				<View style={styles.container}>
					<View style={isActive ? styles.greenDot : styles.greyDot} />
					<Image
						style={styles.image}
						source={{
							uri:
								'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg'
						}}
					/>
				</View>
			</TouchableOpacity>
		</Fragment>
	);
}

export default Avatar;

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	},
	greenDot: {
		zIndex: 100,
		width: 6,
		height: 6,
		backgroundColor: 'green',
		borderRadius: 100,
		position: 'absolute',
		top: '10%',
		right: '16%'
	},
	greyDot: {
		zIndex: 100,
		width: 6,
		height: 6,
		backgroundColor: 'grey',
		borderRadius: 100,
		position: 'absolute',
		top: '10%',
		right: '16%'
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 100,
		marginRight: 4
	}
});
