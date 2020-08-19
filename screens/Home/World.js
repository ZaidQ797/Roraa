import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { Image, FlatList, Alert } from "react-native";
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
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import cstyles from "../../constants/cstyles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWorlds, insertworldviews } from "../../_actions/home";
import config from "../../_config";
import Loader from "../../components/Loader";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
function World({ user, getWorlds, worlds, insertworldviews }) {
  const [loader, setLoader] = useState(true);
  useFocusEffect(
    useCallback(() => {
      const formData = new FormData();
      formData.append("u_id", user.u_id);
      formData.append("is_home", "Yes");

      new Promise((rsl, rej) => {
        getWorlds(formData, rsl, rej);
      })
        .then((res) => {
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);

          // Alert.alert("Roraa", err.message);
        });
    }, [])
  );

  const onViewRef = useRef((viewableItmes) => {
    console.log(viewableItmes);
    if (viewableItmes.viewableItems.length > 0) {
      // counter.push(
      //   { world_id: viewableItmes.changed[0].item.world_id },
      // )
      const formData = new FormData();
      formData.append("u_id", user.u_id);
      formData.append("world_id", viewableItmes.viewableItems[0].item.world_id);
      new Promise((rsl, rej) => {
        insertworldviews(formData, rsl, rej);
      });
      // don't uncomment this, it's just for testing purpose
      // .then(() => { setLoader(false) }).catch((e) => {
      //   setLoader(false)
      //   alert(e.message)
      // })
      // don't uncomment this, it's just for testing purpose
    }
  });
  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 500,
    waitForInteraction: true,
    minimumViewTime: 3000,
  });
  if (worlds) {
    return (
      <View style={[cstyles.bg_white]}>
        <FlatList
          data={worlds}
          style={[cstyles.bg_white]}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.world_id}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item }) => (
            <Card style={[{ elevation: 3 }, cstyles.my_10]}>
              <CardItem cardBody>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image
                    style={{ height: 200, flex: 1, zIndex: 100, width: "100%" }}
                    source={{ uri: `${config.imageUrl}/${item.file}` }}
                  />
                  <ActivityIndicator style={{ position: "absolute" }} />
                </View>
              </CardItem>
              <CardItem style={styles.flexCol}>
                <Text style={[styles.cardTitle, cstyles.mb_10]}>
                  {item.title}
                </Text>
                <Text style={[styles.cardTitle, cstyles.mb_10]}>Story:</Text>
                <Text style={[styles.storyText, cstyles.pl_15]}>
                  {item.detail}
                </Text>
              </CardItem>
              <CardItem
                style={[cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter]}
              >
                <View style={[cstyles.row, cstyles.itemsCenter]}>
                  <Thumbnail
                    source={{ uri: `${config.imageUrl}/${item.dp}` }}
                  />
                  <Text style={[{ alignSelf: "flex-end" }, styles.subTitle2]}>
                    {item.fname}
                  </Text>
                </View>
                <View style={[cstyles.row, cstyles.itemsCenter]}>
                  <Entypo name="eye" size={24} color="black" />
                  <Text style={[styles.subTitle2, cstyles.ml_5]}>
                    {item.viewsCount}
                  </Text>
                </View>
              </CardItem>
            </Card>
          )}
        />
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
  console.log(state);
  return {
    user: state.authReducer.user,
    worlds: state.homeReducer.worlds,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getWorlds,
      insertworldviews,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(World);
