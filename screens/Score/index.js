import React, { Fragment, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, Left, Body } from 'native-base';
import cstyles from '../../constants/cstyles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ScoreList from './ScoreList';

function Visitors() {
	const [ score, setNewScore ] = useState([
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
		'n',
		'p',
		'q'
	]);
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</Left>
					<Body>
						<Text style={styles.mainText}>Score</Text>
					</Body>
				</Header>
				<ScrollView style={cstyles.container}>
					<View>{score.map((Visitor) => <ScoreList key={Visitor} />)}</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default Visitors;

const styles = StyleSheet.create({
	newVisitors: {
		paddingLeft: 20
	},
	subtitle: {
		fontSize: 17,
		color: 'grey',
		marginVertical: 10
	},
	mainText: {
		fontSize: 17,
		fontWeight: 'bold'
	}
});
