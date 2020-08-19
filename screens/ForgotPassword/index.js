import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import cstyles from "../../constants/cstyles";
import styles from "./style";
import appjson from "../../app.json";
import InputUnderLineIcon from "../../components/InputUnderLineIcon";
import ButtonGradient from "../../components/ButtonGradient";
import Validator from "../../_helpers/validator";
import { connect } from "react-redux";
import { checkEmail } from "../../_actions/auth";
import { bindActionCreators } from "redux";

const validationRules = {
  email: {
    presence: { message: "^Please enter an email address" },
    email: { message: "^Please enter a valid email address" },
  },
};

class ForgotPassword extends React.Component {
  validator = new Validator();
  state = {
    email: "",
    emailError: null,
    password: "",
    passwordError: null,
    formError: null,
    isFormBusy: false,
    modalShow: false,
    unVerifiedEmailResponse: null,
  };

  handleValidationChange(name, value) {
    this.setState({
      [name]: value,
      [name + "Error"]: this.validator.single(name, value, validationRules),
    });
  }
  handleSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === "") {
      alert("kindly enter email");
    } else if (reg.test(this.state.email) === false) {
      alert("kindly enter valid email");
    } else {
      const formData = new FormData();
      formData.append("email", this.state.email);
      new Promise((rsl, rej) => {
        this.props.checkEmail(formData, rsl, rej);
      })
        .then((res) => {
          this.props.navigation.navigate("NewPassword", {
            email: this.state.email,
          });
          alert(res.message);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={[cstyles.container, cstyles.center]}>
        <View style={[styles.topContainer]}>
          <View style={cstyles.center}>
            <Image
              source={require("./../../assets/images/logo_fill.png")}
              style={cstyles.imageMediumLogo}
            />
            <Text style={cstyles.titlePrimaryText}>{appjson.expo.name}</Text>
            <Text style={cstyles.sloganPriamryText}>{appjson.slogan}</Text>
            <Text style={styles.subtitle}>Forgot Password?</Text>
            <Text style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}>
              {"Enter your email address below \nto reset password."}
            </Text>
          </View>

          <View style={[cstyles.center, styles.bottomFooterRelative]}>
            <View style={cstyles.padder}>
              <InputUnderLineIcon
                placeholder="Email"
                icon="email"
                value={this.state.email}
                autoCapitalize="none"
                onChangeText={(value) =>
                  this.handleValidationChange("email", value)
                }
              />
              {this.state.emailError && (
                <Text style={cstyles.errorText}>{this.state.emailError}</Text>
              )}
              {this.state.formError && (
                <Text
                  style={[
                    cstyles.errorText,
                    { marginTop: 10, marginBottom: 0 },
                  ]}
                >
                  {this.state.formError}
                </Text>
              )}
              <ButtonGradient
                text="SUBMIT"
                text={this.state.isFormBusy ? "PLEASE WAIT..." : "SUBMIT"}
                style={{ marginTop: 5 }}
                onPress={this.handleSubmit}
              />
            </View>
            <TouchableOpacity
              style={[cstyles.row, { marginTop: 0 }]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={cstyles.linkDarkText}>Back to</Text>
              <Text
                style={[cstyles.linkDarkText, { color: Colors.primaryColor }]}
              >
                {" "}
                Login
              </Text>
            </TouchableOpacity>

            <View style={{ height: 100 }}></View>
          </View>
        </View>

        {/* <View style={cstyles.bottomFooter}>




                    <TouchableOpacity style={[cstyles.button, cstyles.roundEdgeButton]}
                        onPress={() => {
                            navigation.navigate("OnBoarding")
                        }}
                    >
                        <Text style={cstyles.buttonText}>GET STARTED</Text>
                    </TouchableOpacity>
                 
                </View> */}
      </View>
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
      checkEmail,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
