import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Image, FlatList, TouchableOpacity, Alert } from "react-native";
import {
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Right,
} from "native-base";
import { Video } from "expo-av";
import { Entypo } from "@expo/vector-icons";
import cstyles from "../../constants/cstyles";
import { EvilIcons } from "@expo/vector-icons";
import styles from "./Styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getShows, favShow } from "../../_actions/home";
import config from "../../_config";
import Loader from "../../components/Loader";
import { ActivityIndicator } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

function Show({ shows, user, getShows, navigation, favShow }) {
  const [loader, setLoader] = useState(true);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  const getData = () => {
    const formData = new FormData();
    formData.append("u_id", user.u_id);
    formData.append("is_home", "No");

    new Promise((rsl, rej) => {
      setLoader(true);
      getShows(formData, rsl, rej);
    })
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);

        // Alert.alert("Roraa", err.message);
      });
  };
  const handleFav = (showId) => {
    const formData = new FormData();
    formData.append("u_id", user.u_id);
    formData.append("show_id", showId);
    console.log(formData);
    new Promise((rsl, rej) => {
      favShow(formData, rsl, rej);
    })
      .then((res) => {
        getData();
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        // Alert.alert("Roraa", err.message);
      });
  };
  if (shows) {
    return (
      <View style={{ padding: 10, flex: 1, width: "100%" }}>
        <Fragment>
          <FlatList
            data={shows}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[{ elevation: 3 }, cstyles.my_10]}
                onPress={() => {
                  item.file !== ""
                    ? navigation.navigate("VideoPlay", { uri: item.file })
                    : alert("Video Not found");
                }}
              >
                <CardItem>
                  <Left>
                    <Body>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Image
                          resizeMode={"contain"}
                          style={{
                            height: 40,
                            width: 40,
                          }}
                          source={{ uri: `${config.imageUrl}/${item.dp}` }}
                        />
                        <Text style={{ alignSelf: "center" }}>
                          {item.fname}
                        </Text>
                      </View>
                      <Text style={styles.storyText}>{item.world_date}</Text>
                    </Body>
                  </Left>
                  <TouchableOpacity onPress={() => handleFav(item.id)}>
                    <Entypo
                      name={item.is_liked === "No" ? "heart-outlined" : "heart"}
                      size={25}
                      color={item.is_liked === "No" ? "gray" : "red"}
                    />
                  </TouchableOpacity>
                </CardItem>
                <CardItem cardBody>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Video
                      source={{ uri: `${config.imageUrl}/${item.file}` }}
                      rate={1.0}
                      volume={1.0}
                      isMuted={false}
                      resizeMode="cover"
                      // shouldPlay
                      style={{ width: 300, height: 200, zIndex: 1000 }}
                    />
                    <ActivityIndicator style={{ position: "absolute" }} />
                  </View>
                </CardItem>
                <CardItem
                  style={[
                    cstyles.row,
                    cstyles.flexBetweeen,
                    cstyles.itemsCenter,
                  ]}
                >
                  <View style={[cstyles.row, cstyles.itemsCenter]}>
                    <TouchableOpacity>
                      <EvilIcons name="heart" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.storyText}>{item.heart}</Text>
                  </View>
                  <View style={[cstyles.row, cstyles.itemsCenter]}>
                    <TouchableOpacity>
                      <EvilIcons name="eye" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.storyText}>{item.Views}</Text>
                  </View>
                  <View style={[cstyles.row, cstyles.itemsCenter]}>
                    <TouchableOpacity>
                      <EvilIcons name="location" size={20} color="gray" />
                    </TouchableOpacity>
                    <Text style={styles.storyText}>{item.Location}</Text>
                  </View>
                </CardItem>
              </TouchableOpacity>
            )}
          />
        </Fragment>
      </View>
    );
  } else {
    return (
      <View
        style={[
          cstyles.bg_white,
          {
            flex: 1,
            alignSelf: "center",
            justifyContent: "center",
            alighItems: "center",
          },
        ]}
      >
        <Loader />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.authReducer.user,
    shows: state.homeReducer.shows,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getShows,
      favShow,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
