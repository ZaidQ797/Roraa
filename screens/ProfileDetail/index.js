import React, { Fragment } from "react";
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Loader from "../../components/Loader";
import mime from "mime";
import { ScrollView } from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import { StyleSheet } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import ProfilePic from "../../assets/images/profileImg.png";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import DatePicker from "react-native-datepicker";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import CountryPicker from "react-native-country-picker-modal";
import config from "../../_config";
//redux
import { connect } from "react-redux";
import { editProfile } from "../../_actions/home";
import { getUser } from "../../_actions/auth";
import { bindActionCreators } from "redux";
class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      email: "",
      dob: "",
      location: "",
      nameEditing: false,
      emailEditing: false,
      dateEditing: false,
      locationEditing: false,
      loading: false,
    };
  }
  componentDidMount = () => {
    console.log(this.props.user);
    this.setState({
      name: this.props.user.fname,
      email: this.props.user.email,
      dob: this.props.user.date_of_birth,
      location: this.props.user.location,
      image: `${config.imageUrl}/${this.props.user.dp}`,
    });
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri }, () => {
          console.log(this.state.image);
        });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  handleEditProfile = () => {
    const { image, name, email, dob, location } = this.state;

    const newImageUri = image && "file:///" + image.split("file:/").join("");
    const formData = new FormData();
    formData.append("u_id", this.props.user && this.props.user.u_id);
    formData.append(
      "dp",
      image && {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split("/").pop(),
      }
    );
    formData.append("newname", name);
    // formData.append("email", email);
    formData.append("location", location);
    formData.append("date_of_birth", dob);

    console.log(formData);
    new Promise((rsl, rej) => {
      this.setState({ loading: true }, () => {
        this.props.editProfile(formData, rsl, rej);
      });
    })
      .then((res) => {
        this.setState({ loading: false }, () => {
          this.props.navigation.navigate("Home");
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err.message);
      });
  };
  onSelect = (country: Country) => {
    this.setState(
      { location: country.name, locationEditing: !this.state.locationEditing },
      () => {
        console.log(this.state.location);
      }
    );
  };
  render() {
    return (
      <Fragment>
        <SafeAreaView style={cstyles.container}>
          <ScrollView style={[cstyles.container]}>
            <View style={styles.imageContainer}>
              <ImageBackground
                style={styles.imgBg}
                source={this.state.image && { uri: this.state.image }}
              >
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Entypo name="chevron-small-left" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this._pickImage}
                  style={[styles.iconButton, cstyles.testBorder]}
                >
                  <MaterialIcons name="edit" size={25} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={[cstyles.container, cstyles.padder]}>
              <View
                style={[
                  cstyles.row,
                  cstyles.itemsCenter,
                  cstyles.flexBetweeen,
                  cstyles.my_15,
                ]}
              >
                <View style={{ width: "90%" }}>
                  <Text style={styles.header}>Name</Text>
                  {!this.state.nameEditing ? (
                    <Text style={styles.detail}>{this.state.name}</Text>
                  ) : (
                    <TextInput
                      placeholder="Enter name"
                      value={this.state.name}
                      onChangeText={(name) => {
                        this.setState({
                          name: name,
                        });
                      }}
                    />
                  )}
                </View>
                <TouchableOpacity
                  style={[cstyles.mr_20, { width: "50%" }]}
                  onPress={() =>
                    this.setState({ nameEditing: !this.state.nameEditing })
                  }
                >
                  <MaterialIcons name="edit" size={25} color="#f5656b" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  cstyles.row,
                  cstyles.itemsCenter,
                  cstyles.flexBetweeen,
                  cstyles.my_15,
                ]}
              >
                <View style={{ width: "90%" }}>
                  <Text style={styles.header}>Date of Birth</Text>
                  {!this.state.dateEditing ? (
                    <Text style={styles.detail}>{this.state.dob}</Text>
                  ) : (
                    <DatePicker
                      showIcon={false}
                      style={{ width: 200 }}
                      date={this.state.dob}
                      mode="date"
                      placeholder="DD/MM/YYYY"
                      format="DD-MM-YYYY"
                      customStyles={{
                        dateInput: {
                          backgroundColor: "transparent",
                          borderWidth: 0,
                          padding: 4,
                          margin: 0,
                          alignItems: "flex-start",
                        },
                      }}
                      onDateChange={(date) => {
                        this.setState({
                          dob: date,
                          dateEditing: !this.state.dateEditing,
                        });
                      }}
                    />
                  )}
                </View>
                <TouchableOpacity
                  style={[cstyles.mr_20, { width: "50%" }]}
                  onPress={() =>
                    this.setState({ dateEditing: !this.state.dateEditing })
                  }
                >
                  <MaterialIcons name="edit" size={25} color="#f5656b" />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  cstyles.row,
                  cstyles.itemsCenter,
                  cstyles.flexBetweeen,
                  cstyles.my_15,
                ]}
              >
                <View style={{ width: "90%" }}>
                  <Text style={styles.header}>Location</Text>
                  {!this.state.locationEditing ? (
                    <Text style={styles.detail}>{this.state.location}</Text>
                  ) : (
                    <CountryPicker
                      onSelect={(country) => this.onSelect(country)}
                    />
                  )}
                </View>
                <TouchableOpacity
                  style={[cstyles.mr_20, { width: "50%" }]}
                  onPress={() =>
                    this.setState({
                      locationEditing: !this.state.locationEditing,
                    })
                  }
                >
                  <MaterialIcons name="edit" size={25} color="#f5656b" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.butnStyle}
                onPress={this.handleEditProfile}
              >
                <Text style={styles.butnText}>Update</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
        {this.state.loading && <Loader />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.authReducer;
  return {
    user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      editProfile,
      // getUser,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);

const styles = StyleSheet.create({
  imageContainer: {
    width: deviceWidth,
    height: deviceHeight / 2,
    position: "relative",
  },
  imgBg: {
    width: "100%",
    height: "96%",
  },
  butnStyle: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    backgroundColor: "#f5656b",
    justifyContent: "center",
    alignItems: "center",
  },
  butnText: {
    color: "white",
    fontSize: 14,
  },
  backBtn: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
    marginLeft: 25,
    marginTop: 30,
  },
  iconButton: {
    backgroundColor: "#f5656b",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    bottom: -10,
    right: 30,
  },
  header: {
    fontSize: 16,
    fontWeight: "100",
    color: "grey",
  },
  detail: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
