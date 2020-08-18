import React, { Component, Fragment } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Image, StyleSheet, Text } from "react-native";
import cstyles from "../../constants/cstyles";
import config from "../../_config";
import { ActivityIndicator } from "react-native-paper";

function NewVisitors({ name, image, navigation, id }) {
  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => navigation.push("VisitorProfile", { visitorId: id })}
      >
        <View style={styles.container}>
          {image ? (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={[styles.image, { zIndex: 100 }]}
                source={{ uri: `${config.imageUrl}/${image}` }}
              />
              <ActivityIndicator style={{ position: "absolute" }} />
            </View>
          ) : (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "lightgray",
              }}
            />
          )}
          <Text style={[styles.textStyle, styles.mt_5]}>
            {name || "some Name"}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
}

export default NewVisitors;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 4,
    borderWidth: 1,
    borderColor: "black",
  },
  textStyle: {
    fontSize: 15,
  },
  mt_5: {
    marginTop: 5,
  },
});
