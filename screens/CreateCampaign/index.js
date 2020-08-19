import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  Component,
} from "react";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Right,
  Input,
} from "native-base";
import { Entypo, Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import styles from "./styles";
import cstyle from "../../constants/cstyles";
import cstyles from "../../constants/cstyles";

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "", appleUrl: "", androidUrl: "", title: "" };
  }

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 0.5,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  handleCampaign = () => {
    const { title, image, appleUrl, androidUrl } = this.state;
    if (!title) {
      Alert.alert("Rorra", "Kindly enter campiagn title");
      return;
    } else if (!image) {
      Alert.alert("Rorra", "Kindly pick image");
      return;
    } else if (!appleUrl) {
      Alert.alert("Rorra", "Kindly enter apple store url");
      return;
    } else if (!androidUrl) {
      Alert.alert("Rorra", "Kindly enter play store url");
      return;
    } else {
      this.props.navigation.navigate("BudgetSchedule", {
        title: title,
        image: image,
        appleUrl: appleUrl,
        androidUrl: androidUrl,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={[cstyle.container, cstyle.bg_white]}>
        <Header
          noShadow
          style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
        >
          <Left>
            <Entypo
              name="chevron-small-left"
              size={24}
              color="black"
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </Left>
          <Right></Right>
        </Header>
        <ScrollView
          style={{
            flexGrow: 1,
          }}
        >
          <Text style={[styles.mainText, { alignSelf: "center" }]}>
            App Install
          </Text>
          <Text style={[styles.textStyle, { margin: 10 }]}>
            Create Campaign
          </Text>
          <Input
            value={this.state.title}
            onChangeText={(title) => {
              this.setState({ title });
            }}
            placeholder="Title"
            style={{
              margin: 10,
              borderBottomWidth: 1,
              width: "90%",
              borderColor: "#ddd",
            }}
          />
          {this.state.image !== "" ? (
            <TouchableOpacity
              onPress={() => {
                this._pickImage();
              }}
            >
              <Image
                resizeMode={"cover"}
                style={[
                  styles.photoContainer,
                  cstyles.selfCenter,
                  styles.boxShadow,
                  cstyles.my_10,
                ]}
                source={{ uri: this.state.image }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this._pickImage()}>
              <View
                style={[
                  styles.photoContainer,
                  cstyles.selfCenter,
                  styles.boxShadow,
                  cstyles.my_10,
                ]}
              >
                <AntDesign name="upload" size={24} color="grey" />
                <Text style={styles.textStyle}>Upload Photo</Text>
              </View>
            </TouchableOpacity>
          )}
          <View
            style={{
              flexDirection: "row",

              marginTop: "10%",
              flex: 1,
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Image
                source={require("../../assets/images/app_store.png")}
                resizeMode={"contain"}
                style={{ height: 80, width: 80, alignSelf: "center" }}
              />
              <Input
                onChangeText={(appleUrl) => {
                  this.setState({ appleUrl });
                }}
                value={this.state.appleUrl}
                placeholder="Url"
                style={{
                  margin: 10,

                  width: "60%",
                  backgroundColor: "#f8f8f8",
                  elevation: 1,
                  borderRadius: 3,
                  alignSelf: "center",
                }}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <Image
                source={require("../../assets/images/play_store.png")}
                resizeMode={"contain"}
                style={{ height: 80, width: 80, alignSelf: "center" }}
              />
              <Input
                onChangeText={(androidUrl) => {
                  this.setState({ androidUrl });
                }}
                value={this.state.androidUrl}
                placeholder="Url"
                style={{
                  margin: 10,
                  alignSelf: "center",
                  width: "60%",
                  backgroundColor: "#f8f8f8",
                  elevation: 1,
                  borderRadius: 3,
                }}
              />
            </View>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                this.handleCampaign();
              }}
            >
              <FontAwesome name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CreateCampaign;
