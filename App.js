import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as Font from "expo-font";
import * as firebase from "firebase";
import { firebaseConfig } from "./_config/firebase_config";
// firebase.initializeApp(firebaseConfig);
import { AppLoading } from "expo";
import { Root } from "native-base";

import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./_helpers/store";

import AppNavs from "./AppNavs";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      "Gill Sans": require("./assets/fonts/gillsans.ttf"),
    }).then((f) => {
      this.setState({ loading: false });
    });
  }

  render() {
    // const isLoadingComplete = useCachedResources();

    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    } else {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavs />
          </PersistGate>
        </Provider>
      );
    }
  }
}
