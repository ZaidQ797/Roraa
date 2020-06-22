import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import cstyles from '../constants/cstyles';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home';
import LinksScreen from '../screens/LinksScreen';
import InboxScreen from '../screens/Inbox';
import ProfileScreen from '../screens/Profile';
import VisitorsScreen from '../screens/Visitors';
import ScoreScreen from '../screens/Score';
import SettingScreen from '../screens/Setting';
import InterestsScreen from '../screens/Interests';

const Tab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function BottomTabNavigator({ navigation }) {
	return (
		<Tab.Navigator
			initialRouteName={INITIAL_ROUTE_NAME}
			activeColor="#f0edf6"
			inactiveColor="#3e2465"
			barStyle={{ backgroundColor: '#c41851' }}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => <AntDesign name="home" size={24} color="white" />
				}}
			/>
			<Tab.Screen
				name="Inbox"
				component={InboxScreen}
				options={{
					tabBarLabel: 'Inbox',
					tabBarIcon: () => <Feather name="message-square" size={24} color="white" />
				}}
			/>
			<Tab.Screen
				name="Gallery"
				component={ScoreScreen}
				options={{
					tabBarLabel: 'Gallery',
					tabBarIcon: () => <Entypo name="picasa" size={24} color="white" />
				}}
			/>
			<Tab.Screen
				name="Star"
				component={VisitorsScreen}
				options={{
					tabBarLabel: 'Star',
					tabBarIcon: () => <AntDesign name="staro" size={24} color="white" />
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: () => <Feather name="user" size={24} color="white" />
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabNavigator;
