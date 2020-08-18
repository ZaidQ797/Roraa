import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/images/tick.png")}
          style={{ height: 100, width: 100 }}
          resizeMode={"contain"}
        />
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            fontWeight: "bold",
            color: "gray",
          }}
        >
          Payment Done
        </Text>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 100,
            backgroundColor: "#f5656b",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            width: "60%",
            alignSelf: "center",
          }}
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        >
          <Text style={{ color: "white" }}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Success;
