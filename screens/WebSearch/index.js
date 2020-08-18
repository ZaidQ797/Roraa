import React, { useEffect } from "react";
import { View, Linking } from "react-native";
import cstyles from "../../constants/cstyles";
import { WebView } from "react-native-webview";

class WebSearch extends React.Component {
  render() {
    return (
      <View style={cstyles.container}>
        <WebView source={{ uri: "https://google.com" }} />
      </View>
    );
  }
}

export default WebSearch;
