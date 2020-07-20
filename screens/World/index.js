import React, { Fragment, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import {Header, ScrollableTab, Tabs, Tab, Left, TabHeading, Body, Right} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';

import styles from './Styles';
import Info from './Info';
import MyStory from '../Story';
import World from './World';
import RoraaGold from './RoraaGold';
import ShowScreen from './Show';
import {Entypo} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

function Profile(props) {
	const [ actibeTab, setActiveTab ] = useState(props.route.params.tab);
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<Header noShadow style={{backgroundColor:"transparent"}} hasTabs>
					<Left>
						<TouchableOpacity onPress={() => props.navigation.goBack()}>
							<Entypo name="chevron-small-left" size={24} color="black" />
						</TouchableOpacity>
					</Left>
					<Body/>
					<Right/>
				</Header>
				<Tabs
					tabBarBackgroundColor="transparent"
					initialPage={props.route.params.tab || 0}
					tabBarActiveTextColor="red"
					renderTabBar={()=> <ScrollableTab />}
					tabBarUnderlineStyle={{ backgroundColor: Colors.secondryGradient, height: 2 }}
					onChangeTab={({ i }) => setActiveTab(i)}
				>
					<Tab
						heading={
							<TabHeading style={{ backgroundColor: '#fff' }}>
								<Text style={[actibeTab === 0 ? styles.activeButton : styles.inActiveButton]}>
									INFO
								</Text>
							</TabHeading>
						}
						 >
						<Info {...props} />
					</Tab>
					<Tab
						 heading={
							 <TabHeading style={{ backgroundColor: '#fff' }}>
								 <Text style={[actibeTab === 1 ? styles.activeButton : styles.inActiveButton]}>
									 WORLD
								 </Text>
							 </TabHeading>
						 }>
						<World {...props} />
					</Tab>
					<Tab
						 heading={
							 <TabHeading style={{ backgroundColor: '#fff'}}>
								 <Text style={[actibeTab === 2 ? styles.activeButton : styles.inActiveButton]}>
									 SHOW
								 </Text>
							 </TabHeading>
						 }>
						<ShowScreen {...props} />
					</Tab>
					<Tab
						 heading={
							 <TabHeading style={{ backgroundColor: '#fff' }}>
								 <Text style={[actibeTab === 3 ? styles.activeButton : styles.inActiveButton]}>
									 RORAA GOLD
								 </Text>
							 </TabHeading>
						 }>
						<RoraaGold {...props} />
					</Tab>
				</Tabs>
			</SafeAreaView>
		</Fragment>
	);
}

export default Profile;
