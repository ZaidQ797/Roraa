import axios from "axios";
import config from "../_config";
const store_url = config.baseUrl;

const getWorlds = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/get_worlds`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          dispatch({
            type: "GET_WORLDS",
            worlds: res.data.data,
          });
          rsl();
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
const insertworldviews = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/insertworldviews`, {
      method: "post",
      data,
    });
    // don't uncomment this, it's just for testing purpose
    // .then((res) => {
    //   alert(res.data.message)
    //   console.log(res);
    //   rsl()
    // })
    // .catch((err) => {
    //   console.log(err);
    //   rej(err);
    // });
    // don't uncomment this, it's just for testing purpose
  };
};
const getDiscovers = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/discover`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          dispatch({
            type: "GET_DISCOVERS",
            discovers: res.data.data,
          });
          setTimeout(() => {
            rsl();
          }, 1000);
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
const getShows = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/allsave`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          dispatch({
            type: "GET_SHOWS",
            shows: res.data.data,
          });
          rsl();
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
const addShow = (data, rsl, rej) => {
  return (dispatch) => {
    console.log("in fun");
    axios(`${store_url}/addshow`, {
      method: "post",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          // dispatch({
          //     type: "GET_SHOWS",
          //     shows: res.data.data,
          // });
          rsl(res.data.message);
        } else {
          // dispatch({
          //     type: "GET_SHOWS",
          //     shows: res.data.data,
          // });
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const getVisitors = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/getmyvistor`, {
      method: "post",
      data,
    }).then((res) => {
      console.log(res);
      if (res.data.status == true) {
        dispatch({
          type: "GET_VISITOR",
          visitors: res.data.data,
        });
      }
    });
  };
};
const addFollower = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/follow`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl();
        } else {
          rej(res.data.message);
        }
      })
      .catch((err) => {
        rej(err);
      });
  };
};
const insertvisitors = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/insertvisitors`, {
      method: "post",
      data,
    });
  };
};
const editProfile = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/changenamedp`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          // dispatch({
          //   type: "EDIT_PROFILE",
          //   edit: res.data,
          // });
          rsl(res.data);
        } else {
          // dispatch({
          //   type: "EDIT_PROFILE",
          //   edit: res.data,
          // });
          rej(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const getStars = (rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/top_300`, {
      method: "post",
    })
      .then((res) => {
        console.log("====>", res);
        if (res.data.status == true) {
          dispatch({
            type: "GET_STARS",
            first: res.data.data.first,
            scnd: res.data.data.scnd,
            thrd: res.data.data.thrd,
            belowrow: res.data.data.belowrow,
          });
          rsl(res.data);
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
const newWorld = (data, rsl, rej) => {
  console.log("===>", data);
  return (dispatch) => {
    axios(`${store_url}/addworld`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
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
        rej(err);
      });
  };
};
const favShow = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/show_wishlist`, {
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
        rej(err);
      });
  };
};
const rateMe = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/rating`, {
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
        rej(err);
      });
  };
};

const showViewCount = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/showsviews`, {
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
        rej(err);
      });
  };
};
const newAds = (data, rsl, rej) => {
  console.log("Data ===>", data);
  return (dispatch) => {
    axios(`${store_url}/rora_ad`, {
      method: "post",
      data,
    })
      .then((res) => {
        if (res.data.status == true) {
          rsl(res.data);
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
const getScores = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/all_users_score`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log("====>", res);
        if (res.data.status == true) {
          dispatch({
            type: "GET_SCORES",
            scores: res.data.data,
          });
          rsl(res.data);
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
const getRating = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/user_rating`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log("====>", res);
        if (res.data.status == true) {
          dispatch({
            type: "GET_RATING",
            rating: res.data.data,
          });
          rsl(res.data);
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
const deleteWorld = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/delete_world`, {
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
        rej(err);
      });
  };
};
const purchase = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/purchase_plan`, {
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
        rej(err);
      });
  };
};

export {
  getWorlds,
  insertworldviews,
  getDiscovers,
  getShows,
  getVisitors,
  addFollower,
  insertvisitors,
  editProfile,
  newWorld,
  addShow,
  getStars,
  favShow,
  rateMe,
  showViewCount,
  newAds,
  getScores,
  getRating,
  deleteWorld,
  purchase,
};
