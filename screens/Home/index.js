import React, { Fragment, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { Header, Left, Right } from 'native-base';
import cstyle from '../../constants/cstyles';
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarsList from './StarList';
import { Entypo, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import TopStars from './TopStars';
import HomeDiscover from './HomeDiscover';
import World from './World';
import Show from './Show';

function Home({ navigation }) {
	const [ view, setView ] = useState('world');
	return (
		<Fragment>
			<SafeAreaView style={[ cstyle.container, cstyle.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</Left>
					<Right>
						<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
							<Ionicons name="ios-menu" size={24} color="black" />
						</TouchableOpacity>
					</Right>
				</Header>
				<View style={[ cstyle.px_20, styles.borderBottom ]}>
					{view === 'show' ? (
						<View style={[ cstyle.row, cstyle.itemsCenter, cstyle.flexBetweeen, cstyle.mb_15 ]}>
							<Text style={styles.headerText}>New Videos For You</Text>
							<TouchableOpacity style={styles.headerButn}>
								<Text style={styles.butnText}>NEW VIDEO</Text>
							</TouchableOpacity>
						</View>
					) : (
						<View style={[ cstyle.row, cstyle.itemsCenter, cstyle.flexBetweeen, cstyle.mb_15 ]}>
							<Text style={styles.headerText}>New Feed For You</Text>
							<TouchableOpacity style={styles.headerButn}>
								<Text style={styles.butnText}>NEW FEED</Text>
							</TouchableOpacity>
						</View>
					)}

					<View style={[ cstyle.row, cstyle.itemsCenter, cstyle.flexBetweeen ]}>
						<TouchableOpacity style={view === 'world' && styles.activeTab} onPress={() => setView('world')}>
							<Text style={styles.tabText}>World</Text>
						</TouchableOpacity>
						<TouchableOpacity style={view === 'show' && styles.activeTab} onPress={() => setView('show')}>
							<Text style={styles.tabText}>Show</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={view === 'discover' && styles.activeTab}
							onPress={() => setView('discover')}
						>
							<Text style={[ styles.tabText ]}>Discover</Text>
						</TouchableOpacity>
						<TouchableOpacity style={view === 'star' && styles.activeTab} onPress={() => setView('star')}>
							<Text style={styles.tabText}>Top 200 Stars</Text>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView style={[ cstyle.container, cstyle.padder, { paddingTop: 0 } ]}>
					{view === 'world' ? (
						<World />
					) : view === 'show' ? (
						<Show />
					) : view === 'discover' ? (
						<HomeDiscover />
					) : (
						<TopStars />
					)}
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default Home;
