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
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import DatePicker from "react-native-datepicker";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
import CountryPicker from "react-native-country-picker-modal";
import config from "../../_config";

class TargetAudience2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalityEditing: false,
      goalsEditing: false,
      talentEditing: false,
      personalityEditing: false,

      loading: false,

      selectedGoals: [],
      selectedTalents: [],
      selectedPersonality: [],
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
      case "personality":
        this.setState({ selectedPersonality: selectedItems });
        break;
      case "goals":
        this.setState({ selectedGoals: selectedItems });
        break;
      case "talent":
        this.setState({ selectedTalents: selectedItems });
        break;

      default:
        return;
    }
  };
  handletarget = () => {
    const { selectedPersonality, selectedGoals, selectedTalents } = this.state;
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
      keywords,
      interests,
      device,
      languages,
    } = this.props.route.params;
    this.props.navigation.navigate("Confirm", {
      keywords: keywords,
      interests: interests,
      languages: languages,
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
      device: device,
      personality: selectedPersonality,
      goals: selectedGoals,
      talents: selectedTalents,
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
                  <Text style={styles.header}>Personality</Text>
                  <TouchableOpacity
                    style={[{ marginBottom: 30 }]}
                    onPress={() =>
                      this.setState({
                        personalityEditing: !this.state.personalityEditing,
                      })
                    }
                  >
                    <MaterialIcons
                      name={this.state.personalityEditing ? "check" : "add"}
                      size={25}
                      color="#f5656b"
                    />
                  </TouchableOpacity>
                </View>
                {!this.state.personalityEditing ? (
                  <View>
                    {this.multiSelect &&
                      this.multiSelect.getSelectedItemsExt(
                        this.state.selectedPersonality
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
                      this.onSelectedItemsChange(selectedItems, "personality")
                    }
                    selectedItems={this.state.selectedPersonality}
                    selectText="Select Personality"
                    searchInputPlaceholderText="Search Personality..."
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
                  <Text style={styles.header}>Goals and dreams</Text>
                  <TouchableOpacity
                    style={[{ marginBottom: 30 }]}
                    onPress={() =>
                      this.setState({
                        goalsEditing: !this.state.goalsEditing,
                      })
                    }
                  >
                    <MaterialIcons
                      name={this.state.goalsEditing ? "check" : "add"}
                      size={25}
                      color="#f5656b"
                    />
                  </TouchableOpacity>
                </View>
                {!this.state.goalsEditing ? (
                  <View>
                    {this.multiSelect &&
                      this.multiSelect.getSelectedItemsExt(
                        this.state.selectedGoals
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
                      this.onSelectedItemsChange(selectedItems, "goals")
                    }
                    selectedItems={this.state.selectedGoals}
                    selectText="Select Goals"
                    searchInputPlaceholderText="Search Goals..."
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
                  <Text style={styles.header}>{`Talent & Skills`}</Text>
                  <TouchableOpacity
                    style={[{ marginBottom: 30 }]}
                    onPress={() =>
                      this.setState({
                        talentEditing: !this.state.talentEditing,
                      })
                    }
                  >
                    <MaterialIcons
                      name={this.state.talentEditing ? "check" : "add"}
                      size={25}
                      color="#f5656b"
                    />
                  </TouchableOpacity>
                </View>
                {!this.state.talentEditing ? (
                  <View>
                    {this.multiSelect &&
                      this.multiSelect.getSelectedItemsExt(
                        this.state.selectedTalents
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
                      this.onSelectedItemsChange(selectedItems, "talent")
                    }
                    selectedItems={this.state.selectedTalents}
                    selectText="Select Talent"
                    searchInputPlaceholderText="Search Talent..."
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
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                this.handletarget();
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

export default TargetAudience2;

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
