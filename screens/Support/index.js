import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Header, Left, Body } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import cstyles from '../../constants/cstyles';
import { ScrollView } from 'react-native-gesture-handler';
import ConnectionCard from './ConnectionCard';
import ButtonGradiant from '../../components/ButtonGradient';

const dummyConnection = [ 'a', 'b', 'c', 'd', 'e', 'f' ];

function Notification() {
	return (
		<SafeAreaView style={[ cstyles.container ]}>
			<Header noShadow style={{ backgroundColor: 'transparent' }}>
				<Left>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</TouchableOpacity>
				</Left>
				<Body>
					<Text style={styles.mainText}>Title</Text>
				</Body>
			</Header>
			<ScrollView style={cstyles.container}>
				<View style={cstyles.padder}>{dummyConnection.map((con) => <ConnectionCard key={con} />)}</View>
			</ScrollView>
			<View style={cstyles.padder}>
				<ButtonGradiant text="Discover new Connections" />
			</View>
		</SafeAreaView>
	);
}

export default Notification;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});
