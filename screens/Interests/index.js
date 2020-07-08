import React, { Fragment, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, Left, Body } from 'native-base';
import cstyles from '../../constants/cstyles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ChooseInterest from './ChooseInterest';
import CreateInterest from './CreateInterest';

function Interests({ navigation }) {
	const [ interest, setInterest ] = useState(1);
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Entypo name="chevron-small-left" size={24} color="black" />
						</TouchableOpacity>
					</Left>
					<Body>
						<Text style={styles.mainText}>Interests</Text>
					</Body>
				</Header>

				<ScrollView style={[ cstyles.container, cstyles.padder ]}>
					<View style={[ cstyles.row, cstyles.flexBetweeen ]}>
						<TouchableOpacity onPress={() => setInterest(1)}>
							<Text style={[ styles.buttonText, interest === 1 && styles.activeButton ]}>
								Create interest
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setInterest(2)}>
							<Text style={[ styles.buttonText, interest !== 1 && styles.activeButton ]}>
								Choose interest
							</Text>
						</TouchableOpacity>
					</View>
					{interest === 1 ? <CreateInterest /> : <ChooseInterest />}
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default Interests;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '800',
		marginHorizontal: 10,
		paddingBottom: 5
	},
	activeButton: {
		color: '#f5656b',
		borderBottomWidth: 4,
		borderRadius: 50,
		borderBottomColor: '#f5656b'
	}
});
