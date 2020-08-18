import React, { Fragment } from "react";
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import MultiSelect from "react-native-multiple-select";
import Loader from "../../components/Loader";
import mime from "mime";
import { ScrollView } from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import Colors from "../../constants/Colors";
import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
  Right,
} from "native-base";
import {
  Entypo,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

import DatePicker from "react-native-datepicker";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import CountryPicker from "react-native-country-picker-modal";
import config from "../../_config";

class TargetAudience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageEditing: false,
      interestsEditing: false,
      keywordsEditing: false,
      androidSelected: false,
      appleSelected: true,
      loading: false,
      languages: "",
      interests: "",
      selectedInterest: [],
      selectedKeyWords: [],
      selectedLanguages: [],
      items1: [
        {
          id: "92iijs7yta",
          name: "Ondo",
        },
        {
          id: "a0s0a8ssbsd",
          name: "Ogun",
        },
        {
          id: "16hbajsabsd",
          name: "Calabar",
        },
        {
          id: "nahs75a5sg",
          name: "Lagos",
        },
        {
          id: "667atsas",
          name: "Maiduguri",
        },
        {
          id: "hsyasajs",
          name: "Anambra",
        },
        {
          id: "djsjudksjd",
          name: "Benue",
        },
        {
          id: "sdhyaysdj",
          name: "Kaduna",
        },
        {
          id: "suudydjsjd",
          name: "Abuja",
        },
      ],
    };
  }

  onSelect = (country: Country) => {
    this.setState(
      { location: country.name, locationEditing: !this.state.locationEditing },
      () => {
        console.log(this.state.location);
      }
    );
  };
  onSelectedItemsChange = (selectedItems, from) => {
    switch (from) {
      case "ln":
        this.setState({ selectedLanguages: selectedItems });
        break;
      case "keyword":
        this.setState({ selectedKeyWords: selectedItems });
        break;
      case "interest":
        this.setState({ selectedInterest: selectedItems });
        break;
      default:
        return;
    }
  };
  handleTarget = () => {
    const {
      selectedInterest,
      selectedKeyWords,
      selectedLanguages,
      appleSelected,
    } = this.state;
    const {
      title,
      image,
      appleUrl,
      androidUrl,
      minBudget,
      maxBudget,
      totalInstalls,
      time,
      age,
      gender,
      country,
    } = this.props.route.params;
    this.props.navigation.navigate("TargetAudience2", {
      keywords: selectedKeyWords,
      interests: selectedInterest,
      languages: selectedLanguages,
      title: title,
      image: image,
      appleUrl: appleUrl,
      androidUrl: androidUrl,
      minBudget: minBudget,
      maxBudget: maxBudget,
      totalInstalls: totalInstalls,
      time: time,
      age: age,
      gender: gender,
      country: country,
      device: appleSelected ? "apple" : "android",
    });
  };
  render() {
    return (
      <SafeAreaView style={cstyles.container}>
        <Header
          noShadow
          style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
        >
          <Left>
            <Entypo
              name="chevron-small-left"
              size={24}
              color="black"
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </Left>
          <Right></Right>
        </Header>

        <ScrollView style={[cstyles.container]}>
          <Text style={[styles.textStyle, { margin: 10 }]}>
            Target Audiences
          </Text>
          <View style={[cstyles.container]}>
            <View
              style={[
                cstyles.row,
                cstyles.itemsCenter,
                cstyles.flexBetweeen,
                cstyles.my_5,
                {
                  backgroundColor: "#F9F9F9",
                  margin: 10,
                  elevation: 1,
                  borderRadius: 2,
                },
              ]}
            >
              <View style={{ width: "100%", padding: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text style={styles.header}>Languages</Text>
                  <TouchableOpacity
                    style={[{ marginBottom: 30 }]}
                    onPress={() =>
                      this.setState({
                        languageEditing: !this.state.languageEditing,
                      })
                    }
                  >
                    <MaterialIcons
                      name={this.state.languageEditing ? "check" : "add"}
                      size={25}
                      color="#f5656b"
                    />
                  </TouchableOpacity>
                </View>
                {!this.state.languageEditing ? (
                  <View>
                    {this.multiSelect &&
                      this.multiSelect.getSelectedItemsExt(
                        this.state.selectedLanguages
                      )}
                  </View>
                ) : (
                  <MultiSelect
                    // hideTags
                    items={this.state.items1}
                    uniqueKey="id"
                    ref={(component) => {
                      this.multiSelect = component;
                    }}
                    onSelectedItemsChange={(selectedItems) =>
                      this.onSelectedItemsChange(selectedItems, "ln")
                    }
                    selectedItems={this.state.selectedLanguages}
                    selectText="Select Language"
                    searchInputPlaceholderText="Search languages..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="transparent"
                    tagBorderColor="transparent"
                    tagTextColor="#F86383"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#F86383"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: "#ddd" }}
                    submitButtonColor="#F86383"
                    submitButtonText="Submit"
                    styleDropdownMenuSubsection={{
                      backgroundColor: "transparent",
                    }}
                  />
                )}
              </View>
            </View>

            <View
              style={[
                cstyles.row,
                cstyles.itemsCenter,
                cstyles.flexBetweeen,
                cstyles.my_5,
                {
                  backgroundColor: "#F9F9F9",
                  margin: 10,
                  elevation: 1,
                  borderRadius: 2,
                },
              ]}
            >
              <View style={{ width: "100%", padding: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text style={styles.header}>Interests</Text>
                  <TouchableOpacity
                    style={[{ marginBottom: 30 }]}
                    onPress={() =>
                      this.setState({
                        interestsEditing: !this.state.interestsEditing,
                      })
                    }
                  >
                    <MaterialIcons
                      name={this.state.interestsEditing ? "check" : "add"}
                      size={25}
                      color="#f5656b"
                    />
                  </TouchableOpacity>
                </View>
                {!this.state.interestsEditing ? (
                  <View>
                    {this.multiSelect &&
                      this.multiSelect.getSelectedItemsExt(
                        this.state.selectedInterest
                      )}
                  </View>
                ) : (
                  <MultiSelect
                    // hideTags
                    items={this.state.items1}
                    uniqueKey="id"
                    ref={(component) => {
                      this.multiSelect = component;
                    }}
                    onSelectedItemsChange={(selectedItems) =>
                      this.onSelectedItemsChange(selectedItems, "interest")
                    }
                    selectedItems={this.state.selectedInterest}
                    selectText="Select Interest"
                    searchInputPlaceholderText="Search Interest..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="transparent"
                    tagBorderColor="transparent"
                    tagTextColor="#F86383"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#F86383"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: "#ddd" }}
                    submitButtonColor="#F86383"
                    submitButtonText="Submit"
                    styleDropdownMenuSubsection={{
                      backgroundColor: "transparent",
                    }}
                  />
                )}
              </View>
            </View>

            <View
              style={[
                cstyles.row,
                cstyles.itemsCenter,
                cstyles.flexBetweeen,
                cstyles.my_5,
                {
                  backgroundColor: "#F9F9F9",
                  margin: 10,
                  elevation: 1,
                  borderRadius: 2,
                },
              ]}
            >
              <View style={{ width: "100%", padding: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text style={styles.header}>Keywords</Text>
                  <TouchableOpacity
                    style={[{ marginBottom: 30 }]}
                    onPress={() =>
                      this.setState({
                        keywordsEditing: !this.state.keywordsEditing,
                      })
                    }
                  >
                    <MaterialIcons
                      name={this.state.keywordsEditing ? "check" : "add"}
                      size={25}
                      color="#f5656b"
                    />
                  </TouchableOpacity>
                </View>
                {!this.state.keywordsEditing ? (
                  <View>
                    {this.multiSelect &&
                      this.multiSelect.getSelectedItemsExt(
                        this.state.selectedKeyWords
                      )}
                  </View>
                ) : (
                  <MultiSelect
                    // hideTags
                    items={this.state.items1}
                    uniqueKey="id"
                    ref={(component) => {
                      this.multiSelect = component;
                    }}
                    onSelectedItemsChange={(selectedItems) =>
                      this.onSelectedItemsChange(selectedItems, "keyword")
                    }
                    selectedItems={this.state.selectedKeyWords}
                    selectText="Select keywords"
                    searchInputPlaceholderText="Search keywords..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="transparent"
                    tagBorderColor="transparent"
                    tagTextColor="#F86383"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#F86383"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: "#ddd" }}
                    submitButtonColor="#F86383"
                    submitButtonText="Submit"
                    styleDropdownMenuSubsection={{
                      backgroundColor: "transparent",
                    }}
                  />
                )}
              </View>
            </View>

            <View
              style={[
                cstyles.my_5,
                {
                  backgroundColor: "#F9F9F9",
                  margin: 10,
                  elevation: 1,
                  borderRadius: 2,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                  padding: 10,
                }}
              >
                <Text style={styles.header}>Devices</Text>
              </View>
              <View
                style={[
                  cstyles.row,
                  // cstyles.selfCenter,
                  cstyles.my_5,
                  {
                    justifyContent: "space-around",
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    {
                      marginBottom: 30,
                      backgroundColor: this.state.appleSelected
                        ? "#f5656b"
                        : "#ddd",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      elevation: 3,
                    },
                  ]}
                  onPress={() =>
                    this.setState((prevState) => {
                      return {
                        ...prevState,
                        appleSelected: !this.state.appleSelected,
                        androidSelected: false,
                      };
                    })
                  }
                >
                  <AntDesign name={"apple1"} size={35} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    {
                      marginBottom: 30,
                      backgroundColor: this.state.androidSelected
                        ? "#f5656b"
                        : "white",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      elevation: 3,
                    },
                  ]}
                  onPress={() =>
                    this.setState((prevState) => {
                      return {
                        ...prevState,
                        androidSelected: !this.state.androidSelected,
                        appleSelected: false,
                      };
                    })
                  }
                >
                  <AntDesign name={"android1"} size={35} color="#ddd" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                this.handleTarget();
              }}
            >
              <FontAwesome name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TargetAudience;

const styles = StyleSheet.create({
  imageContainer: {
    width: deviceWidth,
    height: deviceHeight / 2,
    position: "relative",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    // marginLeft: 62,
    // paddingTop: 8,
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
    margin: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "100",
    color: "#000",
    fontWeight: "bold",
  },
  detail: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F86383",
  },
});
