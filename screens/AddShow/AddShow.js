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
  BackHandler,
} from "react-native";
import { Header, Left, Body, Icon, Item, Input, Right } from "native-base";
import cstyles from "../../constants/cstyles";
import {
  Entypo,
  AntDesign,
  EvilIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Camera } from "expo-camera";
import { addShow } from "../../_actions/home";
import mime from "mime";
import * as Location from "expo-location";
import { Video } from "expo-av";
import Loader from "../../components/Loader";

function AddShow({ navigation, user, addShow }) {
  const [video, setVideo] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // videoFun = (video) => {
  //   if (video) {
  //     setVideo(video);
  //   }
  // };

  handleUpload = () => {
    if (!title) {
      Alert.alert("Roraa", "Please enter a title.");
    } else if (images.length == 0) {
      Alert.alert("Roraa", "Please choose at least one media file.");
    } else if (!description) {
      Alert.alert("Roraa", "Please enter a description.");
    } else {
      const formData = new FormData();
      // return true
      images.map((item) => {
        const newImageUri =
          item && "file:///" + item.uri.split("file:/").join("");
        formData.append("file[]", {
          uri: newImageUri,
          type: mime.getType(newImageUri),
          name: newImageUri.split("/").pop(),
        });
      });
      // formData.append("file", {
      //   uri: video.uri,
      //   type: 'video/mp4',
      //   name: "video_mp4",
      // });
      formData.append("u_id", user.u_id);
      formData.append("detail", description);
      formData.append("title", title);
      console.log(formData);
      setLoader(true);
      new Promise((rsl, rej) => {
        setLoader(true);
        addShow(formData, rsl, rej);
      })
        .then((res) => {
          console.log(res);
          Alert.alert("Rora", "Show Added Successfully");
          setLoader(false);
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err.message);
          Alert.alert("Roraa", err.message);
          setLoader(false);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };
  iconHnadler = (i) => {
    if (i == 1) {
      _takeImage();
    } else if (i == 2) {
      _pickImage();
    } else if (i == 3) {
      _pickVideos();
    } else if (i == 4) {
      _takeVideo();
    }
  };
  _takeImage = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        // aspect: [4, 3],
        quality: 0.5,
        // allowsMultipleSelection: false
      });
      if (!result.cancelled) {
        let image = images;
        image.push(result);
        setImages(image);
        // this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  _takeVideo = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        // allowsEditing: true,
        // aspect: [4, 3],
        quality: 0.5,
        // allowsMultipleSelection: false
      });
      if (!result.cancelled) {
        let image = images;
        image.push(result);
        setImages(image);
        // this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        // aspect: [4, 3],
        quality: 0.5,
        allowsMultipleSelection: false,
      });
      if (!result.cancelled) {
        // alert(images.length);
        let image = images;
        image.push(result);
        setImages(image);
        // this.setState({ image: result.uri });
        // alert(images.length);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  _pickVideos = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        // allowsEditing: true,
        // aspect: [4, 3],
        quality: 0.5,
        allowsMultipleSelection: false,
      });
      if (!result.cancelled) {
        let image = images;
        image.push(result);
        setImages(image);
        // this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  filterMedia = (removeItem) => {
    let media = images.filter((item, i) => {
      if (i != removeItem) return item;
    });
    setImages(media);
  };
  return (
    <Fragment>
      <SafeAreaView style={[cstyles.container, cstyles.bg_white]}>
        <Fragment>
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
              <Text style={styles.mainText}>New Show</Text>
            </Body>
            <Right />
          </Header>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={[cstyles.container, cstyles.padder]}
          >
            <View style={(cstyles.container, cstyles.itemsCenterf)}>
              <Item
                rounded
                style={[styles.boxShadow, styles.inputText, cstyles.my_15]}
              >
                {/* <EvilIcons name="search" size={18} color="grey" /> */}
                <Input
                  placeholder="Enter Title"
                  onChangeText={(e) => setTitle(e)}
                />
              </Item>
              {video !== null && (
                <TouchableOpacity
                  style={(cstyles.itemsCenterf, { alignSelf: "center" })}
                >
                  <Video
                    source={{ uri: video.uri }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    // shouldPlay
                    style={{ width: 300, height: 300 }}
                  />
                </TouchableOpacity>
              )}
              {/* {video == null && (
                <TouchableOpacity >
                  <View
                    style={[
                      styles.photoContainer,
                      cstyles.selfCenter,
                      styles.boxShadow,
                      cstyles.my_10,
                    ]}
                  >
                    <AntDesign name="upload" size={24} color="grey" />
                    <Text style={styles.textStyle}>Record Video</Text>
                  </View>
                </TouchableOpacity>
              )} */}
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignSelf: "center",
                }}
              >
                {images.map((item, i) => (
                  <View key={i} style={{ width: "32%", height: 100 }}>
                    <Image
                      key={i}
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "blue",
                        marginBottom: 5,
                        marginRight: "1%",
                      }}
                      source={{ uri: item.uri }}
                    />
                    <TouchableOpacity
                      style={{ position: "absolute", top: 5, right: 2 }}
                      onPress={() => filterMedia(i)}
                    >
                      <AntDesign name="closecircle" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => iconHnadler(1)}
                  style={styles.iconBtn}
                >
                  <Entypo name="camera" size={24} color="#f5656b" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => iconHnadler(2)}
                  style={styles.iconBtn}
                >
                  <Entypo name="images" size={24} color="#f5656b" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => iconHnadler(3)}
                  style={styles.iconBtn}
                >
                  <Entypo name="folder-video" size={24} color="#f5656b" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => iconHnadler(4)}
                  style={styles.iconBtn}
                >
                  <FontAwesome name="video-camera" size={24} color="#f5656b" />
                </TouchableOpacity>
              </View>
              <Item style={[styles.boxShadow, styles.input, cstyles.my_10]}>
                <Ionicons name="ios-globe" size={24} color="#f5656b" />
                <Input
                  multiline
                  placeholder="write something"
                  onChangeText={(text) => {
                    setDescription(text);
                  }}
                />
              </Item>

              <View style={(cstyles.my_20, { marginBottom: 30 })}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => handleUpload()}
                >
                  <Text style={styles.butnText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Fragment>
        {loader && <Loader />}
      </SafeAreaView>
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
      addShow,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddShow);
