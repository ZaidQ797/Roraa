import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  Text,
  AsyncStorage,
} from "react-native";
import TargetAudience from "./screens/TargetAudience";
import TargetAudi from "./screens/TargetAudi/TargetAudi";
import Success from "./screens/Success";

import TargetAudience2 from "./screens/TargetAudience2";
import Confirm from "./screens/Confirm";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import Splash from "./screens/Splash";
import DiscoverList from "./screens/Home/DiscoverList";
import OnBoarding from "./screens/OnBoarding";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import SelectStylesScreen from "./screens/SelectStyles";
import MessagesScreen from "./screens/Inbox/Messages";
import SettingScreen from "./screens/Setting";
import ProfileDetailScreen from "./screens/ProfileDetail";
import WorldScreen from "./screens/World";
import AddGoalScreen from "./screens/AddGoal";
import AddWorldScreen from "./screens/AddWorld";
import AddTalentScreen from "./screens/AddTalent";
import AddStoryScreen from "./screens/AddStory";
import AddInterestScreen from "./screens/AddInterest";
import SharingScreen from "./screens/Sharing";
import RatingScreen from "./screens/RatingCircle";
import InterestScreen from "./screens/Interests";
import PricePlanScreen from "./screens/PricePlan";
import ConfirmationScreen from "./screens/Confirmation";
import PhoneScreen from "./screens/Phone";
import VisitorsScreen from "./screens/Visitors";
import ScoreScreen from "./screens/Score";
import ChatScreen from "./screens/Inbox/Chat";
import DiscoverScreen from "./screens/Discover";
import StoryScreen from "./screens/Story";
import CurrentScreen from "./screens/AddStory";
import NewPassword from "./screens/NewPassword";
import CreateCampaign from "./screens/CreateCampaign";
import BudgetSchedule from "./screens/BudgetSchedule";
import VideoPlay from "./screens/VideoPlayer/VideoPlayer";
import VisitorProfile from "./screens/World/Info";
import AddShow from "./screens/AddShow/AddShow";
import DisplayMedia from "./screens/Home/DisplayMedia";
import RateMe from "./screens/RateMe";

import Register from "./screens/Register";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { last_activity } from './_actions/auth'
console.disableYellowBox = true;
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const Stack = createStackNavigator();

class AppNavs extends React.Component {
  state = {
    status: "",
    interval: null,
  };
  componentDidMount = async () => {
    const status = await AsyncStorage.getItem("showInterests");
    if (status == "false") this.setState({ status });
    let interval = setInterval(() => {
      const { user, last_activity } = this.props;
      const data = new FormData();
      if (user) {
        data.append('u_id', user.u_id)
        last_activity(data)
      }
    }, 30000);
    this.setState({ interval })
  };
  componentWillUnmount() {
    clearInterval(this.state.interval)
  }
  render() {
    const { user } = this.props;
    // alert('ok')
    // console.log(user)
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="Splash">
            {user == undefined && (
              <Stack.Screen name="Splash">
                {(props) => <Splash {...props} />}
              </Stack.Screen>
            )}
            {user == undefined && (
              <Stack.Screen name="OnBoarding">
                {(props) => <OnBoarding {...props} />}
              </Stack.Screen>
            )}
            {user == undefined && (
              <Stack.Screen name="Register">
                {(props) => <Register {...props} />}
              </Stack.Screen>
            )}
            {user == undefined && (
              <Stack.Screen name="Phone">
                {(props) => <PhoneScreen {...props} />}
              </Stack.Screen>
            )}
            {user == undefined && (
              <Stack.Screen name="Confirmation">
                {(props) => <ConfirmationScreen {...props} />}
              </Stack.Screen>
            )}
            {user == undefined && (
              <Stack.Screen name="Login">
                {(props) => <Login {...props} />}
              </Stack.Screen>
            )}
            {user == undefined && (
              <Stack.Screen name="ForgotPassword">
                {(props) => <ForgotPassword {...props} />}
              </Stack.Screen>
            )}
            {this.state.status == "" && (
              <Stack.Screen name="Styles">
                {(props) => <SelectStylesScreen {...props} />}
              </Stack.Screen>
            )}
            <Stack.Screen name="Root">
              {(props) => <DrawerNavigator {...props} />}
            </Stack.Screen>
            <Stack.Screen name="DisplayMedia">
              {(props) => <DisplayMedia {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Messages">
              {(props) => <MessagesScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Setting">
              {(props) => <SettingScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Chat">
              {(props) => <ChatScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddShow">
              {(props) => <AddShow {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Share">
              {(props) => <SharingScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="World">
              {(props) => <WorldScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="VisitorProfile">
              {(props) => <VisitorProfile {...props} />}
            </Stack.Screen>
            {/* <Stack.Screen name="EditProfile">
              {(props) => <EditProfile {...props} />}
            </Stack.Screen> */}
            <Stack.Screen name="ProfileDetail">
              {(props) => <ProfileDetailScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddGoal">
              {(props) => <AddGoalScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddStory">
              {(props) => <AddStoryScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddTalent">
              {(props) => <AddTalentScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddWorld">
              {(props) => <AddWorldScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="AddInterest">
              {(props) => <AddInterestScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Rating">
              {(props) => <RatingScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Interest">
              {(props) => <InterestScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="PricePlan">
              {(props) => <PricePlanScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Visitor">
              {(props) => <VisitorsScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Score">
              {(props) => <ScoreScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Discover">
              {(props) => <DiscoverScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Story">
              {(props) => <StoryScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="NewPassword">
              {(props) => <NewPassword {...props} />}
            </Stack.Screen>
            <Stack.Screen name="VideoPlay">
              {(props) => <VideoPlay {...props} />}
            </Stack.Screen>
            <Stack.Screen name="DiscoverList">
              {(props) => <DiscoverList {...props} />}
            </Stack.Screen>
            <Stack.Screen name="CreateCampaign">
              {(props) => <CreateCampaign {...props} />}
            </Stack.Screen>
            <Stack.Screen name="BudgetSchedule">
              {(props) => <BudgetSchedule {...props} />}
            </Stack.Screen>
            <Stack.Screen name="TargetAudience">
              {(props) => <TargetAudience {...props} />}
            </Stack.Screen>
            <Stack.Screen name="TargetAudience2">
              {(props) => <TargetAudience2 {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Confirm">
              {(props) => <Confirm {...props} />}
            </Stack.Screen>
            <Stack.Screen name="TargetAudi">
              {(props) => <TargetAudi {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Success">
              {(props) => <Success {...props} />}
            </Stack.Screen>
            <Stack.Screen name="RateMe">
              {(props) => <RateMe {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    last_activity
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    backgroundColor: "#fff",
  },
});
