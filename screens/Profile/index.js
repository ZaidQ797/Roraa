import React, { useState, useEffect } from "react";
import { Header, Right, Left, Body } from "native-base";
import { View, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import cstyles from "../../constants/cstyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import GridView from "./Grid";

import { connect } from "react-redux";
import { getUser } from "../../_actions/auth";
import { bindActionCreators } from "redux";

function Profile({ navigation, user, getUser, profile }) {
  const [images, setImages] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
  ]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const formData = new FormData();
    formData.append("u_id", user.u_id);
    new Promise((rsl, rej) => {
      getUser(formData, rsl, rej);
    })
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        // Alert.alert("Roraa", err.message);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        noShadow
        style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
      >
        <Left>
          <Entypo name="chevron-small-left" size={24} color="black" />
        </Left>
        <Body />
        <Right>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="ios-menu" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView style={[styles.container, cstyles.padder]}>
        <View>
          <Text style={styles.mainText}>My Profile</Text>
        </View>
        <View style={[cstyles.row, cstyles.flexBetweeen, cstyles.pt_15]}>
          <View>
            <Text style={styles.nameText}>Dayna Bairstow</Text>
            <Text style={styles.addressText}>Barcelona, Spain</Text>
          </View>
          <View style={styles.profileImage}>
            <Image />
          </View>
        </View>
        <View style={[cstyles.row, cstyles.flexBetweeen, cstyles.pt_15]}>
          <View style={[cstyles.row, cstyles.flexBetweeen]}>
            <View>
              <Text style={[styles.secondryColor, styles.followerNumber]}>
                1278
              </Text>
              <Text style={styles.followeText}>Followers</Text>
            </View>
            <View style={cstyles.ml_20}>
              <Text style={[styles.primaryColor, styles.followerNumber]}>
                358
              </Text>
              <Text style={styles.followeText}>Following</Text>
            </View>
          </View>
          <View style={[cstyles.row, cstyles.flexBetweeen]}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[cstyles.ml_10, styles.iconButton]}>
              <AntDesign name="edit" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[cstyles.row, styles.grid, cstyles.my_20]}>
          {images.map((image, index) => (
            <GridView key={image} index={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.authReducer.user,
    profile: state.authReducer.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUser,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "lightgrey",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 200,
    backgroundColor: "#23395d",
  },
  primaryColor: {
    color: "#00CE9F",
  },
  secondryColor: {
    color: "#C41851",
  },
  followerNumber: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: -1,
  },
  followeText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  followButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#7332cb",
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  iconButton: {
    padding: 5,
    backgroundColor: "#e87f46",
    borderRadius: 40,
  },
  grid: {
    flexWrap: "wrap",
  },
});
