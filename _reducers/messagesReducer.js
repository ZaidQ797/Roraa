const initialState = {
  conversation: [],
  newconversation: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ONLINE_FRIENDS":
      return {
        ...state,
        online: action.online,
      };
    case "ALL_MESSAGES":
      return {
        ...state,
        conversation: action.msg,
      };
    // case "SEND_MESSAGES":
    //   action.msg.map((item) => {
    //     state.conversation.push(item);
    //   });
    //   return {
    //     ...state,
    //     message: "1",
    //   };
    case "REMOVE_MESSAGES":
      return {
        ...state,
        conversation: [],
      };
    case "SEARCH_FRIEND":
      return {
        ...state,
        friends: action.friends,
      };

    default:
      return state;
  }
}
