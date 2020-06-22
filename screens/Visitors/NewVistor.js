import React, { Component, Fragment } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Image, StyleSheet, Text } from 'react-native';
import cstyles from '../../constants/cstyles';

function NewVisitors({ name, image }) {
	return (
		<Fragment>
			<TouchableOpacity>
				<View style={styles.container}>
					<Image
						style={styles.image}
						source={{
							uri:
								'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg'
						}}
					/>
					<Text style={[ styles.textStyle, styles.mt_5 ]}>{name || 'some Name'}</Text>
				</View>
			</TouchableOpacity>
		</Fragment>
	);
}

export default NewVisitors;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		marginHorizontal: 12,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 100,
		marginRight: 4,
		borderWidth: 1,
		borderColor: 'black'
	},
	textStyle: {
		fontSize: 15
	},
	mt_5: {
		marginTop: 5
	}
});
