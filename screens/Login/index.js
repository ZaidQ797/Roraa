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
  Alert,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Config from "../../_config";
import * as Google from "expo-google-app-auth";
import * as AppleAuthentication from "expo-apple-authentication";

import { connect } from "react-redux";
import { login, thirdPartyLogin } from "../../_actions/auth";
import { bindActionCreators } from "redux";

import Loader from '../../components/Loader'

const validationRules = {
  email: {
    presence: { message: "^Please enter an email address" },
    email: { message: "^Please enter a valid email address" },
  },
  // password: {
  //   presence: { message: "^Please enter a password" },
  //   format: {
  //     // pattern: "^.{1,3}$",
  //     message: "^Password must be at least 6 characters.",
  //   },
  // },
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
    googleLogin: false,
    loader: false
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

    if (!this.state.email) {
      this.setState(this.state, () => {
        this.setState({
          formError: "*Fill all fields",
          count: 1,
          isFormBusy: false,
        });
      });
      return;
    }
    if (!this.state.password) {
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
        var formdata = new FormData();
        formdata.append("email", this.state.email);
        formdata.append("password", this.state.password);
        new Promise((rsl, rej) => {
          this.props.login(formdata, rsl, rej);
        })
          .then((res) => {
            this.setState({
              formError: null,
              isFormBusy: false,
              // count:0
            });
            this.props.navigation.replace("Styles");
          })
          .catch((errorData) => {
            this.setState({
              formError: errorData.message,
              isFormBusy: false,
              // password: "",
              // passwordError: null,
              // modalShow: true
              //   errorData.code && errorData.code == "unverified-email"
              //     ? true
              //     : false,
              // unVerifiedEmailResponse:
              //   errorData.code && errorData.code == "unverified-email"
              //     ? errorData.data
              //     : null,
              // count:0
            });
          });
      }
    );
  };

  thirdPartyLoginFun = (name, email) => {
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    new Promise((rsl, rej) => {
      this.props.thirdPartyLogin(data, rsl, rej);
    })
      .then((res) => {
        this.setState({ googleLogin: false });
        this.props.navigation.replace("Styles");
      })
      .catch((err) => {
        this.setState({ googleLogin: false });
        Alert.alert("Roraa", err.message);
      });
  };

  handleGoogleSubmit = async () => {
    try {
      this.setState({ googleLogin: true });
      const result = await Google.logInAsync({
        ...Config.google,
      });
      console.log(result);
      if (result.type === "success") {
        //return result.accessToken;
        this.thirdPartyLoginFun(result.user.name, result.user.email);
      } else {
        this.setState({ googleLogin: false });
        //return { cancelled: true };
      }
    } catch (e) {
      Alert.alert("Roraa", e.message);
      this.setState({ googleLogin: false });
      //return { error: true };
    }
  };

  render() {
    const { navigation } = this.props;
    const { googleLogin } = this.state;
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flex: 1,
          backgroundColor: "white",
        }}
      >
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
                  <ButtonGradient
                    text={
                      googleLogin ? "PLEASE WAIT..." : "Continue with Google"
                    }
                    style={{ marginTop: 20 }}
                    onPress={() => this.handleGoogleSubmit()}
                  // onPress={() => navigation.navigate('Styles')}
                  />
                  <View style={{ alignItems: "center", marginTop: 15 }}>
                    <AppleAuthentication.AppleAuthenticationButton
                      buttonType={
                        AppleAuthentication.AppleAuthenticationButtonType
                          .SIGN_IN
                      }
                      buttonStyle={
                        AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
                      }
                      cornerRadius={5}
                      style={{ width: 200, height: 44 }}
                      onPress={async () => {
                        this.setState({ loader: false })
                        try {
                          const credential = await AppleAuthentication.signInAsync(
                            {
                              requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope
                                  .FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope
                                  .EMAIL,
                              ],
                            }
                          );
                          this.setState({ loader: false })

                          console.log(credential);
                          this.thirdPartyLoginFun(credential.fullName, credential.email)
                          // this.props.navigation.navigate("Root");
                          // signed in
                        } catch (e) {
                          this.setState({ loader: false })

                          if (e.code === "ERR_CANCELED") {
                            // handle that the user canceled the sign-in flow
                          } else {
                            // handle other errors
                          }
                        }
                      }}
                    />
                  </View>
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
            {this.state.loader && <Loader />}
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
      thirdPartyLogin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
