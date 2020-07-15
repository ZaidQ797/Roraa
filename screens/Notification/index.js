import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';
import { Entypo, Ionicons } from '@expo/vector-icons';
import cstyles from '../../constants/cstyles';
import { ScrollView } from 'react-native-gesture-handler';
import ConnectionCard from './ConnectionCard';
import NotificationCard from './NotificationCard';

const dummyConnection = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
const dummyNotification = [ 'a', 'b', 'c' ];

function Notification({ navigation }) {
	return (
		<SafeAreaView style={[ cstyles.container ]}>
			<Header noShadow style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}>
				<Left>
					<TouchableOpacity>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</TouchableOpacity>
				</Left>
				<Body>
					<Text style={styles.mainText}>Notifications</Text>
				</Body>
				<Right>
					<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
						<Ionicons name="ios-menu" size={24} color="black" />
					</TouchableOpacity>
				</Right>
			</Header>
			<ScrollView style={cstyles.container}>
				<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.px_20, cstyles.my_10 ]}>
					<Text style={styles.headerTextlg}>Profile Notification</Text>
					<TouchableOpacity>
						<Text style={styles.headerTextsm}> View All </Text>
					</TouchableOpacity>
				</View>
				<View>
					<NotificationCard type="location" />
					<NotificationCard type="download" />
					<NotificationCard type="like" />
				</View>
				<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.px_20, cstyles.my_10 ]}>
					<Text style={styles.headerTextlg}>Connection Request</Text>
					<TouchableOpacity>
						<Text style={styles.headerTextsm}> View All </Text>
					</TouchableOpacity>
				</View>
				<View style={cstyles.padder}>{dummyConnection.map((con) => <ConnectionCard key={con} />)}</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Notification;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	headerTextlg: {
		fontSize: 18,
		fontWeight: '600'
	},
	headerTextsm: {
		fontSize: 13,
		color: 'gray'
	}
});
