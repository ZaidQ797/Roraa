import { WORLD_LOADING, WORLD_FAILED } from "../_actions/world";
import { GET_MY_WORLDS } from "../_actions/types";

const initialState = {
  status: "",
  message: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  errMsg: null,
  myWorlds: null,
};

export const worldReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORLD_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
      };
    case WORLD_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        errMsg: action.payload.message,
      };
    case GET_MY_WORLDS:
      return {
        ...state,
        myWorlds: action.payload.data.data,

        message: action.payload.data.message,

        isLoading: false,
        isSuccess: true,
        isError: false,
        errMsg: null,
      };

    default:
      return state;
  }
};
