import React, { Fragment, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";
import { Header, Left, Right } from "native-base";
import cstyle from "../../constants/cstyles";
import { ScrollView } from "react-native-gesture-handler";
import { Col, Row, Grid } from "react-native-easy-grid";
import StarsList from "./StarList";
import { Entypo, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import TopStars from "./TopStars";
import HomeDiscover from "./HomeDiscover";
import World from "./World";
import Show from "./Show";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWorlds } from "../../_actions/home";

function Home({ navigation, user, getWorlds }) {
  const [view, setView] = useState("world");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const asyncStorageFun = async () => {
      await AsyncStorage.setItem("showInterests", "false");
    };
    asyncStorageFun();
  }, []);
  return (
    <Fragment>
      <SafeAreaView style={[cstyle.container, cstyle.bg_white]}>
        <Header
          noShadow
          style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
        >
          <Right>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons name="ios-menu" size={24} color="black" />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={[cstyle.px_20, styles.borderBottom, cstyle.bg_white]}>
          {view === "show" && (
            <View
              style={[
                cstyle.row,
                cstyle.itemsCenter,
                cstyle.flexBetweeen,
                cstyle.mb_15,
              ]}
            >
              <Text style={styles.headerText}>New Videos For You</Text>
              <TouchableOpacity
                style={styles.headerButn}
                onPress={() => navigation.navigate("AddShow")}
              >
                <Text style={styles.butnText}>Add Show</Text>
              </TouchableOpacity>
            </View>
          )}
          {view === "world" && (
            <View
              style={[
                cstyle.row,
                cstyle.itemsCenter,
                cstyle.flexBetweeen,
                cstyle.mb_15,
              ]}
            >
              <Text style={styles.headerText}>New Feed For You</Text>
              <TouchableOpacity
                style={styles.headerButn}
                onPress={() => navigation.navigate("AddWorld", { item: null })}
              >
                <Text style={styles.butnText}>Add World</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={[cstyle.row, cstyle.itemsCenter, cstyle.flexBetweeen]}>
            <TouchableOpacity
              style={view === "world" && styles.activeTab}
              onPress={() => setView("world")}
            >
              <Text style={styles.tabText}>World</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view === "show" && styles.activeTab}
              onPress={() => setView("show")}
            >
              <Text style={styles.tabText}>Show</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view === "discover" && styles.activeTab}
              onPress={() => setView("discover")}
            >
              <Text style={[styles.tabText]}>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view === "star" && styles.activeTab}
              onPress={() => setView("star")}
            >
              <Text style={styles.tabText}>Top 200 Stars</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            cstyle.container,
            cstyle.padder,
            cstyle.bg_white,
            { paddingTop: 0 },
          ]}
        >
          {view === "world" ? (
            <World navigation={navigation} />
          ) : view === "show" ? (
            <Show navigation={navigation} />
          ) : view === "discover" ? (
            <HomeDiscover navigation={navigation} />
          ) : (
            <TopStars navigation={navigation} />
          )}
        </View>
      </SafeAreaView>
    </Fragment>
  );
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
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
