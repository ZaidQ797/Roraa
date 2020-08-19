import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export default StyleSheet.create({
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    // marginLeft: 62,
    // paddingTop: 8,
  },
  secondryColor: {
    color: "#C41851",
  },

  headerText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#52514f",
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 4,
  },

  cardTitle: {
    fontSize: 18,
    color: Colors.gray,
  },
});
