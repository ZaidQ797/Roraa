import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Item, Icon, Input } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import ButtonGradient from '../../components/ButtonGradient';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const defaultInterests = [
	'Rafting',
	'Trekking',
	'Surfing',
	'Racing',
	'Hunting',
	'Fishing',
	'Boating',
	'Traveling',
	'Cooking',
	'Painting',
	'Creative Writing',
	'Dancing',
	'Singing',
	'Model Building',
	'Photography',
	'Cloud Watching',
	'Reading',
	'Computer Games',
	'Social Networking'
];

function SelectStyles({ navigation }) {
	const [ interests, setInterests ] = useState(defaultInterests);
	const [ selected, setSelected ] = useState([]);

	function selectInterest(interest) {
		setSelected([ ...selected, interest ]);
		const newInterest = interests.filter((item) => interest !== item);
		setInterests(newInterest);
	}

	function deSelectInterest(item) {
		const newSelected = selected.filter((interest) => interest !== item);
		setSelected(newSelected);
		setInterests([ ...interests, item ]);
	}
	return (
		<Fragment>
			<SafeAreaView style={cstyles.container}>
				<ScrollView style={cstyles.container}>
					<View style={(cstyles.container, cstyles.padder)}>
						<View style={cstyles.contentContainer}>
							<Text style={styles.mainText}>Select Your Interests</Text>
							<Text style={styles.subtitle}>Choose the topics you like to follow..</Text>
							<Item rounded style={[ styles.input, cstyles.mt_25 ]}>
								<Icon active name="search" />
								<Input placeholder="Search here" />
							</Item>
						</View>
						{selected.length > 0 && (
							<View style={[ cstyles.container, cstyles.mt_15 ]}>
								<Text style={styles.boldText}>Selected Interests</Text>
								<View style={[ cstyles.row, styles.buttonContainer ]}>
									{selected.map((item) => (
										<TouchableOpacity
											key={item}
											style={styles.gradiantButton}
											onPress={() => deSelectInterest(item)}
										>
											<LinearGradient
												colors={[ Colors.primaryGradient, Colors.secondryGradient ]}
												start={[ 0.1, 0.1 ]}
												end={[ 0.5, 0.5 ]}
												style={styles.gradiant}
											>
												<Text style={cstyles.gradientButtonText}>{item}</Text>
											</LinearGradient>
										</TouchableOpacity>
									))}
								</View>
							</View>
						)}
						<View style={[ cstyles.container, cstyles.mt_15 ]}>
							<Text style={styles.boldText}>Interests to Select..</Text>
							<View style={[ cstyles.row, styles.buttonContainer ]}>
								{interests.map((interest) => (
									<TouchableOpacity
										key={interest}
										style={styles.buttonStyle}
										onPress={() => selectInterest(interest)}
									>
										<Text>{interest}</Text>
									</TouchableOpacity>
								))}
							</View>
						</View>
						<ButtonGradient
							text="Next"
							style={{ marginTop: 20 }}
							onPress={() => navigation.navigate('Root')}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default SelectStyles;

const styles = StyleSheet.create({
	input: {
		flex: 1,
		backgroundColor: 'white',
		height: 40
	},
	mainText: {
		fontSize: 30,
		fontWeight: '900'
	},
	subtitle: {
		fontSize: 15,
		color: 'lightgrey'
	},
	boldText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	buttonContainer: {
		flexWrap: 'wrap'
	},
	buttonStyle: {
		backgroundColor: '#dadfe3',
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 40,
		marginTop: 5,
		marginRight: 10
	},
	gradiantButton: {
		padding: 0,
		marginTop: 5,
		marginRight: 10
	},
	gradiant: {
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 40
	}
});
