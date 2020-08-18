import React, { Fragment, useState, useEffect } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Header, Left, Body, Icon, Item, Input, Right } from "native-base";
import cstyles from "../../constants/cstyles";
import { Entypo, AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import config from "../../_config";
import { newWorld } from "../../_actions/home";
import mime from "mime";
import Loader from "../../components/Loader";
function AddGoal({ navigation, user, newWorld, route }) {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);

  const [title, setTitle] = useState("");
  useEffect(() => {
    const { item, from } = route.params;
    console.log("hi zaid");
    from === "edit" && setTitle(item.title);
    from === "edit" && setDescription(item.detail);
    from === "edit" && setImage(`${config.imageUrl}/${item.file}`);
  }, []);

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 0.5,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  const handleUpload = () => {
    const { item, from } = route.params;
    if (!title) {
      Alert.alert("Roraa", "Please enter a title");
    } else if (!description) {
      Alert.alert("Roraa", "Please enter a description");
    } else {
      const newImageUri = "file:///" + image.split("file:/").join("");

      const formData = new FormData();
      formData.append("u_id", user.u_id);

      formData.append("file", {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split("/").pop(),
      });

      formData.append("title", title);
      from === "edit" && formData.append("edit", item.world_id);
      formData.append("detail", description);
      console.log(formData);
      setLoader(true);
      new Promise((rsl, rej) => {
        newWorld(formData, rsl, rej);
      })
        .then((res) => {
          console.log(res);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          setLoader(false);
          Alert.alert("Roraa", err.message);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };

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
          <Body>
            <Text style={styles.mainText}>New World</Text>
          </Body>
          <Right />
        </Header>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={[cstyles.container, cstyles.padder]}
        >
          <View style={cstyles.container}>
            <Item
              rounded
              style={[styles.boxShadow, styles.inputText, cstyles.my_15]}
            >
              <EvilIcons name="search" size={18} color="grey" />
              <Input
                value={title}
                placeholder="select or create"
                onChangeText={(e) => setTitle(e)}
              />
            </Item>
            {image !== "" ? (
              <TouchableOpacity onPress={_pickImage}>
                <Image
                  resizeMode={"cover"}
                  style={[
                    styles.photoContainer,
                    cstyles.selfCenter,
                    styles.boxShadow,
                    cstyles.my_10,
                  ]}
                  source={{ uri: image }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={_pickImage}>
                <View
                  style={[
                    styles.photoContainer,
                    cstyles.selfCenter,
                    styles.boxShadow,
                    cstyles.my_10,
                  ]}
                >
                  <AntDesign name="upload" size={24} color="grey" />
                  <Text style={styles.textStyle}>Upload Photo</Text>
                </View>
              </TouchableOpacity>
            )}
            <Item style={[styles.boxShadow, styles.input, cstyles.my_10]}>
              <Ionicons name="ios-globe" size={24} color="#f5656b" />
              <Input
                multiline
                value={description}
                placeholder="write something"
                onChangeText={(text) => {
                  setDescription(text);
                }}
              />
            </Item>
            <View style={(cstyles.my_20, { marginBottom: 30 })}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleUpload}
              >
                <Text style={styles.butnText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {loader && <Loader />}
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      newWorld,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddGoal);
const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "800",
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  activeButton: {
    color: "#f5656b",
    borderBottomWidth: 4,
    borderRadius: 50,
    borderBottomColor: "#f5656b",
  },
  photoContainer: {
    width: "98%",
    height: 210,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  textStyle: {
    color: "grey",
    fontSize: 17,
  },
  inputText: {
    borderRadius: 40,
    height: 40,
    paddingLeft: 25,
    width: "98%",
    elevation: 1.5,
    backgroundColor: "#f9f9f9",
  },
  input: {
    borderRadius: 10,
    height: 110,
    paddingLeft: 20,
    paddingTop: 20,
    elevation: 2,
    backgroundColor: "#f9f9f9",
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
