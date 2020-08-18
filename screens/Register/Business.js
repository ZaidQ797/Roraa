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
import PickerUnderLineIcon from "../../components/PickerUnderLineIcon";

const validationRules = {
  name: {
    presence: { message: "^Please enter a name" },
    format: {
      pattern: "^[a-zA-Z ]{3,50}$",
      message: "^Please enter valid name",
    },
  },
  email: {
    presence: { message: "^Please enter an email address" },
    email: { message: "^Please enter a valid email address" },
  },
  password: {
    presence: { message: "^Please enter a password" },
    format: {
      pattern: "^.{6,16}$",
      message: "^Password must be at least 6 characters.",
    },
  },
  buisnessCategory: {
    presence: { message: "^Please enter a Buisness Category" },
    format: {
      pattern: "^[a-zA-Z ]{3,50}$",
      message: "^Please enter valid Buisness Category",
    },
  },
  buisnessSize: {
    presence: { message: "^Please enter a Buisness Size" },
    format: {
      pattern: "^[a-zA-Z ]{3,50}$",
      message: "^Please enter valid Buisness Size",
    },
  },
};
export default class Business extends React.Component {
  validator = new Validator();
  state = {
    name: "",
    nameError: null,
    username: "",
    usernameError: null,
    email: "",
    emailError: null,
    phoneNo: "",
    phoneNoError: null,
    password: "",
    passwordError: null,
    confirmPassword: "",
    confirmPasswordError: null,
    buisnessCategory: "",
    buisnessCategoryError: null,
    buisnessSize: "",
    buisnessSizeError: null,
    role: "Business",
    agree: false,
    over18: false,
    formError: null,
    isFormBusy: false,
    modalShow: false,
    successResponse: null,
  };

  handleValidationChange(name, value) {
    this.setState({
      [name]: value,
      [name + "Error"]: this.validator.single(name, value, validationRules),
    });
  }

  render() {
    const { navigation, onSubmit, isFormBusy, formError } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View
          style={[
            cstyles.container,
            cstyles.center,
            cstyles.padder,
            { paddingBottom: 50 },
          ]}
        >
          {/* // Background Linear Gradient */}
          <View style={[styles.topContainer]}>
            <View style={cstyles.center}>
              <Image
                source={require("./../../assets/images/logo_fill.png")}
                style={cstyles.imageMediumLogo}
              />
              <Text style={cstyles.titlePrimaryText}>{appjson.expo.name}</Text>
              <Text style={cstyles.sloganPriamryText}>{appjson.slogan}</Text>
              <Text style={styles.subtitle}>Let's start with register!</Text>
            </View>

            <View style={[cstyles.center, styles.bottomFooterRelative]}>
              <View style={cstyles.padder}>
                <InputUnderLineIcon
                  placeholder="Name"
                  icon="account"
                  value={this.state.name}
                  onChangeText={(value) =>
                    this.handleValidationChange("name", value)
                  }
                />
                {this.state.nameError && (
                  <Text style={cstyles.errorText}>{this.state.nameError}</Text>
                )}

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

                <InputUnderLineIcon
                  placeholder="Confirm Password"
                  icon="lock"
                  secureTextEntry={true}
                  value={this.state.confirmPassword}
                  onChangeText={(value) =>
                    this.handleValidationChange("confirmPassword", value)
                  }
                />
                {this.state.confirmPasswordError && (
                  <Text style={cstyles.errorText}>
                    {this.state.confirmPasswordError}
                  </Text>
                )}
                {this.state.confirmPassword.length > 0 &&
                  this.state.password !== this.state.confirmPassword && (
                    <Text
                      style={[
                        cstyles.errorText,
                        { marginTop: 10, marginBottom: -10 },
                      ]}
                    >
                      {"Passwords Did not match"}
                    </Text>
                  )}
                <InputUnderLineIcon
                  placeholder="Category & Market"
                  icon="certificate"
                  value={this.state.buisnessCategory}
                  onChangeText={(value) =>
                    this.handleValidationChange("buisnessCategory", value)
                  }
                />
                {this.state.buisnessCategoryError && (
                  <Text style={cstyles.errorText}>
                    {this.state.buisnessCategoryError}
                  </Text>
                )}

                <PickerUnderLineIcon
                  placeholder="Business Size"
                  icon="business-center"
                  pickerItems={["Small", "Medium", "Enterprise"]}
                  value={this.state.buisnessSize}
                  onValueChange={(value) =>
                    this.handleValidationChange("buisnessSize", value)
                  }
                />
                {this.state.buisnessSizeError && (
                  <Text style={cstyles.errorText}>
                    {this.state.buisnessSizeError}
                  </Text>
                )}

                {formError && (
                  <Text
                    style={[
                      cstyles.errorText,
                      { marginTop: 10, marginBottom: -10 },
                    ]}
                  >
                    {formError}
                  </Text>
                )}

                <ButtonGradient
                  text={isFormBusy ? "PLEASE WAIT..." : "REGISTER"}
                  style={{ marginTop: 20 }}
                  onPress={() =>
                    onSubmit && onSubmit(this.state, validationRules)
                  }
                />
              </View>
              <TouchableOpacity
                style={[cstyles.row]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={cstyles.linkDarkText}>
                  Already have an account?
                </Text>
                <Text
                  style={[cstyles.linkDarkText, { color: Colors.primaryColor }]}
                >
                  {" "}
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
