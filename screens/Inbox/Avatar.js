import React, { Component, Fragment } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Image, StyleSheet } from 'react-native';
import styles from './styles';

function Avatar({ isActive, image }) {
	return (
		<Fragment>
			<TouchableOpacity>
				<View style={styles.relative}>
					<View style={isActive ? styles.greenDot : styles.greyDot} />
					<Image
						style={styles.avatar}
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
