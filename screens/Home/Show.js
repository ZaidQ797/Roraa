import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
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
import styles from "./styles";
import cstyles from "../../constants/cstyles";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getShows, favShow, showViewCount } from "../../_actions/home";
import config from "../../_config";
import Loader from "../../components/Loader";
import { ActivityIndicator } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

function Show({ shows, user, getShows, navigation, favShow, showViewCount }) {
  const [loader, setLoader] = useState(false);
  const [initial, setInitial] = useState(true);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 100);
  }, []);
  const getData = () => {
    const formData = new FormData();
    formData.append("u_id", user.u_id);
    formData.append("is_home", "Yes");

    new Promise((rsl, rej) => {
      getShows(formData, rsl, rej);
    })
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
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
        // Alert.alert("Roraa", err.message);
      });
  };
  const handleVideoClick = (uri, id) => {
    const formData = new FormData();
    formData.append("u_id", user.u_id);
    formData.append("show_id", id);

    new Promise((rsl, rej) => {
      showViewCount(formData, rsl, rej);
    })
      .then((res) => {
        navigation.navigate("VideoPlay", { uri: uri });
      })
      .catch((err) => {
        // Alert.alert("Roraa", err.message);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  const onViewRef = React.useRef((viewableItmes) => {
    console.log(viewableItmes.changed);
  });
  const viewConfigRef = React.useRef({
    itemVisiblePercentThreshold: 500,
    waitForInteraction: true,
  });

  showCounter = (counter, files) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DisplayMedia", { files })}
        style={{
          alignItems: "center",
          width: "32%",
        }}
      >
        <View
          style={{
            height: 95,
            backgroundColor: "lightgray",
            width: "98%",
            borderWidth: 1,
            borderColor: "white",
          }}
        />
        <View
          style={{
            height: 95,
            backgroundColor: "lightgray",
            width: "98%",
            position: "absolute",
            top: 5,
            left: 5,
            zIndex: -1,
          }}
        />
        <View
          style={{
            height: 95,
            width: "98%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>+ {counter} More</Text>
        </View>
      </TouchableOpacity>
    );
  };
  showImage = (image, main, widthPercentage) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: widthPercentage,
          marginBottom: 5,
          marginRight: main ? 0 : "1%",
        }}
      >
        <Image
          // resizeMode={"contain"}
          style={{
            width: "100%",
            height: main ? 200 : 100,
            zIndex: 1000,
          }}
          source={{ uri: `${config.imageUrl}/${image.file}` }}
        />
        <ActivityIndicator style={{ position: "absolute" }} />
      </View>
    );
  };
  showVideo = (video, main, widthPercentage) => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: widthPercentage,
        }}
        onPress={() => {
          setLoader(true);
          video.file !== ""
            ? handleVideoClick(video.file, video.id)
            : alert("Video not found");
        }}
      >
        <Video
          source={{ uri: `${config.imageUrl}/${video.file}` }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          // shouldPlay
          style={{ width: "100%", height: main ? 200 : 100, zIndex: 1000 }}
        />
        <ActivityIndicator style={{ position: "absolute" }} />
        <AntDesign
          name="playcircleo"
          size={24}
          color="white"
          style={{ position: "absolute", zIndex: 1000000 }}
        />
      </TouchableOpacity>
    );
  };
  renderMedia = (file) => {
    if (file.length == 1) {
      return (
        <View style={styles.row}>
          {file[0].type == "image"
            ? showImage(file[0], true, "100%")
            : file[0].type == "video" && showVideo(file[0], true, "100%")}
        </View>
      );
    } else if (file.length == 2) {
      return (
        <View style={styles.row}>
          {file.map((media) => {
            if (media.type == "image") return showImage(media, false, "48%");
            else if (media.type == "video")
              return showVideo(media, false, "48%");
          })}
        </View>
      );
    } else if (file.length == 3) {
      file.map((media, i) => {
        if (i == 0) {
          if (media.type == "image") {
            return showImage(media, true, "100%");
          } else if (media.type == "video") {
            return showVideo(media, true, "100%");
          }
        } else {
          if (media.type == "image") {
            return showImage(media, false, "48%");
          } else if (media.type == "video") {
            return showVideo(media, false, "48%");
          }
        }
      });
    } else if (file.length > 3) {
      return (
        <View style={styles.row}>
          {file.map((media, i) => {
            if (i > 3) {
              return null;
            }
            if (i > 2) {
              return showCounter(file.length - 3, file);
            }
            if (i == 0) {
              if (media.type == "image") {
                return showImage(media, true, "100%");
              } else if (media.type == "video") {
                return showVideo(media, true, "100%");
              }
            } else {
              if (media.type == "image") {
                return showImage(media, false, "32%");
              } else if (media.type == "video") {
                return showVideo(media, false, "32%");
              }
            }
          })}
        </View>
      );
    }
  };
  if (initial) {
    return null;
  } else if (shows) {
    return (
      <View style={{ padding: 10, flex: 1, width: "100%" }}>
        <View>
          <FlatList
            data={shows}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
            renderItem={({ item }) => (
              <View style={[{ elevation: 3 }, cstyles.my_10]}>
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
                  {item.file.length > 0 && renderMedia(item.file)}
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
              </View>
            )}
          />
        </View>
        {loader && <Loader />}
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
      showViewCount,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
