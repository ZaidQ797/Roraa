// import { authHeader } from '../_helpers/auth-header';
import _config from "../_config";
import Axios from "axios";
import * as Google from "expo-google-app-auth";
import config from "../_config";
import { authHeader } from "../_helpers/auth-header";
import { BASE_URL } from "../_config/base_url";
export const userService = {
  login: function (email, password) {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    return Axios.post(
      `${BASE_URL}/Authentication/login`,
      JSON.stringify({ email, password }),
      requestOptions
    ).then(handleResponse);
    // return fetch(`${_config.baseUrl}/api/users/changeStatus/${id}`, requestOptions).then(handleResponse);
  },
  register: function (data) {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    return Axios.post(
      `${_config.baseUrl}/api/auth/user/register`,
      JSON.stringify(data),
      requestOptions
    ).then(handleResponse);
    // return fetch(`${_config.baseUrl}/api/users/changeStatus/${id}`, requestOptions).then(handleResponse);
  },

  getCurrent: function () {
    let requestOptions = null;
    return authHeader("application/json").then((header) => {
      requestOptions = {
        headers: header,
      };
      return Axios.get(
        `${_config.baseUrl}/api/auth/user/`,
        requestOptions
      ).then(handleResponse);
    });
  },

  SendVerificationEmail: function (data) {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    return Axios.post(
      `${_config.baseUrl}/api/auth/user/send-verification-email`,
      JSON.stringify(data),
      requestOptions
    ).then(handleResponse);
    // return fetch(`${_config.baseUrl}/api/users/changeStatus/${id}`, requestOptions).then(handleResponse);
  },
  SendResetPasswordEmail: function (data) {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    return Axios.post(
      `${_config.baseUrl}/api/auth/user/send-resetpassword-email`,
      JSON.stringify(data),
      requestOptions
    ).then(handleResponse);
    // return fetch(`${_config.baseUrl}/api/users/changeStatus/${id}`, requestOptions).then(handleResponse);
  },
  googleRegister: function () {
    return new Promise((resolve, reject) => {
      Google.logInAsync({
        androidClientId: config.google.androidClientId,
        iosClientId: config.google.iosClientId,
        scopes: ["profile", "email"],
      })
        .then(({ type, accessToken, user }) => {
          if (type === "success") {
            const requestOptions = {
              headers: { "Content-Type": "application/json" },
            };
            resolve(
              Axios.post(
                `${_config.baseUrl}/api/auth/user/register`,
                JSON.stringify({
                  name: user.name,
                  email: user.email,
                  socialId: user.id,
                  profileImage: user.photoUrl,
                  source: "google",
                }),
                requestOptions
              ).then(handleResponse)
            );
          } else {
            // type === 'cancel'
            reject({
              response: {
                data: {
                  code: "user-cancel",
                  message: "User not allow to access his/her Google Profile",
                },
              },
            });
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  },

  googleLogin: function () {
    return new Promise((resolve, reject) => {
      Google.logInAsync({
        androidClientId: config.google.androidClientId,
        iosClientId: config.google.iosClientId,
        scopes: ["profile", "email"],
      })
        .then(({ type, accessToken, user }) => {
          if (type === "success") {
            const requestOptions = {
              headers: { "Content-Type": "application/json" },
            };
            resolve(
              Axios.post(
                `${_config.baseUrl}/api/auth/user/login`,
                JSON.stringify({
                  email: user.email,
                  socialId: user.id,
                }),
                requestOptions
              ).then(handleResponse)
            );
          } else {
            // type === 'cancel'
            reject({
              response: {
                data: {
                  code: "user-cancel",
                  message: "User not allow to access his/her Google Profile",
                },
              },
            });
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  updateUser: function (data) {
    let requestOptions = null;
    return authHeader("multipart/form-data").then((header) => {
      requestOptions = {
        headers: header,
      };
      return Axios.put(
        `${_config.baseUrl}/api/auth/user/`,
        data,
        requestOptions
      ).then(handleResponse);
    });
  },

  setExpoToken: function (token) {
    let requestOptions = null;
    return authHeader("application/json").then((header) => {
      requestOptions = {
        headers: header,
      };
      return Axios.post(
        `${_config.baseUrl}/api/auth/user/set/expo-token`,
        {
          expoToken: token,
        },
        requestOptions
      ).then(handleResponse);
    });
  },
  setLastOnline: function (timeZone) {
    let requestOptions = null;
    return authHeader("application/json").then((header) => {
      requestOptions = {
        headers: header,
      };
      return Axios.post(
        `${_config.baseUrl}/api/auth/user/set/last-online`,
        {
          lastOnline: new Date().toISOString(),
          timeZone: timeZone,
        },
        requestOptions
      ).then(handleResponse);
    });
  },
};

function handleResponse(response) {
  return response.data;
}
function handleError(e) {
  return e.response.data;
}
