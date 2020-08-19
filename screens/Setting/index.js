import React, { Fragment, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Header, Left, Body, List, ListItem, View, Right } from "native-base";
import cstyles from "../../constants/cstyles";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import { deleteAccount } from "../../_actions/home";
import { logout } from "../../_actions/auth";
import { bindActionCreators } from "redux";

function Visitors({ navigation, user, deleteAccount, logout }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderModal = () => {
    return (
      <Modal
        isVisible={modalVisible}
        coverScreen={true}
        hasBackdrop={true}
        animationIn="slideInUp"
        onSwipeComplete={toggleModal}
        swipeDirection="up"
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 4,
            height: Dimensions.get("window").height / 3.5,
          }}
        >
          <AntDesign
            name="close"
            size={24}
            color={"tomato"}
            onPress={toggleModal}
            style={{ padding: 10 }}
          />
          <Text
            style={[styles.textStyle, { alignSelf: "center", fontSize: 17 }]}
          >
            Are you sure to delete your account?
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
              margin: 30,
              flex: 1,
              // marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                {
                  marginTop: 10,
                  padding: 20,
                  width: "40%",
                  margin: 10,
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "lightgray",
                },
              ]}
              onPress={() => {
                toggleModal();
              }}
            >
              <Text style={[styles.butnText, { color: "gray" }]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { marginTop: 10, padding: 20, width: "40%", margin: 10 },
              ]}
              onPress={() => {
                handleDelete();
              }}
            >
              {loading ? (
                <ActivityIndicator animating color="white" />
              ) : (
                <Text style={styles.butnText}>Remove</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const handleDelete = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("u_id", user && user.u_id);
    new Promise((rsl, rej) => {
      deleteAccount(formData, rsl, rej);
    })
      .then((res) => {
        setLoading(false);
        toggleModal();
        new Promise((rsl, rej) => {
          logout(rsl, rej);
        }).then((res) => {
          navigation.navigate("Splash");
        });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };
  return (
    <Fragment>
      <SafeAreaView style={[cstyles.container, cstyles.bg_white]}>
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
            <Text style={styles.mainText}>Settings</Text>
          </Body>
          <Right />
        </Header>
        <ScrollView style={cstyles.container}>
          <List style={cstyles.mt_25}>
            <ListItem style={styles.noBorder}>
              <Text style={[styles.textStyle, styles.colorGrey]}>Account</Text>
            </ListItem>
            <ListItem
              style={styles.noBorder}
              onPress={() => navigation.navigate("ProfileDetail")}
            >
              <Text style={styles.textStyle}>Edit your account</Text>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Text style={[styles.textStyle, styles.colorGrey]}>
                Help & Support
              </Text>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Text style={styles.textStyle}>Rating guideline</Text>
            </ListItem>
            <ListItem
              style={styles.noBorder}
              onPress={() => navigation.navigate("PricePlan")}
            >
              <Text style={styles.textStyle}>Roraa gold</Text>
            </ListItem>
            <ListItem
              style={styles.noBorder}
              onPress={() => {
                Linking.openURL(
                  "https://www.termsfeed.com/privacy-policy/e8f0e366e7086a0d7124178811ce09f2"
                );
              }}
            >
              <Text style={styles.textStyle}>Privacy policy</Text>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Text style={styles.textStyle}>Terms and condition</Text>
            </ListItem>
            <ListItem
              style={[styles.noBorder]}
              onPress={() => {
                Linking.openURL("https://roraa.com/");
              }}
            >
              <Text style={styles.textStyle}>EULA agreement</Text>
            </ListItem>
            <View style={[styles.divider]} />
            <ListItem style={[styles.noBorder]}>
              <Text style={[styles.textStyle, styles.colorGrey]}>Logout</Text>
            </ListItem>
            <ListItem
              style={[styles.noBorder]}
              onPress={() => {
                toggleModal();
              }}
            >
              <Text style={[styles.textStyle, styles.colorRed]}>
                Delete your account
              </Text>
            </ListItem>
          </List>
        </ScrollView>
        {modalVisible && renderModal()}
      </SafeAreaView>
    </Fragment>
  );
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteAccount, logout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Visitors);

const styles = StyleSheet.create({
  mainText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 18,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  buttonStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 14,
    height: 40,
    backgroundColor: "#ff726f",
    justifyContent: "center",
    alignItems: "center",
  },
  butnText: {
    fontSize: 13,
    color: "white",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "800",
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 30,
  },
  colorRed: {
    color: "#ff726f",
  },
  colorGrey: {
    color: "grey",
  },
});
