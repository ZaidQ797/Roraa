import React, { Fragment } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const NO_OF_COL = 2;

function GridView({ index }) {
	return (
		<Fragment>
			<View style={[ styles.imageContainer, styles.halfHeight ]}>
				<Image style={styles.image} />
			</View>
		</Fragment>
	);
}

export default GridView;

const styles = StyleSheet.create({
	imageContainer: {
		padding: 2
	},
	image: {
		width: Math.round(Dimensions.get('window').width - 48) / NO_OF_COL,
		backgroundColor: '#23395d',
		height: '100%',
		borderRadius: 20
	},
	fullHeight: {
		height: 300
	},
	halfHeight: {
		height: 170
	}
});
