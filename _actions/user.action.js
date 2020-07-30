import { userConstants } from '../_constants/user.constants';
import { userService } from '../_services/user.service';

export const userActions = {
    login: (email, password) => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                res => {                    
                    resolve(res);
                    dispatch(success(res));
                },
                error => {
                    reject(error);
                    dispatch(failure(error));
                }
            );

        function request(email) { return { type: userConstants.LOGIN_REQUEST, email } }
        function success(res) { return { type: userConstants.LOGIN_SUCCESS, res } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    }),
    register: (data) => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request(data));

        userService.register(data)
            .then(
                user => {
                    resolve(user);
                    dispatch(success(user));
                },
                error => {
                    reject(error)
                    dispatch(failure(error));
                }
            );
        function request(data) { return { type: userConstants.REGISTER_REQUEST, data } }
        function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
        function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
    }),

    facebookRegister: () => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request());

        userService.facebookRegister()
            .then(
                user => {
                    resolve(user);
                    dispatch(success(user));
                },
                error => {
                    reject(error)
                    dispatch(failure(error));
                }
            );
        function request() { return { type: userConstants.FACEBOOK_REGISTER_REQUEST } }
        function success(user) { return { type: userConstants.FACEBOOK_REGISTER_SUCCESS, user } }
        function failure(error) { return { type: userConstants.FACEBOOK_REGISTER_FAILURE, error } }
    }),
    facebookLogin: () => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request());

        userService.facebookLogin()
            .then(
                res => {
                    resolve(res);
                    dispatch(success(res));
                },
                error => {
                    reject(error)
                    dispatch(failure(error));
                }
            );
        function request() { return { type: userConstants.FACEBOOK_LOGIN_REQUEST } }
        function success(res) { return { type: userConstants.FACEBOOK_LOGIN_SUCCESS, res } }
        function failure(error) { return { type: userConstants.FACEBOOK_LOGIN_FAILURE, error } }
    }),

    googleRegister: () => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request());

        userService.googleRegister()
            .then(
                user => {
                    resolve(user);
                    dispatch(success(user));
                },
                error => {
                    reject(error)
                    dispatch(failure(error));
                }
            );
        function request() { return { type: userConstants.GOOGLE_REGISTER_REQUEST } }
        function success(user) { return { type: userConstants.GOOGLE_REGISTER_SUCCESS, user } }
        function failure(error) { return { type: userConstants.GOOGLE_REGISTER_FAILURE, error } }
    }),
    googleLogin: () => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request());

        userService.googleLogin()
            .then(
                res => {
                    resolve(res);
                    dispatch(success(res));
                },
                error => {
                    reject(error)
                    dispatch(failure(error));
                }
            );
        function request() { return { type: userConstants.GOOGLE_LOGIN_REQUEST } }
        function success(res) { return { type: userConstants.GOOGLE_LOGIN_SUCCESS, res } }
        function failure(error) { return { type: userConstants.GOOGLE_LOGIN_FAILURE, error } }
    }),
    SendVerificationEmail: (data) => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request(data));

        userService.SendVerificationEmail(data)
            .then(
                user => {
                    resolve(user);
                    dispatch(success(user));
                },
                error => {
                    reject(error)
                    dispatch(failure(error));
                }
            );
        function request(data) { return { type: userConstants.RESEND_EMAIL_REQUEST, data } }
        function success(user) { return { type: userConstants.RESEND_EMAIL_SUCCESS, user } }
        function failure(error) { return { type: userConstants.RESEND_EMAIL_FAILURE, error } }
    }),

    SendResetPasswordEmail: (data) => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request(data));

        userService.SendResetPasswordEmail(data)
            .then(
                user => {
                    resolve(user);
                    dispatch(success(user));
                },
                error => {
                    reject(error)
                    dispatch(failure(error));
                }
            );
        function request(data) { return { type: userConstants.RESET_EMAIL_REQUEST, data } }
        function success(user) { return { type: userConstants.RESET_EMAIL_SUCCESS, user } }
        function failure(error) { return { type: userConstants.RESET_EMAIL_FAILURE, error } }
    }),

    getCurrent: (navigation) => (dispatch) => new Promise((resolve, reject) => {
        dispatch(request());

        userService.getCurrent()
            .then(
                data => {                    
                    dispatch(success(data));
                    resolve(data.user);
                },
                error => {
                    console.log(error);
                    
                    dispatch(failure(error));
                    navigation.navigate("Login");
                    reject(error)
                }
            );


        function request() { return { type: userConstants.GET_CURRENT_REQUEST } }
        function success(res) { return { type: userConstants.GET_CURRENT_SUCCESS, res } }
        function failure(error) { return { type: userConstants.LOGOUT } }
    }),

    updateUser: (data) => (dispatch) => new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        if (data.profileImage && data.profileImage.includes("file:")) {
            let uriParts = data.profileImage.split('.');
            let fileType = uriParts[uriParts.length - 1];
            formData.append("profileImage", {
                uri: data.profileImage,
                name: `photo.${fileType}`,
                type: `image/${fileType}`,
            });
        }
        dispatch(request());

        userService.updateUser(formData)
            .then(
                user => {
                    dispatch(success(user));
                    resolve(user);
                },
                error => {
                    dispatch(failure(error));
                    reject(error)
                }
            );


        function request() { return { type: userConstants.UPDATE_USER_REQUEST } }
        function success(res) { return { type: userConstants.UPDATE_USER_SUCCESS, res } }
        function failure(error) { return { type: userConstants.UPDATE_USER_FAILURE } }
    }),

    setExpoToken: (token) => (dispatch) => new Promise((resolve, reject) => {

        dispatch(request());

        userService.setExpoToken(token)
            .then(
                res => {
                    dispatch(success(token));
                    resolve(res);
                },
                error => {
                    dispatch(failure(error));
                    reject(error)
                }
            );


        function request() { return { type: userConstants.SET_USER_EXPO_TOKEN_REQUEST } }
        function success(token) { return { type: userConstants.SET_USER_EXPO_TOKEN_SUCCESS, token } }
        function failure(error) { return { type: userConstants.SET_USER_EXPO_TOKEN_FAILURE } }
    }),


    logout: function () {
        // userService.logout();
        return { type: userConstants.LOGOUT };
    }
};

