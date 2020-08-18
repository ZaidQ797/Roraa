import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import { Thumbnail, Text } from "native-base";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import { connect } from "react-redux";
import { insertMyTalent } from "../../_actions/auth";
import { bindActionCreators } from "redux";
import config from "../../_config";
import Loader from "../../components/Loader";

function AddGoal({ navigation, user, insertMyTalent }) {
  const [desc, setDesc] = useState("");
  const [heading, setHeading] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmitTalent = () => {
    if (desc.length < 3) {
      Alert.alert("Roraa", "Kindly enter your talent");
    } else {
      setLoader(true);
      const data = new FormData();
      data.append("u_id", user.u_id);
      data.append("text", desc);
      console.log(data);
      new Promise((rsl, rej) => {
        insertMyTalent(data, rsl, rej);
      })
        .then((res) => {
          setLoader(false);
          Alert.alert("Roraa", res);
          navigation.goBack();
        })
        .catch((err) => {
          setLoader(false);
          Alert.alert("Roraa", err.message);
        });
    }
  };

  return (
    <SafeAreaView style={cstyles.container}>
      <ScrollView style={[cstyles.container, cstyles.padder]}>
        <View style={[cstyles.row, cstyles.itemsEnd, { paddingVertical: 25 }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-small-left" size={30} color="black" />
          </TouchableOpacity>
          <Thumbnail small source={{ uri: `${config.imageUrl}/${user.dp}` }} />
          <Text style={[cstyles.ml_10, styles.mainText]}>My Talent</Text>
        </View>
        <View
          style={[
            cstyles.boxShadow,
            cstyles.my_10,
            styles.br_10,
            cstyles.px_10,
            cstyles.py_20,
            cstyles.bg_white,
          ]}
        >
          <View>
            <TextInput
              onChangeText={(e) => {
                setDesc(e);
              }}
              multiline
              style={styles.storyText}
              placeholder="Enter your talent"
            />
          </View>
        </View>
        <View style={[cstyles.my_20, { marginBottom: 30 }]}>
          <TouchableOpacity
            onPress={() => {
              handleSubmitTalent();
            }}
            style={styles.buttonStyle}
          >
            <Text style={styles.butnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {loader && <Loader />}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      insertMyTalent,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal);

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
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonStyle: {
    width: "60%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#f4636a",
    alignSelf: "center",
  },
  butnText: {
    fontSize: 19,
    color: "white",
    textTransform: "uppercase",
  },
});
