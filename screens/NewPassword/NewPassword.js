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
import styles from "./styles";
import appjson from "../../app.json";
import InputUnderLineIcon from "../../components/InputUnderLineIcon";
import ButtonGradient from "../../components/ButtonGradient";
import Validator from "../../_helpers/validator";
import { connect } from "react-redux";
import { forgotPassword } from "../../_actions/auth";
import { bindActionCreators } from "redux";

const validationRules = {
  email: {
    presence: { message: "^Please enter an email address" },
    email: { message: "^Please enter a valid email address" },
  },
};

class NewPassword extends React.Component {
  validator = new Validator();
  state = {
    email: "",
    otp: "",
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
    const { email } = this.props.route.params;
    if (this.state.otp === "") {
      alert("kindly enter verification code");
    } else if (this.state.password === "") {
      alert("kindly enter password");
    } else {
      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("otp", this.state.otp);
      formdata.append("newpassword", this.state.password);
      console.log(formdata);
      new Promise((rsl, rej) => {
        this.props.forgotPassword(formdata, rsl, rej);
      })
        .then((res) => {
          alert(res.message);
          this.props.navigation.navigate("Login");
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
        {/* // Background Linear Gradient */}
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
                placeholder="Verification Code"
                icon="email"
                value={this.state.otp}
                autoCapitalize="none"
                onChangeText={(value) => this.setState({ otp: value })}
              />
              <InputUnderLineIcon
                placeholder="New Password"
                icon="lock"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(value) => this.setState({ password: value })}
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
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { forgot } = state.authReducer;
  return {
    forgot,
  };
};
export default connect(mapStateToProps, { forgotPassword })(NewPassword);
