import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Dimensions, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Root } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import Splash from './screens/Splash';
import OnBoarding from './screens/OnBoarding';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import SelectStylesScreen from './screens/SelectStyles';
import MessagesScreen from './screens/Inbox/Messages';
import SettingScreen from './screens/Setting';
import ProfileDetailScreen from './screens/ProfileDetail';
import WorldScreen from './screens/World';
import AddGoalScreen from './screens/AddGoal';
import AddWorldScreen from './screens/AddWorld';
import AddTalentScreen from './screens/AddTalent';
import AddStoryScreen from './screens/AddStory';
import AddInterestScreen from './screens/AddInterest';
import SharingScreen from './screens/Sharing';
import RatingScreen from './screens/RatingCircle';
import InterestScreen from './screens/Interests';
import PricePlanScreen from './screens/PricePlan';
import ConfirmationScreen from './screens/Confirmation';
import PhoneScreen from './screens/Phone';
import VisitorsScreen from './screens/Visitors';
import ScoreScreen from './screens/Score';
import ChatScreen from './screens/Inbox/Chat';
import DiscoverScreen from './screens/Discover';
import StoryScreen from './screens/Story';
import CurrentScreen from './screens/AddStory';


import { PersistGate } from "redux-persist/es/integration/react";
import { Provider, connect } from "react-redux";
import { store, persistor } from "./_helpers/store";
import Register from './screens/Register';

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
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<View style={styles.container}>
							{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
							<NavigationContainer>
								<Stack.Navigator headerMode="none" initialRouteName="Splash">
									<Stack.Screen name="Splash" >
										{props => <Splash {...props} />}
									</Stack.Screen>
									<Stack.Screen name="OnBoarding" >
										{props => <OnBoarding {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Register" >
										{props => <Register {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Phone" >
										{props => <PhoneScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Confirmation" >
										{props => <ConfirmationScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Login" >
										{props => <Login {...props} />}
									</Stack.Screen>
									<Stack.Screen name="ForgotPassword" >
										{props => <ForgotPassword {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Styles" >
										{props => <SelectStylesScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Root" >
										{props => <DrawerNavigator {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Messages" >
										{props => <MessagesScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Setting" >
										{props => <SettingScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Chat" >
										{props => <ChatScreen {...props} />}
									</Stack.Screen>
									
									<Stack.Screen name="Share" >
										{props => <SharingScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="World" >
										{props => <WorldScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="ProfileDetail" >
										{props => <ProfileDetailScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="AddGoal" >
										{props => <AddGoalScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="AddStory" >
										{props => <AddStoryScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="AddTalent" >
										{props => <AddTalentScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="AddWorld" >
										{props => <AddWorldScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="AddInterest" >
										{props => <AddInterestScreen {...props} />}
									</Stack.Screen>
									<Stack.Screen name="Rating" >
										{props => <RatingScreen {...props} />}
									</Stack.Screen>

									<Stack.Screen name="Interest" >
										{props => <InterestScreen {...props} />}
									</Stack.Screen>

									<Stack.Screen name="PricePlan" >
										{props => <PricePlanScreen {...props} />}
									</Stack.Screen>

									<Stack.Screen name="Visitor" >
										{props => <VisitorsScreen {...props} />}
									</Stack.Screen>

									<Stack.Screen name="Score" >
										{props => <ScoreScreen {...props} />}
									</Stack.Screen>

									<Stack.Screen name="Discover" >
										{props => <DiscoverScreen {...props} />}
									</Stack.Screen>

									<Stack.Screen name="Story" >
										{props => <StoryScreen {...props} />}
									</Stack.Screen>

								</Stack.Navigator>
							</NavigationContainer>
						</View>
					</PersistGate>
				</Provider>
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
