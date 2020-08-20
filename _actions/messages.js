import axios from "axios";
import config from "../_config";
const store_url = config.baseUrl;

const getOnlineFriends = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/myonline_friends`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const getHighlights = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/highlights`, {
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
      });
  };
};
const getAllMessages = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/MyAllMsgs`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          rsl(res.data.data);
        } else {
          rej({ message: "You have no messagees yet" });
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const getConversation = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/Convo`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          dispatch({
            type: "ALL_MESSAGES",
            msg: res.data.data,
          });
          rsl(res.data.data);
        } else {
          rej({ message: "Send your first message" });
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
const sendMessage = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/SendMsg`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          // dispatch({
          //   type: "SEND_MESSAGES",
          //   msg: [res.data.data],
          // });
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
const removeMessage = (data, rsl, rej) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_MESSAGES",
    });
  };
};
const get_new_msgs = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/get_new_msgs`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log("newmsg", res);
        if (res.data.status == true) {
          dispatch({
            type: "SEND_MESSAGES",
            msg: res.data.data,
          });
          rsl(res.data.data);
        } else {
          // rej(res.data)
        }
      })
      .catch((err) => {
        console.log(err);
        // rej(err)
      });
  };
};
const searchFriend = (data, rsl, rej) => {
  return (dispatch) => {
    axios(`${store_url}/search_user_for_msg`, {
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          dispatch({
            type: "SEARCH_FRIEND",
            friends: res.data.data,
          });
          rsl(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  };
};
export {
  getOnlineFriends,
  getAllMessages,
  getConversation,
  sendMessage,
  removeMessage,
  get_new_msgs,
  getHighlights,
  searchFriend,
};
