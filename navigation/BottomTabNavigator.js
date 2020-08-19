import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import {
  AntDesign,
  Feather,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import cstyles from "../constants/cstyles";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import InboxScreen from "../screens/Inbox";
import ProfileScreen from "../screens/Profile";
import WebSearchScreen from "../screens/WebSearch";
import CameraScreen from "../screens/Camera";
import NotificationScreen from "../screens/Notification";
import { Linking } from "react-native";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Inbox = () => {
  return (
    <Stack.Navigator headerMode="none" >
      <Stack.Screen name='inboxHome' component={InboxScreen} options={{ title: 'Inbox' }} />
    </Stack.Navigator>
  )
}

const Notifications = () => {
  return (
    <Stack.Navigator headerMode="none" >
      <Stack.Screen name='NotificationScreenHome' component={NotificationScreen} options={{ title: 'Inbox' }} />
    </Stack.Navigator>
  )
}

const INITIAL_ROUTE_NAME = "Home";

function BottomTabNavigator({ navigation }) {
  return (
    <LinearGradient
      colors={[Colors.primaryGradient, Colors.secondryGradient]}
      start={[0.1, 0.1]}
      end={[0.5, 0.5]}
      style={cstyles.container}
    >
      <Tab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "transparent" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
          }}
        />
        <Tab.Screen
          name="Web"
          component={WebSearchScreen}
          options={{
            tabBarLabel: "Web Search",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="search-web"
                size={24}
                color="white"
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarLabel: "Camera",
            tabBarIcon: () => <Entypo name="picasa" size={24} color="white" />,
          }}
        /> */}
        <Tab.Screen
          name="Inbox"
          children={Inbox}
          options={{
            tabBarLabel: "Inbox",
            tabBarIcon: () => (
              <Feather name="message-square" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Star"
          component={Notifications}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: () => (
              <Ionicons
                name="ios-notifications-outline"
                size={24}
                color="white"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </LinearGradient>
  );
}

export default BottomTabNavigator;
