const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case "NOT":
            return {
                ...state,
                online: action.online,
            };
        
        default:
            return state;
    }
}
