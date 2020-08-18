import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  AsyncStorage,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import cstyles from "../../constants/cstyles";
import appjson from "../../app.json";

export default class Splash extends React.Component {
  componentDidMount = async () => {
    await AsyncStorage.removeItem("showInterests");
  };
  render() {
    const { navigation, token } = this.props;
    return (
      <View style={[cstyles.container, cstyles.center]}>
        {/* // Background Linear Gradient */}
        <LinearGradient
          colors={[Colors.primaryGradient, Colors.secondryGradient]}
          start={[0.1, 0.1]}
          end={[0.7, 0.7]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />
        <Image
          source={require("./../../assets/images/icon.png")}
          style={cstyles.imageLogo}
        />
        <Text style={cstyles.titleText}>{appjson.expo.name}</Text>
        <Text style={cstyles.sloganText}>{appjson.slogan}</Text>

        <View style={cstyles.bottomFooter}>
          <TouchableOpacity
            style={[cstyles.button, cstyles.roundEdgeButton]}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={cstyles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={cstyles.button}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={cstyles.linkText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
