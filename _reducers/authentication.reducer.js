import { userConstants } from '../_constants/user.constants';

const initialState = { loggedIn: false, token: null, user: null, settings: null }

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: false,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                token: action.res.token,
                user: action.res.user
            };

        case userConstants.LOGIN_FAILURE:
            return {};


        case userConstants.REGISTER_REQUEST:
            return {
                loggingIn: false,
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                loggingIn: false,
            };

        case userConstants.REGISTER_FAILURE:
            return {};


        case userConstants.GET_CURRENT_SUCCESS:
            return {
                loggedIn: true,
                token: state.token,
                user: action.res.user,
                settings: action.res.settings
            };

        case userConstants.UPDATE_USER_SUCCESS:
            return {
                loggedIn: true,
                token: state.token,
                user: action.res
            };

        case userConstants.SET_USER_EXPO_TOKEN_SUCCESS:
            let user = state.user;
            user.expoToken = action.token;
            return {
                loggedIn: true,
                token: state.token,
                user: user
            };



        case userConstants.FACEBOOK_REGISTER_REQUEST:
            return {
                loggingIn: false,
            };
        case userConstants.FACEBOOK_REGISTER_SUCCESS:
            return {
                loggingIn: false,
            };

        case userConstants.FACEBOOK_REGISTER_FAILURE:
            return {};


        case userConstants.FACEBOOK_LOGIN_REQUEST:
            return {
                loggingIn: false,
            };
        case userConstants.FACEBOOK_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                token: action.res.token,
                user: action.res.user
            };

        case userConstants.GOOGLE_REGISTER_REQUEST:
            return {
                loggingIn: false,
            };
        case userConstants.GOOGLE_REGISTER_SUCCESS:
            return {
                loggingIn: false,
            };

        case userConstants.GOOGLE_REGISTER_FAILURE:
            return {};


        case userConstants.GOOGLE_LOGIN_REQUEST:
            return {
                loggingIn: false,
            };
        case userConstants.GOOGLE_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                token: action.res.token,
                user: action.res.user
            };

        case userConstants.FACEBOOK_LOGIN_FAILURE:
            return {};


        case userConstants.LOGOUT:
            return initialState;

        default:
            return state
    }
}