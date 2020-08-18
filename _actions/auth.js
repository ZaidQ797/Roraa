import axios from "axios";
import config from "../_config";
const store_url = config.baseUrl;

const signupPersonal = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/signup`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.message);
        } else {
          rej(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err.message);
      });
  };
};
const signupBusiness = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/signup`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.message);
        } else {
          rej(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err.message);
      });
  };
};
const login = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/login`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          dispatch({
            type: "LOGIN",
            user: res.data.data,
          });
          rsl();
        } else {
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err.message);
      });
  };
};
const forgotPassword = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/forgetpassword`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data);
        } else {
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err.message);
      });
  };
};
const checkEmail = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/checkemail`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data);
        } else {
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err.message);
      });
  };
};
const thirdPartyLogin = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/loginwithgoogle`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          dispatch({
            type: "LOGIN",
            user: res.data.data,
          });
          rsl();
        } else {
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err.message);
      });
  };
};
const getUser = (data, rsl, rej, visitorId) => {
  return (dispatch) => {
    axios(`${store_url}/userdetails`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log("res is:", res.data);
        if (res.data.status == true) {
          if (visitorId) {
            rsl(res.data.data);
          } else {
            dispatch({
              type: "PROFILE",
              profile: res.data.data,
            });
            setTimeout(() => {
              rsl(res.data.data);
            }, 2000);
          }
        } else {
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const getInterest = (rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/interest`, {
      method: "post",
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.data);
        } else {
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const postInterest = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/insertinterest`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.data);
        } else {
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const getSavedInterest = (data, rsl, rej, visitorId) => {
  return (dispatch) => {
    axios(`${store_url}/getinterest`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          if (visitorId) {
          } else {
            dispatch({
              type: "SAVED_INTERESTS",
              savedInterests: res.data.data,
            });
          }
          console.log("interestsres", res.data);
          rsl(res.data.data);
        } else {
          rej();
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const getmystory = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/getmystory`, {
      method: "post",
      data,
    }).then((res) => {
      console.log(res);
      if (res.data.status == true && res.data.data != "") {
        dispatch({
          type: "STORIES",
          stories: res.data.data,
        });
        rsl(res.data.data);
      }
    });
  };
};
const insertmystory = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/insertmystory`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.message);
        } else {
          rej(res.data);
        }
      })
      .catch((e) => {
        rej(e);
      });
  };
};
const insertMyGoal = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/goals`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.message);
        } else {
          rej(res.data);
        }
      })
      .catch((e) => {
        rej(e);
      });
  };
};
const insertMyTalent = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/talent`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.message);
        } else {
          rej(res.data);
        }
      })
      .catch((e) => {
        rej(e);
      });
  };
};
const logout = (rsl, rej) => {
  return (dispatch) => {
    rsl();
    dispatch({
      type: "LOGOUT",
    });
  };
};
const getSavedGoals = (data, rsl, rej, visitorId) => {
  return (dispatch) => {
    axios(`${store_url}/getgoals`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          if (visitorId) {
          } else {
            dispatch({
              type: "SAVED_Goals",
              savedGoals: res.data.data,
            });
          }
          console.log("Goals", res.data);
          rsl(res.data.data);
        } else {
          rej();
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const getSavedTalents = (data, rsl, rej, visitorId) => {
  return (dispatch) => {
    axios(`${store_url}/gettalents`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          if (visitorId) {
          } else {
            dispatch({
              type: "SAVED_TALENTS",
              savedTalents: res.data.data,
            });
          }
          console.log("Talents", res.data);
          rsl(res.data.data);
        } else {
          rej();
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const insertMyInterest = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/insert_interest_home`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.message);
        } else {
          rej(res.data);
        }
      })
      .catch((e) => {
        rej(e);
      });
  };
};
const last_activity = (data) => {
  return (dispatch) => {
    axios(`${store_url}/last_activity`, {
      method: "post",
      data,
    })
      .then((res) => {
        // console.log(res);
        // alert(res.data.message)
      })
      .catch((e) => {
        // alert(e.message)
      });
  };
};

export {
  signupPersonal,
  signupBusiness,
  login,
  logout,
  getmystory,
  insertmystory,
  getInterest,
  getSavedInterest,
  postInterest,
  getUser,
  thirdPartyLogin,
  forgotPassword,
  checkEmail,
  insertMyGoal,
  insertMyTalent,
  getSavedGoals,
  getSavedTalents,
  insertMyInterest,
  last_activity,
};
