import React, { useState, useEffect, useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Alert,
  FlatList,
  Dimensions,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import InfluanceBoard from "./InfluanceBoard";
import cstyles from "../../constants/cstyles";
import Visitor from "../Visitors/NewVistor";
import styles from "./Styles";
import option from "../../assets/icons/option.png";
import { Rating, AirbnbRating } from "react-native-elements";
import OptionsMenu from "react-native-options-menu";
import { connect } from "react-redux";
import {
  getUser,
  getmystory,
  getSavedInterest,
  getSavedGoals,
  getSavedTalents,
  getMyInterest,
} from "../../_actions/auth";
import {
  getVisitors,
  addFollower,
  insertvisitors,
  rateMe,
} from "../../_actions/home";
import { bindActionCreators } from "redux";
import config from "../../_config";
import * as Permissions from "expo-permissions";
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../../components/Loader";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";

function Info({
  navigation,
  user,
  getUser,
  profileReducer,
  getmystory,
  storiesReducer,
  fromWorld,
  visitors,
  getVisitors,
  route,
  getSavedInterest,
  savedInterests,
  savedGoals,
  addFollower,
  insertvisitors,
  rateMe,
  getSavedGoals,
  getSavedTalents,
  savedTalents,
}) {
  const [loader, setLoader] = useState(true);
  const [profile, setProfile] = useState(null);
  const [visitor, setVisitor] = useState(false);
  const [interests, setInterests] = useState(null);
  const [stories, setStories] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRated, setIsRate] = useState(false);
  const [goals, setGoals] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [talents, setTalents] = useState(null);
  const [personal, setPersonal] = useState(0);
  const [behaviour, setBehaviour] = useState(0);
  const [interaction, setInteraction] = useState(0);
  const [content, setContent] = useState(0);
  const [world, setWorld] = useState(0);
  const [trust, setTrust] = useState(0);

  const [isEditing, setEditing] = useState(false);
  const [imageEditing, setImageEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(false);

  useEffect(() => {
    let params = route.params;
    let visitorId = null;
    if (params && params.visitorId) {
      visitorId = params.visitorId;
      setVisitor(true);
      const formData = new FormData();
      formData.append("u_id", user.u_id);
      formData.append("reciver_id", visitorId);
      new Promise((rsl, rej) => {
        insertvisitors(formData, rsl, rej);
      });
    }
    const formData = new FormData();
    if (fromWorld) {
      formData.append("u_id", user.u_id);
      formData.append("logedinuserid", user.u_id);
      new Promise((rsl, rej) => {
        getVisitors(formData, rsl, rej);
      });
    } else {
      formData.append("u_id", visitorId);
      formData.append("logedinuserid", user.u_id);
    }
    new Promise((rsl, rej) => {
      getUser(formData, rsl, rej, visitorId);
    })
      .then((res) => {
        if (visitorId) {
          console.log("visitorres", res);
          if (res[0].is_follow == "Following") {
            setIsFollowing(true);
          }
          if (res[0].is_rated == "Rated") {
            setIsRate(true);
          }
          setProfile(res[0]);
        } else {
          console.log("profileReducer", profileReducer);
          setProfile(res[0]);
        }
        setLoader(false);
      })
      .catch((err) => {
        // Alert.alert("Roraa", err.message);
      });
  }, []);
  useFocusEffect(
    useCallback(() => {
      let params = route.params;
      let visitorId = null;
      if (params) {
        visitorId = params.visitorId;
      }
      const formData = new FormData();
      if (fromWorld) {
        formData.append("u_id", user.u_id);
      } else {
        formData.append("u_id", visitorId);
      }
      new Promise((rsl, rej) => {
        getmystory(formData, rsl, rej);
      }).then((res) => {
        if (visitorId) {
          setStories(res);
        } else {
          setStories(storiesReducer);
        }
        setLoader(false);
      });
      new Promise((rsl, rej) => {
        getSavedInterest(formData, rsl, rej, visitorId);
      }).then((res) => {
        if (visitorId) {
          setInterests(res);
        } else {
          setInterests(savedInterests);
        }
        setLoader(false);
      });
      //get saved goals
      new Promise((rsl, rej) => {
        getSavedGoals(formData, rsl, rej, visitorId);
      }).then((res) => {
        if (visitorId) {
          setGoals(res);
        } else {
          setGoals(savedGoals);
        }
        setLoader(false);
      });
      //get saved talents
      new Promise((rsl, rej) => {
        getSavedTalents(formData, rsl, rej, visitorId);
      }).then((res) => {
        if (visitorId) {
          setTalents(res);
        } else {
          setTalents(savedTalents);
        }
        setLoader(false);
      });
      //get saved talents
      new Promise((rsl, rej) => {
        getMyInterest(formData, rsl, rej, visitorId);
      }).then((res) => {
        if (visitorId) {
          setTalents(res);
        } else {
          setTalents(savedTalents);
        }
        setLoader(false);
      });
    }, [])
  );

  const handleFollower = () => {
    setLoader(true);
    let visitorId = route.params.visitorId;
    const data = new FormData();
    data.append("u_id", user.u_id);
    data.append("whom_following", visitorId);
    new Promise((rsl, rej) => {
      addFollower(data, rsl, rej);
    })
      .then((res) => {
        setLoader(false);
        setIsFollowing(true);
      })
      .catch((err) => {
        setLoader(false);
      });
  };
  const handleRate = () => {
    toggleModal();
    setLoader(true);
    const data = new FormData();
    let visitorId = route.params.visitorId;
    data.append("u_id", user.u_id);
    data.append("whom_rating", visitorId);
    data.append("personal_branding", personal);
    data.append("behaviour", behaviour);
    data.append("content_quality", content);
    data.append("world", world);
    data.append("trustworthy", trust);
    console.log(data);
    new Promise((rsl, rej) => {
      rateMe(data, rsl, rej);
    })
      .then((res) => {
        setLoader(false);
        setIsRate(true);
      })
      .catch((err) => {
        setLoader(false);
      });
  };

  const renderModal = () => {
    return (
      <Modal
        isVisible={isModalVisible}
        coverScreen={true}
        hasBackdrop={true}
        animationIn="slideInUp"
        onSwipeComplete={toggleModal}
        swipeDirection="up"
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 4,
            height: Dimensions.get("window").height / 1.1,
          }}
        >
          <AntDesign
            name="close"
            size={24}
            color={"tomato"}
            onPress={toggleModal}
            style={{ padding: 10 }}
          />
          <View style={{ margin: 5 }}>
            <Text
              style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
            >
              Personal Branding
            </Text>
            <AirbnbRating
              size={25}
              reviews={""}
              defaultRating={0}
              onFinishRating={(rating) => {
                setPersonal(rating);
              }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text
              style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
            >
              Behaviour
            </Text>
            <AirbnbRating
              size={25}
              reviews={""}
              defaultRating={0}
              onFinishRating={(rating) => {
                setBehaviour(rating);
              }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text
              style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
            >
              Activity,Interaction
            </Text>
            <AirbnbRating
              size={25}
              reviews={""}
              defaultRating={0}
              onFinishRating={(rating) => {
                setInteraction(rating);
              }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text
              style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
            >
              Content Quality
            </Text>
            <AirbnbRating
              size={25}
              reviews={""}
              defaultRating={0}
              onFinishRating={(rating) => {
                setContent(rating);
              }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text
              style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
            >
              World
            </Text>
            <AirbnbRating
              size={25}
              reviews={""}
              defaultRating={0}
              onFinishRating={(rating) => {
                setWorld(rating);
              }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text
              style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
            >
              TrustWorthy
            </Text>
            <AirbnbRating
              size={25}
              reviews={""}
              defaultRating={0}
              onFinishRating={(rating) => {
                setTrust(rating);
              }}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.buttonStyle,
              { marginTop: 10, padding: 20, width: "40%" },
            ]}
            onPress={() => {
              handleRate();
            }}
          >
            <Text style={styles.butnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (profile) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {visitor && (
          <View
            style={{
              marginBottom: 20,
              top: 0,
              padding: 20,
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="arrow-left" />
            </TouchableOpacity>
            {visitor && (
              <View style={[cstyles.row, cstyles.itemsCenter]}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  disabled={isFollowing}
                  onPress={() => handleFollower()}
                >
                  <Text style={styles.butnText}>
                    {isFollowing ? "Following" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        <ScrollView
          style={[cstyles.container, cstyles.padder, { paddingTop: 0 }]}
        >
          <View
            style={[
              cstyles.row,
              cstyles.flexBetweeen,
              cstyles.itemsCenter,
              cstyles.my_15,
              cstyles.mt_25,
            ]}
          >
            <Text style={styles.font_18}>{profile.fname}</Text>

            <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.butnText}>Follow</Text>
              </TouchableOpacity> */}
              {/* {!visitor && (
                <OptionsMenu
                  button={option}
                  buttonStyle={{
                    width: 17,
                    height: 17,

                    margin: 4,
                  }}
                  options={["Edit"]}
                  actions={[
                    () => navigation.navigate("EditProfile"),
                    // () => alert("hi"),
                  ]}
                />
              )} */}
            </View>
          </View>

          <View style={[cstyles.row, cstyles.my_15]}>
            <View>
              <Image
                style={{ width: 170, height: 200 }}
                source={{ uri: `${config.imageUrl}/${profile.dp}` }}
              />
            </View>
            <View
              style={[
                cstyles.flexCenter,
                cstyles.itemsCenter,
                cstyles.container,
              ]}
            >
              <View
                style={[cstyles.itemsCenter, cstyles.flexCenter, cstyles.my_5]}
              >
                <Text style={styles.textGrey}>Subscribers</Text>
                <Text style={[styles.textGrey, { fontWeight: "bold" }]}>
                  {profile.followers}
                </Text>
              </View>
              <View
                style={[cstyles.flexCenter, cstyles.itemsCenter, cstyles.my_5]}
              >
                <Text style={styles.textGrey}>Following</Text>
                <Text style={[styles.textGrey, { fontWeight: "bold" }]}>
                  {profile.following}
                </Text>
              </View>
              <View
                style={(cstyles.itemsCenter, cstyles.flexCenter, cstyles.my_5)}
              >
                <Text style={styles.textGrey}>Score</Text>
                <Text
                  style={[
                    styles.textGrey,
                    { fontWeight: "bold", alignSelf: "center" },
                  ]}
                >
                  {profile.is_rora_gold === "Yes" && profile.score}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <InfluanceBoard profile={profile} />
          </View>
          <View
            style={[
              cstyles.boxShadow,
              cstyles.row,
              cstyles.flexBetweeen,
              cstyles.itemsCenter,
              cstyles.my_15,
              cstyles.padder,
              styles.br_10,
            ]}
          >
            <View>
              <Text style={styles.mainText}>{profile.rate}</Text>
              <Text style={{ fontSize: 11 }}>
                Number of people evaluated my account
              </Text>
            </View>
            <View>
              {visitor && (
                <View style={[cstyles.row, cstyles.itemsCenter]}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    disabled={isRated}
                    onPress={() => toggleModal()}
                  >
                    <Text style={styles.butnText}>
                      {isRated ? "Rated" : "Rate me"}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          <View style={[cstyles.boxShadow, cstyles.padder, styles.br_10]}>
            <View
              style={[cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen]}
            >
              <Text style={styles.font_18}>My Story</Text>
              {!visitor && (
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => navigation.navigate("AddStory")}
                >
                  <MaterialIcons name="edit" size={15} color="white" />
                </TouchableOpacity>
              )}
            </View>
            {stories &&
              stories.map((story, i) => {
                return (
                  <View
                    key={i}
                    style={[
                      cstyles.boxShadow,
                      cstyles.my_10,
                      styles.br_10,
                      cstyles.px_10,
                      cstyles.py_20,
                    ]}
                  >
                    <View
                      style={[
                        cstyles.row,
                        cstyles.flexBetweeen,
                        cstyles.itemsCenter,
                        cstyles.py_10,
                      ]}
                    >
                      <Text style={styles.storyHeader}>{story.mytitle}</Text>
                      {!visitor && (
                        <TouchableOpacity style={styles.iconButton_sm}>
                          <FontAwesome5
                            name="ellipsis-v"
                            size={10}
                            color="white"
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    <View>
                      <Text style={styles.storyText}>{story.description}</Text>
                    </View>
                  </View>
                );
              })}
          </View>

          <View style={cstyles.my_15}>
            <View style={[cstyles.padder, cstyles.boxShadow, styles.br_10]}>
              <View
                style={[cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen]}
              >
                <View style={cstyles.row}>
                  <AntDesign name="heart" size={20} color="#f5656b" />
                  <Text style={[styles.font_18, cstyles.ml_10]}>Interest</Text>
                </View>
                {!visitor && (
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() =>
                      navigation.navigate("AddInterest", { formInfo: true })
                    }
                  >
                    <Ionicons name="md-add" size={15} color="white" />
                  </TouchableOpacity>
                )}
              </View>
              {savedInterests && (
                <FlatList
                  data={savedInterests}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <View
                      style={[cstyles.row, cstyles.flexWrap, cstyles.mt_10]}
                    >
                      <View
                        style={[
                          cstyles.row,
                          cstyles.itemsCenter,
                          cstyles.flexBetweeen,
                          cstyles.boxShadow,
                          styles.br_10,
                          cstyles.px_15,
                          cstyles.py_10,
                          styles.w_100,
                          // cstyles.my_5,
                        ]}
                      >
                        <Text style={styles.mainSubtitle}>{item.Interest}</Text>
                        {!visitor && (
                          <TouchableOpacity style={styles.iconButton_sm}>
                            <FontAwesome5
                              name="ellipsis-v"
                              size={10}
                              color="white"
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  )}
                />
              )}
            </View>
          </View>

          <View style={cstyles.my_15}>
            <View style={[cstyles.padder, cstyles.boxShadow, styles.br_10]}>
              <View
                style={[cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen]}
              >
                <View style={cstyles.row}>
                  <MaterialCommunityIcons
                    name="arch"
                    size={20}
                    color="#f5656b"
                  />
                  <Text style={[styles.font_18, cstyles.ml_10]}>Goals</Text>
                </View>
                {!visitor && (
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.navigate("AddGoal")}
                  >
                    <Ionicons name="md-add" size={15} color="white" />
                  </TouchableOpacity>
                )}
              </View>
              {savedGoals && (
                <FlatList
                  data={savedGoals}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <View
                      style={[cstyles.row, cstyles.flexWrap, cstyles.mt_10]}
                    >
                      <View
                        style={[
                          cstyles.row,
                          cstyles.itemsCenter,
                          cstyles.flexBetweeen,
                          cstyles.boxShadow,
                          styles.br_10,
                          cstyles.px_15,
                          cstyles.py_10,
                          styles.w_100,
                          // cstyles.my_5,
                        ]}
                      >
                        <Text style={styles.mainSubtitle}>{item.Text}</Text>
                        {!visitor && (
                          <TouchableOpacity style={styles.iconButton_sm}>
                            <FontAwesome5
                              name="ellipsis-v"
                              size={10}
                              color="white"
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  )}
                />
              )}
            </View>
          </View>
          <View style={cstyles.my_15}>
            <View style={[cstyles.padder, cstyles.boxShadow, styles.br_10]}>
              <View
                style={[cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen]}
              >
                <View style={cstyles.row}>
                  <MaterialIcons name="stars" size={20} color="#f5656b" />
                  <Text style={[styles.font_18, cstyles.ml_10]}>Talents</Text>
                </View>
                {!visitor && (
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.navigate("AddTalent")}
                  >
                    <Ionicons name="md-add" size={15} color="white" />
                  </TouchableOpacity>
                )}
              </View>
              {savedTalents && (
                <FlatList
                  data={savedTalents}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <View
                      style={[cstyles.row, cstyles.flexWrap, cstyles.mt_10]}
                    >
                      <View
                        style={[
                          cstyles.row,
                          cstyles.itemsCenter,
                          cstyles.flexBetweeen,
                          cstyles.boxShadow,
                          styles.br_10,
                          cstyles.px_15,
                          cstyles.py_10,
                          styles.w_100,
                          // cstyles.my_5,
                        ]}
                      >
                        <Text style={styles.mainSubtitle}>{item.Text}</Text>
                        {!visitor && (
                          <TouchableOpacity style={styles.iconButton_sm}>
                            <FontAwesome5
                              name="ellipsis-v"
                              size={10}
                              color="white"
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  )}
                />
              )}
            </View>
          </View>
          {!visitor && (
            <View
              style={[
                cstyles.boxShadow,
                styles.br_10,
                cstyles.padder,
                { marginBottom: 50 },
              ]}
            >
              <View>
                <Text style={styles.font_18}>My Profile Visitors</Text>
              </View>
              {profile.is_rora_gold === "Yes" && (
                <ScrollView horizontal>
                  {visitors &&
                    visitors.map((item, i) => {
                      return (
                        <View
                          key={i}
                          style={[
                            cstyles.row,
                            cstyles.flexBetweeen,
                            cstyles.itemsCenter,
                            cstyles.mt_15,
                          ]}
                        >
                          <Visitor
                            image={item.dp}
                            name={item.fname}
                            id={item.u_id}
                            navigation={navigation}
                          />
                        </View>
                      );
                    })}
                </ScrollView>
              )}
            </View>
          )}
          {isModalVisible && renderModal()}
        </ScrollView>

        {loader && <Loader />}
      </SafeAreaView>
    );
  } else {
    return <Loader />;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.authReducer.user,
    profileReducer: state.authReducer.profile,
    storiesReducer: state.homeReducer.stories,
    visitors: state.homeReducer.visitors,
    savedInterests: state.homeReducer.savedInterests,
    savedGoals: state.homeReducer.savedGoals,
    savedTalents: state.homeReducer.savedTalents,
    myInterest: state.homeReducer.myInterest,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUser,
      getmystory,
      getVisitors,
      getSavedInterest,
      getSavedGoals,
      addFollower,
      insertvisitors,
      rateMe,
      getSavedTalents,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
