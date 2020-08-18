import React, { useState, useEffect } from "react";
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
import { StyleSheet, Image, FlatList, Alert } from "react-native";
import DefaultImage from "../../assets/images/profile.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getScores } from "../../_actions/home";
import Loader from "../../components/Loader";
import config from "../../_config";
function ScoreList({ navigation, getScores, scores, profile }) {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const formData = new FormData();
    formData.append("u_id", profile && profile[0].u_id);
    new Promise((rsl, rej) => {
      setLoader(true);
      getScores(formData, rsl, rej);
    })
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        Alert.alert("Roraa", err.message);
      });
  });

  return (
    <View style={{ flex: 1 }}>
      {scores && (
        <FlatList
          data={scores}
          keyExtractor={(item) => {
            item.u_id;
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => console.log("yes")} key={index}>
                <View style={styles.listContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${config.imageUrl}/${item.dp}` }}
                  />
                  <Text style={styles.textStyle}>{item.fname}</Text>
                  <Text style={styles.scoreText}>{`${item.score}`}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    scores: state.homeReducer.scores,
    rating: state.homeReducer.rating,

    profile: state.authReducer.profile,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getScores,
      getRating,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);

const styles = StyleSheet.create({
  listContainer: {
    position: "relative",
    width: "93%",
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
    borderRadius: 40,
    position: "absolute",
    left: -8,
    top: 7,
    // backgroundColor: "#e98180",
  },
  textStyle: {
    fontSize: 17,
    marginLeft: 62,
    paddingTop: 8,
  },
  scoreText: {
    fontSize: 17,
    fontWeight: "bold",
    position: "absolute",
    right: 20,
    bottom: 10,
  },
});
