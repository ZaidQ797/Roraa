import React, { Fragment, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import cstyles from '../../constants/cstyles';
import MessageList from './MessageList';
import Avatar from './Avatar';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Item, Icon, Input } from 'native-base';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from './styles';

function Inbox({ navigation }) {
	const [ messages, setMessages ] = useState([
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
			<SafeAreaView style={[ cstyles.container, cstyles.contentContainer ]}>
				<ScrollView style={cstyles.container}>
					<View style={[ styles.flexRow, styles.padding ]}>
						<Item rounded style={styles.input}>
							<Icon active name="search" />
							<Input placeholder="Search" />
						</Item>
						<TouchableOpacity style={styles.HeaderIcon} onPress={() => navigation.toggleDrawer()}>
							<Ionicons name="ios-menu" size={24} color="black" />
						</TouchableOpacity>
					</View>
					<View style={cstyles.padder}>
						<View style={styles.flexRow}>
							<Text style={styles.mainText}>Messages</Text>
							<TouchableOpacity>
								<Text>Edit</Text>
							</TouchableOpacity>
						</View>
						<Text style={styles.subtitle}>ONLINE FRIENDS</Text>
					</View>
					<View style={styles.avatarList}>
						<FlatList
							data={messages}
							horizontal
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => <Avatar onPress={() => navigation.navigate('Chat')} />}
							keyExtractor={(item) => item}
						/>
					</View>
					<View style={[ cstyles.padder ]}>
						{messages.map((m) => <MessageList onPress={() => navigation.navigate('Chat')} key={m} />)}
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default Inbox;
