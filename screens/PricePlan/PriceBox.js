import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import cstyles from "../../constants/cstyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loader from "../../components/Loader";

import { purchase } from "../../_actions/home";

function PriceBox({ item, index, navigation, user, purchase }) {
  const [creditInfo, setCredit] = useState(null);
  const [loader, setLoader] = useState(false);

  const handlePurchase = () => {
    if (!creditInfo) {
      alert("Kindly Enter credit card values");
    } else if (creditInfo && creditInfo.values.number === "") {
      Alert.alert("Roraa", "Kindly enter credit card no");
    } else if (creditInfo && creditInfo.values.expiry === "") {
      Alert.alert("Roraa", "Kindly enter credit card expiry");
    } else if (creditInfo && creditInfo.values.cvc === "") {
      Alert.alert("Roraa", "Kindly enter credit card cvc");
    } else {
      setLoader(true);
      const formData = new FormData();
      formData.append("u_id", user && user.u_id);

      new Promise((rsl, rej) => {
        purchase(formData, rsl, rej);
      })
        .then((res) => {
          console.log(res);
          navigation.navigate("Success");
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
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={{ flex: 1, flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
      >
        <View style={styles.priceCard}>
          <View
            style={[
              styles.cardHeader,
              item === "basic"
                ? styles.bg_basic
                : item === "standard"
                ? styles.bg_standard
                : styles.bg_premium,
            ]}
          >
            <Text style={[styles.headerMain]}>
              {item === "basic"
                ? "Basic"
                : item === "standard"
                ? "Standard"
                : "Premium"}
            </Text>
            <Text style={[styles.headerSubtite, cstyles.mt_10]}>
              {item === "basic"
                ? "9.99$ / month"
                : item === "standard"
                ? "15.99$ / month"
                : "20.99$ / month"}
            </Text>
          </View>
          <View style={[styles.cardBody, cstyles.pt_15]}>
            <View style={[cstyles.row, cstyles.ml_10, cstyles.itemsCenter]}>
              <View
                style={[
                  styles.circle,
                  item === "basic"
                    ? styles.border_basic
                    : item === "standard"
                    ? styles.border_standard
                    : styles.border_premium,
                ]}
              />
              <Text style={[styles.bodyText, cstyles.ml_10]}>
                You can see the people who rated you
              </Text>
            </View>
            <View style={[cstyles.row, cstyles.ml_10, cstyles.itemsCenter]}>
              <View
                style={[
                  styles.circle,
                  item === "basic"
                    ? styles.border_basic
                    : item === "standard"
                    ? styles.border_standard
                    : styles.border_premium,
                ]}
              />
              <Text style={[styles.bodyText, cstyles.ml_10]}>
                You can see other people score
              </Text>
            </View>
            <View style={[cstyles.row, cstyles.ml_10, cstyles.itemsCenter]}>
              <View
                style={[
                  styles.circle,
                  item === "basic"
                    ? styles.border_basic
                    : item === "standard"
                    ? styles.border_standard
                    : styles.border_premium,
                ]}
              />
              <Text style={[styles.bodyText, cstyles.ml_10]}>
                You can see the people who visited your profile
              </Text>
            </View>
          </View>

          <View style={styles.cardBottom}>
            <Text style={[styles.bodyText, cstyles.ml_10]}>
              Enter Credit info
            </Text>
            <LiteCreditCardInput
              value={creditInfo}
              onChange={(change) => setCredit(change)}
            />
            <TouchableOpacity
              onPress={handlePurchase}
              style={[
                styles.butnStyle,
                item === "basic"
                  ? styles.bg_basic
                  : item === "standard"
                  ? styles.bg_standard
                  : styles.bg_premium,
                { marginTop: 30 },
              ]}
            >
              <Text style={styles.butnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        {loader && <Loader />}
      </KeyboardAwareScrollView>
    </ScrollView>
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
      purchase,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(PriceBox);

const styles = StyleSheet.create({
  priceCard: {
    flex: 0.7,
    width: Dimensions.get("window").width - 100,
    height: "50%",
    marginRight: 15,
  },
  cardHeader: {
    height: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardBody: {
    height: "55%",
  },
  headerMain: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  headerSubtite: {
    fontSize: 15,
    color: "white",
  },
  cardBottom: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  butnStyle: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 100,
  },
  butnText: {
    color: "white",
    fontSize: 14,
  },
  bg_basic: {
    backgroundColor: "#a719c3",
  },
  bg_standard: {
    backgroundColor: "#ff7794",
  },
  bg_premium: {
    backgroundColor: "#e23d7c",
  },
  border_basic: {
    borderColor: "#a719c3",
  },
  border_standard: {
    borderColor: "#ff7794",
  },
  border_premium: {
    borderColor: "#e23d7c",
  },
  circle: {
    width: 7,
    height: 7,
    borderRadius: 50,
    borderWidth: 2,
  },
  bodyText: {
    fontSize: 15,
    color: "grey",
  },
});
