import React, { Fragment, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { Header, Left, Body, Right } from "native-base";
import cstyles from "../../constants/cstyles";
import { Entypo } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import NewVisitor from "./NewVistor";
import OldVisitors from "./OldVisitors";
import { connect } from "react-redux";
import config from "../../_config";
function Visitors({ navigation, visitors }) {
  useEffect(() => {
    console.log(visitors);
  });

  const [newVisitors, setNewVisitors] = useState([
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
  return (
    <Fragment>
      <SafeAreaView style={[cstyles.container, cstyles.bg_white]}>
        <Header
          noShadow
          style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
        >
          <Left>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-small-left" size={24} color="black" />
            </TouchableOpacity>
          </Left>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.mainText}>My Profile Visitors</Text>
          </View>
          <Right />
        </Header>
        <ScrollView style={cstyles.container}>
          <View style={cstyles.padder}>
            <Text style={styles.subtitle}>Old Visitors</Text>
            <FlatList
              data={visitors}
              keyExtractor={(item, index) => {
                item + index.toString();
              }}
              renderItem={(item) => {
                return (
                  <TouchableOpacity style={styles.listContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: `${config.imageUrl}/${item.item.dp}` }}
                    />
                    <Text style={styles.textStyle}>{item.item.fname}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    visitors: state.homeReducer.visitors,
  };
};
export default connect(mapStateToProps)(Visitors);

const styles = StyleSheet.create({
  newVisitors: {
    paddingLeft: 20,
  },
  listContainer: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginVertical: 10,
    minHeight: 70,
  },
  image: {
    width: 55,
    height: 55,
    marginBottom: 12,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 40,
    position: "absolute",
    // left: -5,
    top: 7,
  },
  textStyle: {
    fontSize: 17,
    marginLeft: 62,
    paddingTop: 8,
  },
  subtitle: {
    fontSize: 17,
    color: "grey",
    marginVertical: 10,
  },
  mainText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
