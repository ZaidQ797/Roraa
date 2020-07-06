import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from './BottomTabNavigator';
import DrawerContent from './DrawerContent';
import SettingScreen from '../screens/Setting';
import ShareScreen from '../screens/Sharing';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function DrawerNavigator() {
	return (
		<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen name="Home" component={BottomNavigator} />
		</Drawer.Navigator>
	);
}
