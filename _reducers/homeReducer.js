const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SAVED_INTERESTS":
      return {
        ...state,
        savedInterests: action.savedInterests,
      };
    case "SAVED_Goals":
      return {
        ...state,
        savedGoals: action.savedGoals,
      };
    case "SAVED_TALENTS":
      return {
        ...state,
        savedTalents: action.savedTalents,
      };
    case "GET_WORLDS":
      return {
        ...state,
        worlds: action.worlds,
      };
    case "GET_DISCOVERS":
      return {
        ...state,
        discovers: action.discovers,
      };
    case "GET_SHOWS":
      return {
        ...state,
        shows: action.shows,
      };
    case "STORIES":
      return {
        ...state,
        stories: action.stories,
      };
    case "GET_VISITOR":
      return {
        ...state,
        visitors: action.visitors,
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        edit: action.edit,
      };
    case "ADD_WORLD":
      return {
        ...state,
        world: action.world,
      };
    case "GET_STARS":
      return {
        ...state,
        first: action.first,
        scnd: action.scnd,
        thrd: action.thrd,
        belowrow: action.belowrow,
      };
    case "GET_SCORES":
      return {
        ...state,
        scores: action.scores,
      };
    case "GET_RATING":
      return {
        ...state,
        rating: action.rating,
      };

    default:
      return state;
  }
}
