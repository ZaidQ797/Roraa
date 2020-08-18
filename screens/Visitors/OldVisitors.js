import React from "react";
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
  Text,
  View,
} from "native-base";
import { StyleSheet, Image } from "react-native";
import DefaultImage from "../../assets/images/profile.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
function OldVisitors({ image, name }) {
  return (
    <TouchableOpacity onPress={() => console.log("yes")}>
      <View style={styles.listContainer}>
        <View style={{ position: "relative" }}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg",
            }}
          />
        </View>
        <Text style={styles.textStyle}>{name || "Some Name"}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default OldVisitors;

const styles = StyleSheet.create({
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
    left: -8,
    top: 7,
  },
  textStyle: {
    fontSize: 17,
    marginLeft: 62,
    paddingTop: 8,
  },
});
