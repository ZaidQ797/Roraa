import React, { Fragment } from "react";
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import MultiSelect from "react-native-multiple-select";
import Loader from "../../components/Loader";
import mime from "mime";
import cstyles from "../../constants/cstyles";
import Colors from "../../constants/Colors";
import { Header, Left, Body, Icon, Right } from "native-base";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { LiteCreditCardInput } from "react-native-credit-card-input";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { newAds } from "../../_actions/home";

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditInfo: null,
      loader: false,
    };
  }
  handleAd = () => {
    const {
      keywords,
      interests,
      languages,
      title,
      image,
      appleUrl,
      androidUrl,
      minBudget,
      maxBudget,
      totalInstalls,
      time,
      age,
      gender,
      country,
      device,
      personality,
      goals,
      talents,
    } = this.props.route.params;
    if (this.state.creditInfo) {
      const newImageUri = image && "file:///" + image.split("file:/").join("");
      const params = new FormData();
      params.append("title", title);
      params.append("apple_url", appleUrl);
      // params.append("file", {
      //   uri: newImageUri,
      //   type: mime.getType(newImageUri),
      //   name: newImageUri.split("/").pop(),
      // });
      // params.append("android_url", androidUrl);
      // params.append("min_budget", minBudget);
      // params.append("max_budget", maxBudget);
      // params.append("total_installs", totalInstalls);
      // params.append("time", time);
      // params.append("age", age);
      // params.append("gender", gender);
      // params.append("country", country);
      // params.append("device", device);
      // params.append("personality[]", personality);
      // params.append("goals[]", goals);
      // params.append("talents[]", talents);
      // params.append("u_id", this.props.user && this.props.user.u_id);
      // params.append("keywords[]", keywords);
      // params.append("languages[]", languages);
      // params.append("interest[]", interests);
      new Promise((rsl, rej) => {
        this.setState({ loader: true }, () => {
          this.props.newAds(params, rsl, rej);
        });
      })
        .then((res) => {
          this.setState({ loader: false }, () => {
            this.props.navigation.navigate("Success");
          });
        })
        .catch((err) => {
          this.setState({ loader: false }, () => {
            Alert.alert("Roraa", err.message);
          });
        });
    } else {
      Alert.alert("Roraa", "Please enter credit card details.");
    }
  };
  render() {
    const {
      keywords,
      interests,
      languages,
      title,
      image,

      minBudget,
      maxBudget,
      totalInstalls,
      time,
      age,
      gender,
      country,
      device,
      personality,
      goals,
      talents,
    } = this.props.route.params;
    console.log(languages);

    return (
      <SafeAreaView style={cstyles.container}>
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
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.headerText}>Confirmation</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <View
              style={{
                flex: 0.4,
                marginRight: 10,
                padding: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={[styles.header, { textAlign: "center" }]}
                numberOfLines={2}
              >
                Your{`\n`}Campaign
              </Text>
            </View>
            <View
              style={{
                flex: 0.8,
                padding: 20,
                flexDirection: "row",
                backgroundColor: "#F8F8F8",
                elevation: 0.5,
                borderRadius: 2,
              }}
            >
              <Image
                source={{ uri: image }}
                style={styles.imgBg}
                resizeMode={"contain"}
              />
              <View>
                <Text style={[styles.header]} numberOfLines={1}>
                  {title}
                </Text>
                <Text style={[styles.butnText]}>
                  Loremp ipsum dollar the sign
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <View
              style={{
                flex: 0.2,
                marginRight: 10,
                padding: 10,
                justifyContent: "center",
              }}
            >
              <Text style={[styles.header, { textAlign: "center" }]}>
                Your Target Audiences
              </Text>
            </View>
            <View
              style={{
                flex: 0.7,
                padding: 20,
                flexDirection: "row",
                backgroundColor: "#F8F8F8",
                elevation: 0.5,
                borderRadius: 2,
              }}
            >
              <View>
                <Text style={[styles.butnText, { width: "80%" }]}>
                  {`${age}  ${gender}  ${country}`}
                </Text>
                <Text style={[styles.butnText, { width: "90%" }]}>
                  {`Languages:${languages}`}
                </Text>
                <Text style={[styles.butnText, { width: "80%" }]}>
                  {`Interests:${interests}`}
                </Text>
                <Text style={[styles.butnText, { width: "80%" }]}>
                  {`Talents:${talents}`}
                </Text>
                <Text style={[styles.butnText, { width: "80%" }]}>
                  {`Goals:${goals}`}
                </Text>
                <Text style={[styles.butnText, { width: "90%" }]}>
                  {`Personality:${personality}`}
                </Text>
                <Text style={[styles.butnText, { width: "90%" }]}>
                  {`keywords:${keywords}`}
                </Text>
                <Text
                  style={[styles.butnText, { width: "70%" }]}
                  numberOfLines={2}
                >
                  {`Device:${device}`}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <View
              style={{
                flex: 0.4,
                marginRight: 10,
                padding: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={[styles.header, { textAlign: "center" }]}
                numberOfLines={2}
              >
                Your Budget
              </Text>
            </View>
            <View
              style={{
                flex: 0.8,
                padding: 20,
                flexDirection: "row",
                backgroundColor: "#F8F8F8",
                elevation: 0.5,
                borderRadius: 2,
              }}
            >
              <View>
                <Text style={[styles.header]} numberOfLines={1}>
                  {`Min: ${minBudget} Max: ${maxBudget}`}
                </Text>
                <Text style={[styles.butnText, { width: "90%" }]}>
                  {`Total Install: ${totalInstalls}\n`}
                  {`Time: ${time}\n`}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <View
              style={{
                flex: 0.4,
                marginRight: 10,
                padding: 10,
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/images/master_card.jpg")}
                style={styles.imgBg}
                resizeMode={"contain"}
              />
            </View>
            <View
              style={{
                flex: 0.8,
                padding: 20,
                flexDirection: "row",
                backgroundColor: "#F8F8F8",
                elevation: 0.5,
                borderRadius: 2,
              }}
            >
              <View>
                <Text style={[styles.header]} numberOfLines={1}>
                  {this.state.creditInfo && this.state.creditInfo.values.type}
                </Text>
                <Text style={[styles.butnText, { width: "90%" }]}>
                  {this.state.creditInfo &&
                    `Card No:${this.state.creditInfo.values.number}`}
                </Text>
                <Text style={[styles.butnText, { width: "70%" }]}>
                  {this.state.creditInfo &&
                    `Expiray: ${this.state.creditInfo.values.expiry}`}
                </Text>
                <Text style={[styles.butnText, { width: "70%" }]}>
                  {this.state.creditInfo &&
                    `CVC:${this.state.creditInfo.values.cvc}`}
                </Text>
              </View>
            </View>
          </View>
          <LiteCreditCardInput
            onChange={(change) => this.setState({ creditInfo: change })}
          />
          <TouchableOpacity
            style={styles.butnStyle}
            onPress={() => {
              this.handleAd();
            }}
          >
            <Text style={{ color: "white" }}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
        {this.state.loader && <Loader />}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      newAds,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Confirm);

const styles = StyleSheet.create({
  imageContainer: {
    width: deviceWidth,
    height: deviceHeight / 2,
    position: "relative",
  },
  imgBg: {
    width: 80,
    height: 70,
  },
  butnStyle: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    backgroundColor: "#f5656b",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "60%",
    alignSelf: "center",
  },

  butnText: {
    fontSize: 11,
    width: "50%",
    marginTop: 5,
  },
  headerText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#52514f",
    margin: 10,
  },
  backBtn: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
    marginLeft: 25,
    marginTop: 30,
  },
  iconButton: {
    backgroundColor: "#f5656b",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    bottom: -10,
    right: 30,
  },
  header: {
    fontSize: 17,
    fontWeight: "100",
    color: "#000",
    fontWeight: "bold",
    // textAlign: "center",
  },
  detail: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F86383",
  },
});
