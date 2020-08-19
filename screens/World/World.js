import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import Logo from "../../assets/images/logo_text.png";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import ButtonGradient from "../../components/ButtonGradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Thumbnail } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWorlds, deleteWorld } from "../../_actions/home";
import config from "../../_config";
import { useFocusEffect } from "@react-navigation/native";
import OptionsMenu from "react-native-options-menu";
const more = require("../../assets/icons/more.png");

const World = ({ navigation, getWorlds, user, worlds, deleteWorld }) => {
  // const dispatch = useDispatch();
  // const { myWorlds, isLoading, isSuccess, errMsg } = useSelector(
  //   (state) => state.world
  // );
  useFocusEffect(
    useCallback(() => {
      const data = new FormData();
      data.append("u_id", user.u_id);
      data.append("is_home", "No");

      new Promise((rsl, rej) => {
        getWorlds(data, rsl, rej);
      })
        .then((res) => {})
        .catch((err) => {
          // Alert.alert("Roraa", err.message);
        });
    }, [])
  );
  const handleDelete = (id) => {
    const param = new FormData();
    param.append("world_id", id);
    new Promise((rsl, rej) => {
      deleteWorld(param, rsl, rej);
    })
      .then((res) => {
        const data = new FormData();
        data.append("u_id", user.u_id);
        data.append("is_home", "No");

        new Promise((rsl, rej) => {
          getWorlds(data, rsl, rej);
        })
          .then((res) => {})
          .catch((err) => {
            // Alert.alert("Roraa", err.message);
          });
        Alert.alert("Roraa", res.message);
      })
      .catch((err) => {});
  };

  return (
    <ScrollView style={[cstyles.container, { paddingBottom: 50 }]}>
      <View style={[cstyles.container, styles.logoContainer, cstyles.padder]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddWorld", { item: null })}
        >
          <Text style={styles.butnText}>Add World</Text>
        </TouchableOpacity>
      </View>
      <View style={[cstyles.py_20]}>
        {worlds && (
          <FlatList
            data={worlds}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item + index.toString()}
            snapToAlignment="end"
            decelerationRate={"fast"}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <ImageBackground
                  imageStyle={{ borderRadius: 20 }}
                  source={{
                    uri: `${config.imageUrl}/${item.file}`,
                  }}
                  style={[styles.imgCard]}
                >
                  <View style={{ alignSelf: "flex-end" }}>
                    <OptionsMenu
                      button={more}
                      buttonStyle={{
                        width: 25,
                        height: 20,
                        resizeMode: "contain",
                        margin: 8,
                        tintColor: "black",
                      }}
                      // destructiveIndex={0}
                      options={["Edit", "Delete"]}
                      actions={[
                        () => {
                          navigation.navigate("AddWorld", {
                            item: item,
                            from: "edit",
                          });
                        },

                        () => {
                          handleDelete(item.world_id);
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.imageBottom,
                      cstyles.row,
                      cstyles.itemsCenter,
                    ]}
                  >
                    {item.dp ? (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Thumbnail
                          small
                          source={{
                            uri: `${config.imageUrl}/${item.dp}`,
                          }}
                          style={{ zIndex: 100 }}
                        />
                        <ActivityIndicator style={{ position: "absolute" }} />
                      </View>
                    ) : (
                      <View
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 50,
                          backgroundColor: "lightgray",
                        }}
                      />
                    )}
                    <Text style={styles.iconText}>{item.title}</Text>
                  </View>
                </ImageBackground>
                <View
                  style={[
                    cstyles.row,
                    cstyles.flexBetweeen,
                    cstyles.px_20,
                    styles.iconContainer,
                    { marginTop: 10 },
                  ]}
                >
                  <TouchableOpacity style={[cstyles.row, cstyles.itemsCenter]}>
                    <Ionicons name="logo-octocat" size={24} color="white" />
                    <Text style={styles.iconText}>{item.uniqueviews}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[cstyles.row, cstyles.itemsCenter]}>
                    <Ionicons name="md-eye" size={24} color="white" />
                    <Text style={styles.iconText}>{item.totalviews}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.authReducer.user,
    worlds: state.homeReducer.worlds,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getWorlds,
      deleteWorld,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(World);
const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#52514f",
  },
  imgCard: {
    width: Layout.window.width - 120,
    height: 320,
    justifyContent: "space-between",
    borderRadius: 20,
    marginHorizontal: 15,
  },
  iconContainer: {
    width: Layout.window.width - 120,
    height: 40,
    backgroundColor: Colors.secondryGradient,
    borderRadius: 10,
    alignSelf: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondryGradient,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
  },
  butnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageBottom: {
    width: "100%",
    height: "20%",
    backgroundColor: "#52514f",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
  },
  iconText: {
    color: "white",
    fontSize: 13,
    marginLeft: 10,
  },
});
