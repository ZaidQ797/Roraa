import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  Component,
} from "react";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Header, View, Text, Left, Input, Right } from "native-base";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import cstyle from "../../constants/cstyles";
import cstyles from "../../constants/cstyles";
import CountryPicker from "react-native-country-picker-modal";

class TargetAudi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maleSelected: false,
      age: "",
      femaleSelected: true,
      countryEditing: false,
      country: "",
      textPress: false,
    };
  }

  onSelect = (country: Country) => {
    this.setState(
      { country: country.name, countryEditing: !this.state.countryEditing },
      () => {
        console.log(this.state.country);
      }
    );
  };

  handleTargetAud = () => {
    const { age, maleSelected, country } = this.state;
    const {
      title,
      image,
      appleUrl,
      androidUrl,
      minBudget,
      maxBudget,
      totalInstalls,
      time,
    } = this.props.route.params;
    this.props.navigation.navigate("TargetAudience", {
      title: title,
      image: image,
      appleUrl: appleUrl,
      androidUrl: androidUrl,
      minBudget: minBudget,
      maxBudget: maxBudget,
      totalInstalls: totalInstalls,
      time: time,
      age: age,
      gender: maleSelected ? "male" : "female",
      country: country,
    });
  };
  render() {
    const { formData2 } = this.props.route.params;
    console.log(formData2);
    return (
      <SafeAreaView style={[cstyle.container, cstyle.bg_white]}>
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

        <ScrollView
          style={{
            flexGrow: 1,
          }}
        >
          <Text style={[styles.textStyle, { margin: 10 }]}>
            Target Audiences
          </Text>
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
            <Text style={[styles.headerText, { margin: 10 }]}>Age</Text>
            <View style={{ flexDirection: "row" }}>
              <Input
                placeholder="Age"
                onChangeText={(age) => {
                  this.setState({ age });
                }}
                value={this.state.age}
                style={{
                  margin: 10,
                  paddingLeft: 10,
                  width: "80%",
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 3,
                  alignSelf: "center",
                }}
              />
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
              <Text style={styles.headerText}>Gender</Text>
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
                    backgroundColor: this.state.femaleSelected
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
                      femaleSelected: !this.state.femaleSelected,
                      maleSelected: false,
                    };
                  })
                }
              >
                <FontAwesome5 name={"female"} size={35} color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    marginBottom: 30,
                    backgroundColor: this.state.maleSelected
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
                      maleSelected: !this.state.maleSelected,
                      femaleSelected: false,
                    };
                  })
                }
              >
                <FontAwesome5 name={"male"} size={35} color="#ddd" />
              </TouchableOpacity>
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
            <Text style={[styles.headerText, { margin: 10 }]}>Country</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "90%", margin: 10 }}>
                {this.state.countryEditing ? (
                  <Text
                    style={[styles.textStyle, { color: "#f5656b" }]}
                    onPress={() =>
                      this.setState({
                        countryEditing: !this.state.countryEditing,
                        textPress: true,
                      })
                    }
                  >
                    {this.state.country}
                  </Text>
                ) : (
                  <CountryPicker
                    visible={this.state.textPress ? true : false}
                    onSelect={(country) => this.onSelect(country)}
                  />
                )}
              </View>
            </View>
          </View>

          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                this.handleTargetAud();
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

export default TargetAudi;
