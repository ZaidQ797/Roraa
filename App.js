import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Root } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import Splash from './screens/Splash';
import OnBoarding from './screens/OnBoarding';
import Register from './screens/Register';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import SelectStylesScreen from './screens/SelectStyles';
import MessagesScreen from './screens/Inbox/Messages';
import SettingScreen from './screens/Setting';
import ProfileDetailScreen from './screens/ProfileDetail';
import WorldScreen from './screens/World';
import AddGoalScreen from './screens/AddGoal';
import AddTalentScreen from './screens/AddTalent';
import AddInterestScreen from './screens/AddInterest';
import SharingScreen from './screens/Sharing';
import ChatHighlightsScreen from './screens/Inbox/HighLights';
import RatingScreen from './screens/RatingCircle';
import InterestScreen from './screens/Interests';
import PricePlanScreen from './screens/PricePlan';

import CurrentScreen from './screens/Camera';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { loading: true };
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			'Gill Sans': require('./assets/fonts/gillsans.ttf')
		}).then((f) => {
			this.setState({ loading: false });
		});
	}

	render() {
		// const isLoadingComplete = useCachedResources();

		if (this.state.loading) {
			return (
				<Root>
					<AppLoading />
				</Root>
			);
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
					<NavigationContainer>
						<Stack.Navigator headerMode="none" initialRouteName="Splash">
							<Stack.Screen name="Splash" component={Splash} />
							<Stack.Screen name="OnBoarding" component={OnBoarding} />
							<Stack.Screen name="Register" component={Register} />
							<Stack.Screen name="Login" component={Login} />
							<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
							<Stack.Screen name="ResetPassword" component={ResetPassword} />
							<Stack.Screen name="Styles" component={SelectStylesScreen} />
							<Stack.Screen name="Root" children={DrawerNavigator} />
							<Stack.Screen name="Messages" component={MessagesScreen} />
							<Stack.Screen name="Setting" component={SettingScreen} />
							<Stack.Screen name="ChatHighlight" component={ChatHighlightsScreen} />
							<Stack.Screen name="Share" component={SharingScreen} />
							<Stack.Screen name="World" component={WorldScreen} />
							<Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
							<Stack.Screen name="AddGoal" component={AddGoalScreen} />
							<Stack.Screen name="AddTalent" component={AddTalentScreen} />
							<Stack.Screen name="AddInterest" component={AddInterestScreen} />
							<Stack.Screen name="Rating" component={RatingScreen} />
							<Stack.Screen name="Interest" component={InterestScreen} />
							<Stack.Screen name="PricePlan" component={PricePlanScreen} />
						</Stack.Navigator>
					</NavigationContainer>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight,
		backgroundColor: '#fff'
	}
});
