import React, { Component, Fragment } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Image, StyleSheet } from 'react-native';
import styles from './styles';
import config from '../../_config';

function Avatar({ isActive, image, onPress }) {
	return (
		<Fragment>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.relative}>
					<View style={isActive ? styles.greenDot : styles.greyDot} />
					<Image
						style={styles.avatar}
						source={{
							uri: `${config.imageUrl}/${image}`
						}}
					/>
				</View>
			</TouchableOpacity>
		</Fragment>
	);
}

export default Avatar;
