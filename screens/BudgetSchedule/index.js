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
  Alert,
} from "react-native";
import { Header, View, Text, Left, Input, Right } from "native-base";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import cstyle from "../../constants/cstyles";
import cstyles from "../../constants/cstyles";

class BudgetSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metricEditing: false,
      totalInstalls: "",
      minBudget: "",
      maxBudget: "",
      totalInstalls: "",
      time: "",
      times: [
        { id: 0, time: "1 day", selected: true },
        { id: 1, time: "1 week", selected: false },
        { id: 2, time: "1 month", selected: false },
        { id: 3, time: "other", selected: false },
      ],
    };
  }

  handleTime = (id) => {
    this.setState({
      times: this.state.times.map((item) => {
        item.selected = false;
        if (item.id === id)
          return {
            ...item,
            selected: !item.selected,
          };
        return item;
      }),
    });
  };
  handleBudget = () => {
    const { title, image, appleUrl, androidUrl } = this.props.route.params;
    const { minBudget, maxBudget, totalInstalls } = this.state;
    const time = this.state.times.filter((item) => item.selected);
    if (!minBudget || !maxBudget) {
      Alert.alert("Rorra", "Kindly enter min and max budget");
      return;
    } else if (!totalInstalls) {
      Alert.alert("Rorra", "Kindly enter total install");
      return;
    } else if (!time) {
      Alert.alert("Rorra", "Kindly select time");
      return;
    } else {
      this.props.navigation.navigate("TargetAudi", {
        title: title,
        image: image,
        appleUrl: appleUrl,
        androidUrl: androidUrl,
        minBudget: minBudget,
        maxBudget: maxBudget,
        totalInstalls: totalInstalls,
        time: time[0].time,
      });
    }
  };
  render() {
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
          scrollEnabled={this.state.allowScroll}
          style={{
            flexGrow: 1,
          }}
        >
          <Text style={[styles.textStyle, { margin: 10 }]}>
            Budget and Schedule
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
            <Text style={[styles.headerText, { margin: 10 }]}>Budget</Text>
            <View style={{ flexDirection: "row" }}>
              <Input
                placeholder="Min"
                style={{
                  margin: 10,

                  width: "60%",
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 3,
                  alignSelf: "center",
                }}
                value={this.state.minBudget}
                onChangeText={(minBudget) => {
                  this.setState({ minBudget });
                }}
              />
              <Input
                placeholder="Max"
                style={{
                  margin: 10,

                  width: "60%",
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 3,
                  alignSelf: "center",
                }}
                value={this.state.maxBudget}
                onChangeText={(maxBudget) => {
                  this.setState({ maxBudget });
                }}
              />
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
                <Text style={styles.header}>Metric</Text>
                <TouchableOpacity
                  style={[{ marginBottom: 30 }]}
                  onPress={() =>
                    this.setState({
                      metricEditing: !this.state.metricEditing,
                    })
                  }
                >
                  <MaterialIcons
                    name={this.state.metricEditing ? "check" : "add"}
                    size={25}
                    color="#f5656b"
                  />
                </TouchableOpacity>
              </View>
              {!this.state.metricEditing ? (
                <View>
                  <Text style={[styles.headerText, { color: "#F86383" }]}>
                    {this.state.totalInstalls}
                  </Text>
                </View>
              ) : (
                <Input
                  placeholder="Total Installs"
                  onChangeText={(text) => {
                    this.setState({ totalInstalls: text });
                  }}
                  value={this.state.totalInstalls}
                  style={{
                    width: "90%",
                    backgroundColor: "white",
                    elevation: 2,
                    borderRadius: 3,
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
                <Text style={[styles.header, { marginBottom: 10 }]}>Time</Text>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.state.times}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        this.handleTime(item.id);
                      }}
                      style={{
                        paddingHorizontal: 13,
                        paddingVertical: 7,
                        elevation: 1,
                        margin: 5,
                        backgroundColor: item.selected ? "#F86383" : "white",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: item.selected ? "white" : "gray" }}>
                        {item.time}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <Text
            style={[
              styles.textStyle,
              {
                margin: 10,
                fontWeight: "100",
                textAlign: "center",
                width: "70%",
                alignSelf: "center",
              },
            ]}
          >
            You are going to spend{" "}
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>$900</Text> for
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{` 500 `}</Text>
            installs during{" "}
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>1 week</Text>
          </Text>
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                this.handleBudget();
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

export default BudgetSchedule;