const styles = StyleSheet.create({
  iconBtn: {
    marginRight: 5,
    color: "#f5656b",
  },
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

// class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
//     recording: false,
//     timer: 0,
//   };

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === "granted" });
//     let { audio_status } = await Permissions.askAsync(
//       Permissions.AUDIO_RECORDING
//     );
//   }

//   intervalFun = () => {
//     const interval = setInterval(() => {
//       let timer = this.state.timer + 1;
//       this.setState({ timer });
//     }, 1000);
//     this.setState({ interval });
//   };

//   render() {
//     const { hasCameraPermission, recording } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera
//             style={{ flex: 1 }}
//             ref={(ref) => {
//               this.cameraRef = ref;
//             }}
//             type={this.state.type}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: "transparent",
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 alignItems: "flex-end",
//               }}
//             >
//               <TouchableOpacity
//                 style={{
//                   // flex: 0.1,
//                   // alignSelf: 'flex-end',
//                   alignItems: "center",
//                   position: "absolute",
//                   bottom: 10,
//                   right: 5,
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type:
//                       this.state.type === Camera.Constants.Type.back
//                         ? Camera.Constants.Type.front
//                         : Camera.Constants.Type.back,
//                   });
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 18, marginBottom: 10, color: "white" }}
//                 >
//                   {" "}
//                   Flip{" "}
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{ position: 'absolute', top: 15, right: 10 }}
//                 onPress={() =>
//                   this.props.videoFun(this.state.video)
//                 }
//               >
//                 <EvilIcons name="close" size={24} color="white" />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={async () => {
//                   let video = null;
//                   if (!recording) {
//                     this.intervalFun();
//                     this.setState({ recording: true });
//                     video = await this.cameraRef.recordAsync();
//                     this.setState({ video });
//                   } else {
//                     clearInterval(this.state.interval);
//                     this.setState({ recording: false, timer: 0 });
//                     this.cameraRef.stopRecording();
//                     // this.setState({ video })
//                   }
//                 }}
//                 style={{ bottom: 10 }}
//               >
//                 <View
//                   style={{
//                     borderWidth: 2,
//                     borderRadius: 50,
//                     borderColor: "red",
//                     height: 80,
//                     width: 80,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <View
//                     style={{
//                       borderWidth: 2,
//                       borderRadius: 50,
//                       borderColor: "red",
//                       height: 70,
//                       width: 70,
//                       backgroundColor: "red",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <View>
//                       {this.state.timer > 0 && (
//                         <Text style={{ color: "white", fontSize: 20 }}>
//                           {this.state.timer}
//                         </Text>
//                       )}
//                       {/* <Text style={{ color: 'white', fontSize: 20 }} >{this.state.timer}</Text> */}
//                     </View>
//                   </View>
//                 </View>
//               </TouchableOpacity>

//               <View style={{ position: "absolute", bottom: 15, left: 5 }}>
//                 {this.state.video && (
//                   <TouchableOpacity
//                     onPress={() => {
//                       this.props.videoFun(this.state.video);
//                     }}
//                   >
//                     <Text style={{ color: "white", fontSize: 20 }}>Save</Text>
//                   </TouchableOpacity>
//                 )}
//               </View>
//             </View>
//           </Camera>
//         </View >
//       );
//     }
//   }
// }
