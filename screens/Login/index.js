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
  ScrollView,
  Button,
} from "react-native";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import cstyles from "../../constants/cstyles";
import styles from "./style";
import appjson from "../../app.json";
import InputUnderLineIcon from "../../components/InputUnderLineIcon";
import ButtonGradient from "../../components/ButtonGradient";
import Validator from "../../_helpers/validator";
import EmailVerificationModal from "../../components/EmailVerificationModal";
import { connect } from "react-redux";
import { userActions } from "../../_actions/user.action";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const validationRules = {
  email: {
    presence: { message: "^Please enter an email address" },
    email: { message: "^Please enter a valid email address" },
  },
  password: {
    presence: { message: "^Please enter a password" },
    format: {
      pattern: "^.{1,3}$",
      message: "^Password must be at least 6 characters.",
    },
  },
};
class Login extends React.Component {
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
    name: "",
    photoUrl: "",
  };
  handleValidationChange(name, value) {
    this.setState({
      [name]: value,
      [name + "Error"]: this.validator.single(name, value, validationRules),
    });
  }

  handleSubmit = () => {
    if (this.state.isFormBusy) {
      this.setState({
        formError: "*Please Wait..",
        count: 1,
        isFormBusy: false,
      });
      return;
    }

    if (this.validator.all(this.state, validationRules)) {
      this.setState(this.state, () => {
        this.setState({
          formError: "*Fill all fields",
          count: 1,
          isFormBusy: false,
        });
      });
      return;
    }

    this.setState(
      {
        formError: null,
        isFormBusy: true,
        successResponse: null,
        // count:0
      },
      (cb) => {
        this.props
          .dispatch(userActions.login(this.state.email, this.state.password))
          .then((res) => {
            this.setState({
              formError: null,
              isFormBusy: false,
              // count:0
            });
            this.props.navigation.replace("Styles");
          })
          .catch((e) => {
            let errorData = e.response
              ? e.response.data
              : { message: "An Error Occured!" };
            this.setState({
              formError: errorData.message,
              isFormBusy: false,
              password: "",
              passwordError: null,
              modalShow:
                errorData.code && errorData.code == "unverified-email"
                  ? true
                  : false,
              unVerifiedEmailResponse:
                errorData.code && errorData.code == "unverified-email"
                  ? errorData.data
                  : null,
              // count:0
            });
          });
      }
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, flex: 1 }}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
        >
          <View style={[cstyles.container, cstyles.center]}>
            {/* // Background Linear Gradient */}
            <View style={[styles.topContainer]}>
              <EmailVerificationModal
                // modalVisible={true}
                modalVisible={this.state.modalShow}
                data={this.state.unVerifiedEmailResponse}
                onLoginPress={() => {
                  this.setState({ modalShow: false });
                  this.props.navigation.replace("Login");
                }}
                type="unverified-email"
              />
              <View style={cstyles.center}>
                <Image
                  source={require("./../../assets/images/logo_fill.png")}
                  style={cstyles.imageMediumLogo}
                />
                <Text style={cstyles.titlePrimaryText}>
                  {appjson.expo.name}
                </Text>
                <Text style={cstyles.sloganPriamryText}>{appjson.slogan}</Text>
                <Text style={styles.subtitle}>Let's start with Log in!</Text>
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
                    <Text style={cstyles.errorText}>
                      {this.state.emailError}
                    </Text>
                  )}

                  <InputUnderLineIcon
                    placeholder="Password"
                    icon="lock"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(value) =>
                      this.handleValidationChange("password", value)
                    }
                  />
                  {this.state.passwordError && (
                    <Text style={cstyles.errorText}>
                      {this.state.passwordError}
                    </Text>
                  )}

                  {this.state.formError && (
                    <Text
                      style={[
                        cstyles.errorText,
                        { marginTop: 10, marginBottom: -10 },
                      ]}
                    >
                      {this.state.formError}
                    </Text>
                  )}
                  <ButtonGradient
                    text={this.state.isFormBusy ? "PLEASE WAIT..." : "LOG IN"}
                    style={{ marginTop: 20 }}
                    onPress={this.handleSubmit}
                    // onPress={() => navigation.navigate('Styles')}
                  />
                </View>
                <TouchableOpacity
                  style={[cstyles.row]}
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <Text style={cstyles.linkDarkText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[cstyles.row, { marginTop: 15 }]}
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={cstyles.linkDarkText}>
                    You don't have an account?
                  </Text>
                  <Text
                    style={[
                      cstyles.linkDarkText,
                      { color: Colors.primaryColor },
                    ]}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  const { loggedIn, token, user } = state.authentication;
  return { loggedIn, token, user };
}

export default connect(mapStateToProps)(Login);
