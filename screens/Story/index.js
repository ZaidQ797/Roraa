import React from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import { Thumbnail, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

function MyStory({ navigation, storiesReducer }) {
  return (
    <SafeAreaView style={cstyles.container}>
      <ScrollView style={[cstyles.container, cstyles.padder]}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ alignSelf: "center" }}
          >
            <FontAwesome
              name="chevron-left"
              size={20}
              color="gray"
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>

          <View style={[cstyles.padder, cstyles.row, cstyles.itemsEnd]}>
            <Thumbnail
              small
              source={{
                uri:
                  "https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg",
              }}
            />
            <Text style={[cstyles.ml_10, styles.mainText]}>My Story</Text>
          </View>
        </View>
        <View style={[cstyles.boxShadow, cstyles.padder, styles.br_10]}>
          <View
            style={[cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen]}
          >
            <Text style={styles.font_18}>My Story</Text>
          </View>
          {storiesReducer &&
            storiesReducer.map((story, i) => {
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
                  </View>
                  <View>
                    <Text style={styles.storyText}>{story.description}</Text>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    storiesReducer: state.homeReducer.stories,
  };
};

export default connect(mapStateToProps)(MyStory);

const styles = StyleSheet.create({
  mainText: {
    fontSize: 22,
    fontWeight: "600",
  },
  br_10: {
    borderRadius: 10,
  },
  storyHeader: {
    fontSize: 15,
    fontWeight: "bold",
  },
  storyText: {
    fontSize: 14,
    fontWeight: "100",
    lineHeight: 22,
    paddingHorizontal: 5,
  },
  iconButton: {
    backgroundColor: "#f5656b",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
