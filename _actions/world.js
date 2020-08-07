import axios from "axios";
import { BASE_URL } from "../_config/base_url";
import { GET_MY_WORLDS } from "./types";

//Local Types
export const WORLDS_LOADING = "WORLDS_LOADING";
export const WORLDS_FAILED = "WORLDS_FAILED";

export const getWorlds = (params) => {
  console.log(params);
  return async (dispatch) => {
    dispatch(worldLoading());
    try {
      const res = await axios.post(
        `${BASE_URL}/Authentication/get_worlds`,
        params,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (res && res.data.status === false)
        return dispatch(worldFailed(res.data));

      dispatch(getWorldSuccess(res));
    } catch (err) {
      dispatch(worldFailed(err));
    }
  };
};

//helper Functions
const worldLoading = () => ({
  type: WORLDS_LOADING,
});
const worldFailed = (err) => ({
  type: WORLDS_FAILED,
  payload: err,
});
const getWorldSuccess = (res) => ({
  type: GET_MY_WORLDS,
  payload: res,
});
