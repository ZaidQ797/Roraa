import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from "native-base";
import cstyles from "../../constants/cstyles";
import cstyle from "../../constants/cstyles";
import { Col, Row, Grid } from "react-native-easy-grid";
import StarsList from "./StarList";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import config from "../../_config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStars } from "../../_actions/home";
import Loader from "../../components/Loader";

function TopStars({ navigation, getStars, belowrow, first, scnd, thrd, user }) {
  useEffect(() => {
    new Promise((rsl, rej) => {
      getStars(rsl, rej);
    })
      .then((res) => { })
      .catch((err) => {
        Alert.alert("Roraa", err.message);
      });
  }, []);
  if (belowrow) {
    return (
      <Fragment>
        <ScrollView
          style={cstyle.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={cstyle.py_10}>
            <Text style={styles.mainText}>Top 200 Stars</Text>
          </View>
          <View>
            <Grid style={[styles.grid, cstyle.py_20]}>
              <Col style={[cstyle.px_5, cstyle.pt_30]}>
                <TouchableOpacity
                  onPress={() => {
                    if (scnd[0].u_id == user.u_id) {
                      navigation.navigate("World", { tab: 0 })

                    }
                    else {
                      navigation.navigate("VisitorProfile", { visitorId: scnd[0].u_id })
                    }
                  }}
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={[styles.smImg, cstyle.selfCenter, { zIndex: 100 }]}
                      source={
                        scnd && {
                          uri: `${config.imageUrl}/${scnd[0].dp}`,
                        }
                      }
                    />
                    <ActivityIndicator style={{ position: "absolute" }} />
                  </View>
                  <Text
                    style={[
                      styles.secondryColor,
                      styles.number,
                      cstyle.selfCenter,
                    ]}
                  >
                    2
                  </Text>
                  <Text style={[styles.subTitle, cstyle.selfCenter]}>
                    {scnd && scnd[0].fname}
                  </Text>
                  <Text style={[cstyle.selfCenter, styles.percent]}>
                    {scnd && scnd[0].percentage}
                  </Text>
                </TouchableOpacity>
              </Col>
              <Col style={[cstyle.px_5]}>
                <TouchableOpacity
                  onPress={() => {
                    if (first[0].u_id == user.u_id) {
                      navigation.navigate("World", { tab: 0 })

                    }
                    else {
                      navigation.navigate("VisitorProfile", { visitorId: first[0].u_id })
                    }
                  }}
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={[styles.lgImg, { zIndex: 100 }]}
                      source={
                        first && {
                          uri: `${config.imageUrl}/${first[0].dp}`,
                        }
                      }
                    />
                    <ActivityIndicator style={{ position: "absolute" }} />
                  </View>
                  <Text
                    style={[
                      styles.secondryColor,
                      styles.number,
                      { textAlign: "center" },
                    ]}
                  >
                    1
                  </Text>
                  <Text
                    style={[
                      styles.subTitle2,
                      cstyle.selfCenter,
                      { textAlign: "center" },
                    ]}
                  >
                    {first && first[0].fname}
                  </Text>
                  <Text
                    style={[
                      cstyle.selfCenter,
                      styles.percent,
                      { textAlign: "center" },
                    ]}
                  >
                    {first && first[0].percentage}
                  </Text>
                </TouchableOpacity>
              </Col>

              <Col style={[cstyle.px_5, cstyle.pt_30]}>
                <TouchableOpacity
                  onPress={() => {
                    if (thrd[0].u_id == user.u_id) {
                      navigation.navigate("World", { tab: 0 })

                    }
                    else {
                      navigation.navigate("VisitorProfile", { visitorId: thrd[0].u_id })
                    }
                  }
                  }
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={[styles.smImg, cstyle.selfCenter, { zIndex: 100 }]}
                      source={
                        thrd && {
                          uri: `${config.imageUrl}/${thrd[0].dp}`,
                        }
                      }
                    />
                    <ActivityIndicator style={{ position: "absolute" }} />
                  </View>

                  <Text
                    style={[
                      styles.secondryColor,
                      styles.number,
                      cstyle.selfCenter,
                    ]}
                  >
                    3
                  </Text>
                  <Text style={[styles.subTitle, cstyle.selfCenter]}>
                    {thrd && thrd[0].fname}
                  </Text>
                  <Text style={[cstyle.selfCenter, styles.percent]}>
                    {thrd && thrd[0].percentage}
                  </Text>
                </TouchableOpacity>
              </Col>
            </Grid>
          </View>
          <View>
            {belowrow &&
              belowrow.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      if (item.u_id == user.u_id) {
                        navigation.navigate("World", { tab: 0 })

                      }
                      else {
                        navigation.navigate("VisitorProfile", { visitorId: item.u_id })
                      }
                    }}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginVertical: 5,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: "25%",
                      }}
                    >
                      <Text style={{ width: 20 }}>{index + 3}</Text>
                      {item.dp ? (
                        <View
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Thumbnail
                            style={[styles.image, { zIndex: 100 }]}
                            source={{
                              uri: `${config.imageUrl}/${item.dp}`,
                            }}
                          />
                          <ActivityIndicator style={{ position: "absolute" }} />
                        </View>
                      ) : (
                          <View
                            style={{
                              width: 55,
                              height: 55,
                              backgroundColor: "gray",
                              borderRadius: 50,
                            }}
                          />
                        )}
                    </View>
                    <View style={{ alignItems: "flex-start", width: "60%" }}>
                      <Text style={{ textAlign: "left" }}>
                        {item.fname || "..."}
                      </Text>
                      <Text style={{ textAlign: "left" }}>
                        {item.email.length > 18
                          ? item.email.slice(0, 18) + "..."
                          : item.email || "..."}
                      </Text>
                    </View>
                    <View style={{ width: "10%" }}>
                      <Text>{item.percent || "..."}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </Fragment >
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
        <Text>No Data</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.authReducer.user,
    first: state.homeReducer.first,
    scnd: state.homeReducer.scnd,
    thrd: state.homeReducer.thrd,
    belowrow: state.homeReducer.belowrow,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getStars,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopStars);
