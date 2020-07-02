import React, { Fragment, useState } from 'react';
import { View, Text } from 'native-base';
import { TextInput, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import cstyles from '../../constants/cstyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ChooseInterest() {
	const [ categories, setCategories ] = useState([
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n'
	]);
	return (
		<Fragment>
			<View style={[ cstyles.container, cstyles.row, styles.innerContainer, cstyles.my_20 ]}>
				{categories.map((category, index) => (
					<TouchableOpacity key={category} style={styles.imageContainer}>
						<ImageBackground
							imageStyle={
								index % 2 ? (
									{ borderRadius: 8, borderWidth: 1.5, borderColor: '#f4636a' }
								) : (
									{ borderRadius: 8 }
								)
							}
							style={[ styles.background, cstyles.testBorder ]}
							source={{
								uri: 'https://static.statusqueen.in/dpimages/thumbnail/dp_image31-761.jpg'
							}}
						>
							<Text style={styles.textStyle}>Animals</Text>
						</ImageBackground>
					</TouchableOpacity>
				))}
			</View>
			<View style={(cstyles.my_20, { marginBottom: 30 })}>
				<TouchableOpacity style={styles.buttonStyle}>
					<Text style={styles.butnText}>Done</Text>
				</TouchableOpacity>
			</View>
		</Fragment>
	);
}

export default ChooseInterest;

const styles = StyleSheet.create({
	innerContainer: {
		flexWrap: 'wrap'
	},
	imageContainer: {
		width: Math.round(Dimensions.get('window').width - 55) / 3,
		height: 150,
		marginRight: 5,
		marginTop: 5
	},
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderRadius: 30,
		width: '100%',
		height: '100%'
	},
	textStyle: {
		color: 'white'
	},
	buttonStyle: {
		width: '60%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#f4636a',
		alignSelf: 'center'
	},
	butnText: {
		fontSize: 19,
		color: 'white',
		textTransform: 'uppercase'
	}
});
